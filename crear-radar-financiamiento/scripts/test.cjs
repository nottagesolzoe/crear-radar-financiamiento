// Simulación local sin red, correo ni cuenta Google. Ejecutar: node test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto');

class Sheet {
  constructor() { this.rows = []; }
  getLastRow() { return this.rows.length; }
  appendRow(r) { this.rows.push([...r]); }
  getDataRange() { return {getValues: () => this.rows.map(r => [...r])}; }
  getRange(row, col) { return {setValue: value => { this.rows[row - 1][col - 1] = value; }}; }
}
const tabs = {}, sent = [], calls = [];
let failSearch = false, llmCalls = 0, failMail = false;
const book = {getSheetByName: n => tabs[n],
  insertSheet: n => (tabs[n] = new Sheet())};
const ctx = vm.createContext({
  console, SpreadsheetApp: {getActiveSpreadsheet: () => book},
  Session: {getScriptTimeZone: () => 'America/Montevideo'},
  PropertiesService: {getScriptProperties: () => ({getProperty: () => 'fake-test-value'})},
  LockService: {getScriptLock: () => ({tryLock: () => true, releaseLock() {}})},
  Utilities: {DigestAlgorithm: {SHA_256: 'sha256'}, computeDigest: (_, s) =>
    [...crypto.createHash('sha256').update(s).digest()]},
  MailApp: {sendEmail: (...args) => { if (failMail) throw new Error('mail interrupted'); sent.push(args); }},
  UrlFetchApp: {fetch: (url, opts) => {
    calls.push({url, payload: JSON.parse(opts.payload)});
    if (url.includes('openrouter')) {
      llmCalls++;
      return {getResponseCode: () => 200, getContentText: () =>
        JSON.stringify({choices: [{message: {content: 'Sugerencia no verificada'}}]})};
    }
    return {getResponseCode: () => failSearch ? 429 : 200, getContentText: () =>
      JSON.stringify({organic: [
        {title: '=formula', link: 'https://funder.example/call?edition=1&utm_source=test#x', snippet: 'Candidate'},
        {title: 'Alias', link: 'https://funder.example/call?edition=1', snippet: 'same URL'}
      ]})};
  }}
});
vm.runInContext(fs.readFileSync(__dirname + '/Code.gs', 'utf8'), ctx);
const call = name => vm.runInContext(name + '()', ctx);
const set = (key, value) => {
  const row = tabs.Config.rows.find(r => r[0] === key);
  row[1] = value;
};
const get = (key) => tabs.Config.rows.find(r => r[0] === key)[1];
call('prepararRadar');
assert.equal(get('AUTORIZAR_ENVIO'), 'false');
assert.throws(() => call('probarRadar'), /confirmar el perfil/);
set('proyecto', 'Synthetic project');
set('descripcion_publica', 'Synthetic profile');
set('PERFIL_CONFIRMADO', 'true');
set('consultas_json', '["synthetic funding"]');
call('probarRadar');
assert.equal(sent.length, 0);
assert.equal(llmCalls, 0);
assert.equal(tabs.Candidatos.rows.length, 2, 'deduplicate tracking URL');
assert.equal(tabs.Candidatos.rows[1][1], "'=formula", 'escape spreadsheet formula');
const headers = tabs.Candidatos.rows[0], row = tabs.Candidatos.rows[1];
const edit = (key, value) => row[headers.indexOf(key)] = value;
edit('verificacion', 'confirmado');
call('actualizarInforme');
assert.match(tabs.Informe.rows.at(-1)[1], /PENDIENTES/);
const snap = JSON.parse(row[headers.indexOf('snapshot')]);
assert.equal(snap.verificacion, 'pendiente', 'cannot confirm from snippets');
const d = new Date();
const future = new Date(d.getTime() + 60 * 86400000).toISOString();
const fields = {titulo: 'Synthetic Call', ciclo: 'test', tipo: 'convocatoria',
  estado: 'abierta', cierre_iso: future, monto_moneda: '100 EUR por proyecto',
  applicant_type: 'cooperativa', elegibilidad: 'compatible', actividad: 'capacitación',
  restricciones: 'solo capacitación', fit: 'alto', dias_preparacion: '7',
  fuente_oficial_comprobada: 'si', revisado_iso: d.toISOString()};
['evidencia_estado', 'evidencia_fecha', 'evidencia_monto', 'evidencia_applicant']
  .forEach(k => fields[k] = 'https://funder.example/call sección test ' + d.toISOString());
Object.entries(fields).forEach(([k,v]) => edit(k,v));
call('actualizarInforme');
assert.equal(JSON.parse(row[headers.indexOf('snapshot')]).verificacion, 'confirmado');
const eventCount = tabs.Eventos.rows.length;
call('actualizarInforme');
assert.equal(tabs.Eventos.rows.length, eventCount, 'same snapshot: no new change event');
set('PRUEBA_AJUSTADA', 'true');
set('AUTORIZAR_ENVIO', 'true');
set('DESTINATARIO', 'test@example.invalid');
call('probarRadar');
assert.equal(sent.length, 0, 'dry run overrides sending config');
call('ejecutarRadar');
assert.equal(sent.length, 1);
call('ejecutarRadar');
assert.equal(sent.length, 1, 'same delivered version: no resend');
edit('cierre_iso', new Date(d.getTime() + 65 * 86400000).toISOString());
call('actualizarInforme'); // A preview must not erase the later change alert.
call('ejecutarRadar');
assert.equal(sent.length, 2);
assert.match(sent[1][2], /CAMBIOS DETECTADOS/);
assert.match(sent[1][2], /antes/);
failSearch = true;
call('probarRadar');
assert.equal(tabs.Busquedas.rows.at(-1)[3], 'error');
assert.match(tabs.Informe.rows.at(-1)[1], /EJECUCION PARCIAL/);
failSearch = false;
set('USAR_LLM', 'true');
call('probarRadar');
assert.equal(llmCalls, 1);
assert.equal(calls.at(-1).payload.model, 'google/gemini-2.5-flash');
assert.equal(calls.at(-1).payload.temperature, 0.1);
edit('cierre_iso', '2020-01-01T00:00:00Z');
call('actualizarInforme');
assert.equal(JSON.parse(row[headers.indexOf('snapshot')]).estado, 'cerrada');
set('USAR_LLM', 'false');
failMail = true;
assert.throws(() => call('ejecutarRadar'), /mail interrupted/);
failMail = false;
assert.throws(() => call('ejecutarRadar'), /envío incierto/);
assert.equal(sent.length, 2, 'uncertain delivery blocks retry');
console.log('PASS: profile gate, dry run, URL dedup, formula escape, evidence gate, history, changes, errors, LLM config, expiry, uncertain delivery.');

