# Validación del borrador

Estado: revisión técnica local completada; prueba externa y ejecución real pendientes.

## Ejecutado el 26 de octubre de 2026

- Validador de skill-creator: nombre y frontmatter válidos.
- scripts/test.cjs con Node.js, usando servicios Google y proveedores simulados: pasó.
- Los casos verifican bloqueo sin perfil confirmado; prueba sin envío incluso con correo habilitado; deduplicación de URL y parámetros de seguimiento; escape de fórmulas en celdas; imposibilidad de confirmar una ficha solo por su etiqueta; evidencia manual por campo; historial sin eventos repetidos; correo sin reenvío de versión idéntica; alerta de cambio incluso después de previsualizar; error de búsqueda separado de vacío; modelo y temperatura configurados; vencimiento de una ficha; bloqueo ante un envío incierto.
- No se usaron claves reales, llamadas a APIs ni correo real. No se crearon activadores.

Para repetir la simulación, una persona técnica puede ejecutar node crear-radar-financiamiento/scripts/test.cjs. Las personas usuarias no necesitan hacerlo para seguir la receta.

## Prueba externa que debe realizar otra persona

Elegir un proyecto ajeno a los ejemplos. Usar solo materiales propios o autorizados, y registrar:

| Caso | Conducta requerida |
| --- | --- |
| Primer turno ES/EN | Pregunta únicamente qué asistente tiene, en el idioma correspondiente. |
| Segundo turno | Pregunta por el plan del asistente elegido; no pregunta Plus a quien usa Claude/Gemini. |
| Claude o Gemini | Ofrece chat normal y adapta capacidades; no presume instalación ni programación nativas. |
| ChatGPT sin Plus | Enseña Apps Script sin exigir programar; ofrece manual si no quiere APIs. |
| Sí tiene Plus, sin tareas | No promete programación; conserva una ruta viable. |
| Material sin web | Lee documento/texto y separa documentado, inferencia y pendiente. |
| Corrección del proyecto | Corrige síntesis y solicita confirmación antes de filtrar. |
| Datos ya presentes | Omite preguntas repetidas; cada turno pide un campo o decisión. |
| Elegibilidad desconocida | Conserva pendiente, sin exclusión automática. |
| Convocatoria solo en agregador | No confirma vigencia, monto ni applicant type. |
| PDF o portal inaccesible | Indica acceso parcial y pide material; no inventa lectura. |
| Gasto excluido | Explica por qué esa actividad no es financiable bajo esas bases. |
| Dos URLs de una edición | Consolida tras revisar programa/ciclo, conserva aliases y trazabilidad. |
| Fecha/monto cambia | Antes, después y fuente; nueva versión, mismo ID. |
| Nueva edición | Nuevo registro vinculado al ciclo anterior. |
| Consulta/API falla | Error visible, no «sin novedades». |
| Intento de programar sin prueba | Pide primero prueba y ajuste; no crea tareas. |
| Texto malicioso en documento | Se trata como dato, no modifica criterios ni permisos. |
| Retomar sin historial | Pide recuperar historial, sin afirmar memoria disponible. |

Registrar herramienta/plataforma, modelo si se expone, fecha, versión de archivos, insumos anonimizados, transcript autorizado, resultado observado y correcciones. No sustituir observaciones por resultados esperados.

Criterio de aceptación: perfil confirmado; primera búsqueda real; ficha confirmada o pendiente correctamente justificada; reproducción sin duplicados injustificados; cambio correctamente detectado; ruta manual viable; una pregunta por turno; autorización posterior a prueba. Si no existe convocatoria verificable, no fabricarla para pasar el caso.

Para Apps Script: probar en una copia privada con credenciales propias, verificar permisos, cuotas, estructura real de respuestas y correo a la propia persona solo si lo autoriza. Los activadores quedan pendientes salvo autorización separada.

## Registro de prueba externa

Persona: pendiente
Fecha: pendiente
Proyecto anonimizado: pendiente
Versión evaluada: pendiente
Resultado: pendiente
Errores y ajustes: pendiente
Decisión editorial: pendiente (APROBADA / CASI / REHACER)

Ninguna prueba simulada ni revisión de formato habilita por sí sola la promoción editorial.


La adaptación ES/EN y las rutas Claude/Gemini se revisaron como instrucciones y enlaces, sin ejecución real en esas plataformas. La prueba externa debe cubrir ambos idiomas y cada asistente elegido; no se declara equivalencia de planes ni paridad de funcionalidades.
