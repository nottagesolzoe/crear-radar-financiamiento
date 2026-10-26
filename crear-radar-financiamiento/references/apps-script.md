# Recorrido Google Apps Script

BORRADOR. Enseñar cada paso cuando corresponda y hacer exactamente una pregunta por turno. Esta guía es para copiar y pegar, no presupone saber programar. No ejecutar sobre un radar existente.

## Antes del código

[English guide](apps-script.en.md)

Esta ruta se enseña con ChatGPT sin Plus y se ofrece también a usuarios de Claude, Gemini u otros asistentes para ejecución recurrente. No requiere contratar un asistente de pago.

Completar entrevista, síntesis confirmada, perfil y criterios de la receta. Explicar que Apps Script automatiza tareas en una cuenta Google, Serper aporta búsquedas y OpenRouter un análisis opcional. Apps Script está sujeto a cuotas; las APIs externas pueden requerir pago. Consultar las cuotas y las condiciones de las cuentas antes de probar. No ejecutar llamadas hasta que la persona acepte ese uso y el envío del perfil reducido a los proveedores.

Si no quiere APIs, entregar las consultas para pegarlas en un buscador. Completar las fichas manualmente a partir de las bases y guardar el historial en una hoja. Puede repetir esa operación cada semana sin Plus ni programación.

## Crear la copia privada

1. Crear una hoja nueva en Google Sheets. No usar la hoja del radar activo. Conservar acceso restringido.
2. Abrir Extensiones > Apps Script. Reemplazar el contenido inicial por todo [Code.gs](../scripts/Code.gs) y guardar. El asistente puede mostrar el archivo íntegro para copiar, sin pedir que se escriba código.
3. Seleccionar prepararRadar y ejecutarla. Revisar el consentimiento Google. Si la cuenta no permite esos permisos, detener esta ruta y usar la manual. Esta función crea pestañas, no activadores ni correos.
4. En Config, escribir proyecto y descripcion_publica. Usar una descripción mínima sin datos privados. El perfil completo queda en un documento propio. Cuando esa descripción haya sido confirmada, escribir true en PERFIL_CONFIRMADO.
5. Pegar en consultas_json una lista como ["community garden grants Argentina","subvenciones huertas comunitarias Argentina"]. Son consultas ilustrativas, no fuentes comprobadas. El asistente construye la lista real con los idiomas y actividades del proyecto. Máximo tres consultas por ejecución. Variar el año según la fecha real; no dejar 2026 fijo.
6. Dejar MAX_RESULTADOS en 10 para empezar. MODELO_LLM conserva google/gemini-2.5-flash como en el código de origen. USAR_LLM=false permite revisar manualmente sin llamar al modelo. Para usarlo, confirmar acceso y condiciones de OpenRouter antes de cambiar a true.
7. En Configuración del proyecto > Propiedades del script, agregar SERPER_API_KEY con una clave propia. Si usa LLM, agregar OPENROUTER_API_KEY. No pegar claves en código, Config, chat o GitHub. Otros editores del proyecto pueden acceder a sus propiedades; no compartir el proyecto con claves reales.
8. Mantener AUTORIZAR_ENVIO=false y PRUEBA_AJUSTADA=false. No completar destinatarios de otras personas durante las pruebas. Seleccionar zona horaria del proyecto y conservar su nombre IANA en ZONA. El script usa UTC para auditoría y el activador utilizará la zona del proyecto.

## Primera prueba y lectura oficial

Ejecutar probarRadar. Esta función puede consumir Serper y, si fue habilitado, OpenRouter; nunca envía correo aunque Config permita envío. Revisar Busquedas e Informe. Un error de proveedor se registra como error y no como búsqueda vacía.

Candidatos contiene descubrimientos pendientes. El asistente debe acompañar la lectura de las bases, una oportunidad por vez. No cambiar verificacion a confirmado por una sugerencia del modelo. Abrir la fuente oficial en el navegador y completar:

| Columna | Qué escribir |
| --- | --- |
| id | Identificador estable del programa y ciclo. El inicial es de descubrimiento por URL. Al consolidar aliases, conservar un solo registro. |
| titulo, url, ciclo, tipo | Nombre, URL oficial de la edición, edición o ID, y convocatoria. Para directorios/portales conservar su tipo y estado pendiente. |
| verificacion, estado | confirmado o pendiente; abierta, futura, cerrada, continua o desconocida. |
| cierre_iso | Fecha/hora con zona, por ejemplo 2027-04-15T17:00:00-03:00, solo si surge de las bases; continua únicamente si es explícito. |
| monto_moneda, applicant_type | Monto y moneda con unidad (por proyecto/bolsa), tipo de solicitante y condiciones. |
| elegibilidad | compatible, incompatible o pendiente; comparar con el perfil confirmado. |
| actividad, restricciones | Actividad y gasto que cubriría, límites y gastos excluidos. Si explícitamente no hay una restricción, indicarlo con fuente. |
| fit, dias_preparacion | alto/medio/bajo con justificación en el perfil; días que necesita realmente la persona para aplicar. |
| evidencia_estado, evidencia_fecha, evidencia_monto, evidencia_applicant | URL oficial, sección/página, extracto breve y fecha de consulta para cada campo. |
| fuente_oficial_comprobada | si únicamente después de verificar entidad y dominio. |
| revisado_iso | Fecha y hora real de esa revisión, en ISO con zona. No inventarla ni rejuvenecerla automáticamente. |
| pendientes | Dudas, próxima acción y quién puede resolverlas; no borrar el dato original sin conservarlo en Eventos. |
| snapshot, version | Columnas internas; no editar. |

Si las bases no publican hora, zona o monto, conservar la ficha pendiente. El adaptador exige revisión en los últimos siete días para conservar confirmado; es una regla conservadora de este borrador, configurable en una futura revisión, no una regla del financiador.

La deduplicación automática inicial elimina repetición de URL y seguimiento. La revisión por programa/ID/ciclo y aliases es manual: comparar cada candidato nuevo con historial; ante una misma edición, actualizar la ficha existente, conservar URL alternativa y registrar la fusión en Eventos antes de retirar la fila redundante. No fusionar ciclos distintos. Esta limitación impide presentar la búsqueda cruda como un radar ya depurado.

Ejecutar actualizarInforme para aplicar cambios sin consumir APIs. Revisar separaciones y ranking. Corregir criterios y volver a probar. Si no devuelve oportunidades, revisar idiomas, términos, recencia, geografía y capacidad de lectura antes de concluir que no existen.

## Historial y cambios

Candidatos conserva fichas; Busquedas documenta consultas y fallas; Eventos conserva snapshots nuevos y modificados; Entregas registra correo efectivamente enviado; Informe guarda salidas de revisión. La búsqueda no entrega automáticamente los candidatos.

Repetir actualizarInforme no genera eventos de cambio para una ficha idéntica. El informe muestra versiones no enviadas por este adaptador; para un uso manual, la persona conserva además la fecha y versión entregada en la plantilla de historial. Un registro visto en la hoja puede seguir apareciendo hasta que se entregue. Las correcciones de campos y vencimientos producen una nueva versión, con antes/después en Eventos. Nunca borrar historial para ocultar duplicados.

## Correo y programación, solo después

Este borrador no deja ninguna tarea creada. Primero otra persona debe probarlo, documentar errores y aprobar el ajuste. La autorización del perfil no autoriza programación ni destinatarios.

Tras prueba y ajuste con la persona:
- Mostrar configuración consolidada, proveedor, costos posibles, consultas, frecuencia, día, hora, zona, canal, destinatario único y qué hacer sin novedades. Obtener autorización explícita antes de activarlo.
- Para una prueba real de correo autorizada, establecer DESTINATARIO a una dirección propia, PRUEBA_AJUSTADA=true y AUTORIZAR_ENVIO=true. Ejecutar ejecutarRadar. Verificar Entregas y correo recibido. Luego volver a false si la prueba no autoriza continuidad.
- Para ejecución recurrente autorizada, abrir Activadores (reloj) > Añadir activador; función ejecutarRadar, implementación principal, evento basado en tiempo y frecuencia/día/franja acordados. No usar onOpen como función programada.
- Confirmar el activador visible, zona, función, última y próxima ejecución si la interfaz las informa. Los activadores de tiempo pueden ejecutar dentro de una franja; explicar la diferencia si se necesita exactitud al minuto.
- Para pausar, eliminar/deshabilitar ese activador y poner AUTORIZAR_ENVIO=false. No tocar otros activadores. Mirar Ejecuciones y Eventos ante fallas.

El código no instala activadores por sí mismo. Un activador puede buscar y generar informe sin correo si AUTORIZAR_ENVIO=false. No presentar esa modalidad como entrega por email.

## Fallas y recuperación

- HTTP distinto de 200: revisar proveedor, saldo, cuotas y claves en su panel. No imprimir claves ni cuerpos completos de error. No reintentar automáticamente.
- Sin organic: error de estructura. Cero elementos en organic con respuesta válida: búsqueda sin resultados, no error.
- OpenRouter falla: conservar candidatos para lectura manual. No sustituir el modelo sin informar.
- Error de correo o interrupción: Entregas puede quedar en iniciando. Se bloquean nuevos envíos hasta revisar enviados. Si se envió, marcar enviado; si se comprobó que no se envió, marcar no_enviado antes de reintentar. No se garantiza entrega exactamente una vez ante una interrupción.
- Error de autenticación o permisos del activador: el registro de ejecuciones Google puede ser el único aviso. No prometer alerta por email si falla el propio servicio de correo.
- PDF, JavaScript, login o página inaccesible: aportar bases o leer manualmente. El código no las extrae.
- Cuotas o tabla grande: reducir consultas/resultados o frecuencia. El borrador está pensado para un radar pequeño; no es un servicio de monitoreo a escala.

## Referencias técnicas consultadas

[Activadores instalables](https://developers.google.com/apps-script/guides/triggers/installable), [Propiedades](https://developers.google.com/apps-script/guides/properties), [cuotas de Apps Script](https://developers.google.com/apps-script/guides/services/quotas), [API de OpenRouter](https://openrouter.ai/docs/api_reference/overview) y [Serper](https://serper.dev/). Consulta: 26 de octubre de 2026. No se validaron credenciales ni disponibilidad del modelo en una cuenta real.

