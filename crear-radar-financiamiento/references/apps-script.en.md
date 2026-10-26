# Google Apps Script without coding

[Español](apps-script.md)

DRAFT. Teach one step at a time and ask exactly one question per turn. Use a new private copy, never an existing active radar. This route supports ChatGPT without Plus and users of Claude, Gemini or other assistants who want recurring execution.

## Before calling services

Complete the confirmed project profile, criteria and a minimal description approved for external processing. Explain that Serper receives queries and optional OpenRouter receives this description and public snippets. External APIs may require credits and have costs independent of an assistant subscription. Obtain agreement before making paid calls. Never ask for keys in chat.

Without APIs, provide browser queries and copyable records. Read official rules manually and maintain history in a private sheet. This remains a viable radar without scheduling.

## Copy and configure

1. Create a new private Google Sheet.
2. Open Extensions > Apps Script. Replace the starter content with all of [Code.gs](../scripts/Code.gs) and save. The assistant may show the exact file for copying; it must not invent unavailable source code.
3. Select prepararRadar and run it. Review Google's permissions. If the account disallows them, stop this route and use manual repetition. This function creates tabs, not triggers or email.
4. In Config, fill proyecto (project name) and descripcion_publica (approved minimal profile). Keep the full profile separately. Set PERFIL_CONFIRMADO to true only after confirmation.
5. Set consultas_json to a JSON list of up to three actual queries, for example ["community garden funding Uruguay","fondos huertas comunitarias Uruguay"]. These are illustrative queries, not verified funding sources. Use relevant languages and the actual execution year where useful.
6. Start with MAX_RESULTADOS=10. USAR_LLM=false avoids the model call; Serper searches still use its API. For optional LLM use, verify OpenRouter access and conditions before setting true. MODELO_LLM initially remains google/gemini-2.5-flash, temperature 0.1; no availability or price guarantee is made.
7. In Project Settings > Script Properties add your own SERPER_API_KEY. Add OPENROUTER_API_KEY only if using the model. Do not put keys in code, Config, chat or GitHub. Project editors can access properties.
8. Keep AUTORIZAR_ENVIO=false (sending off) and PRUEBA_AJUSTADA=false (trial not accepted). Use the project time-zone setting and record its IANA name in ZONA. Audit timestamps use UTC; future time triggers use the project time zone.

The shared code's names and output labels remain Spanish. Both language guides use the same code and data, preventing divergent implementations. Ask the assistant to translate the report into English while preserving facts and links; this does not verify its content.

## First trial and official review

Run probarRadar. It can consume the enabled APIs but cannot send mail even if sending is enabled in Config. Review Busquedas (search log), Informe (report) and Candidatos (candidates). Errors are recorded as errors, not empty searches.

All discoveries start pending. Open official rules for each edition and fill the following fields with actual evidence:

| Field | Value and meaning |
| --- | --- |
| id | Stable programme/cycle identifier. Initial discovery ID is derived from URL. |
| titulo, url, ciclo, tipo | Title, official edition URL, cycle/ID, resource type. Use convocatoria for a funding call. Portals/directories remain pending. |
| verificacion | confirmado (confirmed) or pendiente (pending). A label alone does not confirm anything. |
| estado | abierta (open), futura (future), cerrada (closed), continua (rolling), desconocida (unknown). |
| cierre_iso | Exact official date/time with zone in ISO, such as 2027-04-15T17:00:00-03:00; continua only if officially rolling. Do not invent missing time or zone. |
| monto_moneda, applicant_type | Original amount/currency and unit, legal applicant type and conditions. |
| elegibilidad | compatible, incompatible or pendiente, compared to the confirmed profile. |
| actividad, restricciones | Actual activity and cost, allowed uses, limits and exclusions. Document an explicit absence of restrictions with its source. |
| fit, dias_preparacion | alto/medio/bajo (high/medium/low), justified in the profile; preparation days agreed with the person. |
| evidencia_estado, evidencia_fecha, evidencia_monto, evidencia_applicant | Official URL, section/page, short evidence excerpt and actual review date for each field. |
| fuente_oficial_comprobada | si only after checking official entity and domain. |
| revisado_iso | Actual review timestamp in ISO with zone. Never automatically refresh it without a new review. |
| pendientes | Missing evidence and next action/responsible person. |
| snapshot, version | Internal fields; do not edit. |

A confirmed record needs all four official evidence fields and a review within the previous seven days. Seven days is a conservative draft rule, not a funder requirement. If exact time, zone or amount is unpublished, leave the record pending.

Initial automated deduplication handles identical URLs and tracking parameters. Programme/cycle/alias deduplication is manual: compare new records, retain one per edition, preserve alternate URLs and record the consolidation in Eventos before removing a redundant row. Do not merge different cycles.

Run actualizarInforme to apply reviewed changes without API calls. It does not send email. Review the classifications and ranking, adjust queries or criteria and repeat. Failure to find results does not establish that no funding exists.

## History

Candidatos retains records, Busquedas queries, Eventos new/changed snapshots, Entregas email delivery attempts and Informe review outputs. An unchanged snapshot does not create a new change event. A preview does not erase a later change alert. Reports include versions not emailed by this adapter; manually delivered versions must also be recorded in your own history.

Keep a private [profile](../assets/profile.en.md) and the shared CSV history templates. Do not publish real profiles or contacts.

## Optional email and scheduling, later

This draft creates no tasks. Independent review and a trial with adjustments come first. Profile confirmation does not authorize sending or triggers.

After showing a consolidated configuration and obtaining explicit authorization:
- For a real email test, use one address belonging to the testing person in DESTINATARIO, set PRUEBA_AJUSTADA=true and AUTORIZAR_ENVIO=true, then run ejecutarRadar. Check Entregas and receipt. Set sending back to false if continuity was not authorized.
- Only for authorized recurrence, open Triggers (clock) > Add Trigger; select ejecutarRadar and a time-driven event with the agreed frequency/day/time window. Do not schedule onOpen.
- Verify the visible trigger, function, project time zone and available execution evidence. Time triggers may run within a window, so do not promise delivery at an exact minute.
- To pause, remove/disable that trigger and set AUTORIZAR_ENVIO=false. Do not change unrelated triggers.

No automatic trigger installation is included. A search-only trigger without sending is not email delivery.

## Failures and limits

HTTP or response errors: check provider access, credits, quotas and keys privately. No automatic retries or full provider-error dumps. A failed LLM leaves candidates for manual review. Do not silently change models.

An interrupted email attempt can leave Entregas marked iniciando. New sending is blocked until the person checks Sent mail. Mark enviado only if actually sent; if verified unsent, mark no_enviado before retrying. Exactly-once delivery is not guaranteed across interruptions.

Check Google's Executions log for authorization/trigger errors; email cannot be guaranteed as an error channel when mail itself fails. PDFs, logins, dynamic pages and official verification require manual or assistant reading outside this adapter. Large histories can exceed Apps Script quotas; this is a small-radar draft.

Official references read on 26 October 2026: [installable triggers](https://developers.google.com/apps-script/guides/triggers/installable), [properties](https://developers.google.com/apps-script/guides/properties), [quotas](https://developers.google.com/apps-script/guides/services/quotas), [OpenRouter API](https://openrouter.ai/docs/api_reference/overview), [Serper](https://serper.dev/). No real credentials, provider access, mail or triggers were tested.

