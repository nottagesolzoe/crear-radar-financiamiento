# Arquitectura y configuración

## Ubicación

La entrada pedagógica vive en recetaria/recipes/crear-radar-financiamiento.md. La carpeta crear-radar-financiamiento contiene la skill de soporte, prompts, plantillas y adaptación técnica, siguiendo el patrón del itinerario EDA y su skill especializada. No reemplaza recetaria ni recetaria-editorial y no recibe un número de las 30 recetas.

Flujo lógico: entrevista por estado; perfil confirmado; plan de búsqueda; descubrimiento; verificación oficial; comparación con perfil e historial; ranking; prueba y ajuste; entrega; programación opcional autorizada. No requiere varios agentes ni modelos.

## Modelo y herramientas

- Chat: ChatGPT, Claude, Gemini u otro, con modelo disponible elegido por la persona. Registrar nombre/versionado si el entorno lo expone; si no, «no verificable». La primera pregunta identifica el asistente y la siguiente el plan o tipo de acceso. Las capacidades se verifican sin deducirlas de la suscripción.
- Apps Script: configuración inicial MODELO_LLM = google/gemini-2.5-flash, tomada del código aportado, no una afirmación de disponibilidad o de ser el modelo más barato. Validar acceso en la cuenta al probar; no sustituir silenciosamente. Temperatura 0.1. El modelo solo sugiere fit y no confirma hechos desde snippets.
- Descubrimiento: Serper, endpoint https://google.serper.dev/search. Límite inicial 10 resultados por consulta, hasta tres consultas por ejecución en este borrador. No filtra por último mes ni elimina PDF por defecto. Se pueden usar consultas multilingües y dominios del financiador. Registrar exactamente cuáles se ejecutaron.
- Análisis opcional: OpenRouter, endpoint https://openrouter.ai/api/v1/chat/completions. Un fallo deja candidatos disponibles para revisión manual y un error visible.
- Verificación: lectura oficial con navegador/documentos por el asistente o la persona. El adaptador no abre automáticamente páginas ni PDFs; no promete verificación autónoma.
- Persistencia: hoja privada con Config, Candidatos, Busquedas, Eventos, Entregas e Informe. El perfil narrativo conserva evidencia y decisiones fuera de la tabla compacta. En otros entornos usar plantillas CSV o tablas equivalentes.
- Entrega: informe en hoja por defecto. Correo de texto plano solo si se habilita explícitamente tras prueba. No se interpreta HTML generado por un modelo.
- Programación: capacidades reales del chat o activador temporal instalado por la persona. Ninguno creado en este borrador.

## Datos y secretos

SERPER_API_KEY y OPENROUTER_API_KEY se guardan en Propiedades del script, nunca en código ni en Config. Las propiedades son accesibles al proyecto y sus editores; mantener acceso privado. No son un gestor de secretos independiente.

Solo enviar al modelo la descripción mínima autorizada y resultados públicos. Serper recibe consultas; OpenRouter recibe el perfil reducido y snippets. No enviar documentos institucionales completos, contactos, claves o datos sensibles. No publicar perfiles o correos reales en GitHub. No registrar cuerpos de error del proveedor, porque pueden incluir datos de entrada.

El adaptador usa un candado para impedir ejecuciones simultáneas, límites de llamadas, validación HTTP y un registro de eventos append-only. No reintenta automáticamente envíos inciertos. Historial y entrega usan versiones distintas. Tras un corte ambiguo de correo, revisar el correo enviado antes de reintentar para evitar duplicación.

## Límites del borrador

No incluye OCR, extracción oficial autónoma, garantías de entrega ni exactitud al minuto de activadores. El ranking completo se aprende en la receta; el adaptador ordena etiquetas introducidas por la persona. No evalúa legalmente una postulación. Ninguna ejecución de API, Gmail o activadores se validó con credenciales en esta implementación.

