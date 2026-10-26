# Verificación, ranking e historial

## Descubrir no equivale a verificar

Registrar consulta exacta, idioma, fecha y hora, herramienta, filtros, cobertura y resultado (éxito sin candidatos, éxito con candidatos, parcial o error). No confundir error de API con búsqueda vacía. Un agregador puede señalar una convocatoria, pero no confirma sus condiciones.

Abrir la web del financiador y las bases de la edición. Registrar fuente, título, sección o página, extracto breve y fecha de acceso por cada campo decisivo. Conservar enlaces alternativos y versión o hash del documento cuando sea posible. Una marca oficial en la tabla debe reflejar una comprobación real del dominio y de la entidad.

## Ficha mínima

- ID estable: financiador, programa, ciclo/edición e identificador oficial si existe.
- Tipo de recurso: convocatoria, portal, directorio o fondo recurrente.
- Estado de verificación: confirmado o pendiente. Separar estado temporal: abierta, futura, cerrada, continua o desconocida.
- Fechas: apertura y cierre exactos, hora y zona según bases, fecha UTC derivada si se conoce la zona, fecha de consulta. No asumir 23:59 si solo publican día. Con hora o zona desconocida, marcar pendiente y advertir el límite de comparación. «Continua, sin cierre» solo si las bases lo dicen.
- Monto: moneda, mínimo/máximo, por proyecto o por entidad; distinguir bolsa total, premio y cofinanciamiento. Conservar monto original; conversión opcional con fecha y fuente. No inventar monto si las bases no lo publican.
- Applicant type: persona, entidad, consorcio; registro, nacionalidad/residencia, países admisibles, socio lead y quién administra. Contrastar cada requisito con un dato documentado del perfil.
- Actividad y gasto concretos financiables, vínculo con las bases, exclusiones de gasto, contrapartida, overhead, duración, reportes y restricciones de uso de datos o productos.
- Elegibilidad: compatible, incompatible o pendiente, con razones y evidencia por requisito. Una convocatoria puede estar confirmada y el proyecto seguir pendiente de elegibilidad.
- Fit: alto si la actividad central y su gasto están contemplados; medio si cubre un componente real; bajo si exige cambiar el propósito. Justificar con las actividades del perfil.
- Plazo disponible: días hasta cierre con zona conocida y días de preparación necesarios acordados con la persona. Si no alcanza, explicarlo; no inventar que puede aplicar.
- Próxima acción, pendiente específico, responsable de resolverlo y URL oficial.

Confirmado exige comprobar en fuentes oficiales estado, fecha exacta, monto y applicant type de esa edición. Si las bases omiten alguno, conservar como pendiente; no degradar «no publicado» a «no elegible». Si fuentes oficiales se contradicen, conservar ambas y pedir aclaración al financiador mediante la persona. No enviar consultas automáticamente.

## Selección y ranking explicable

Primero aplicar solo exclusiones expresamente acordadas y contradicciones documentadas. Conservar su razón en historial, aunque no aparezcan en el informe. Desconocidos pasan a pendientes.

Separar tres bandejas: confirmadas con proyecto compatible; pendientes de fuente o elegibilidad; archivo de cerradas/incompatibles/excluidas. Futuras y continuas tienen sección propia, sin urgencia inventada.

En cada bandeja ordenar por fit alto/medio/bajo, después elegibilidad compatible/pendiente, después factibilidad de preparación (alcanza/no determinada/no alcanza), después fecha de cierre más próxima entre las factibles. Mostrar esos componentes; no dar falsa precisión con porcentajes. Plazo desconocido al final. La persona puede cambiar el orden; registrar la regla acordada.

## Duplicados y cambios

Normalizar URL quitando fragmentos y parámetros de seguimiento, sin borrar parámetros que identifican edición o convocatoria. Comparar también financiador, título, ID y ciclo. Si dos URLs refieren a la misma edición, conservar una ficha y aliases; si no está claro, revisar sin fusionar automáticamente.

Nueva edición = nuevo registro enlazado al anterior. Misma edición con plazo, monto, applicant type, estado o restricciones modificados = evento de cambio. Guardar valor anterior, nuevo, fuente, fecha detectada y motivo. Misma edición sin cambios = actualizar última consulta sin volver a anunciar. Un cambio de redacción sin efecto no dispara alerta.

Separar descubrimiento, verificación y entrega: que una ficha exista no significa que se haya notificado. Registrar fecha, canal y versión efectivamente enviada. Si falla envío, dejarlo pendiente; no confirmar recepción. Evitar reenvíos solo tras un envío exitoso de esa misma versión.

## Informe

Fecha y cobertura; nuevas confirmadas; cambios comprobados; pendientes con próximos pasos; fuentes no accesibles y errores. Cada recomendación explica actividad, restricciones y vía de presentación. Si no hay novedades, respetar la preferencia explícita de silencio o resumen vacío. Una falla operativa siempre debe quedar visible en el registro y, según canal disponible, como alerta técnica.

