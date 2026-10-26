# Crear radar financiamiento

[English: Create a funding radar](crear-radar-financiamiento.en.md)

**Estado:** BORRADOR. Pendiente de revisión editorial y prueba por otra persona. Sin número histórico asignado.

**Tiempo de preparación:** primera sesión de 30 a 60 minutos como estimación de diseño, más el tiempo de leer bases y probar la entrega. No es un tiempo medido.

**Resultado:** perfil confirmado, búsquedas adaptadas, primera selección revisada y registro reutilizable. La programación es una decisión posterior; no forma parte del estado de este borrador.

## Sobre esta receta

Una coincidencia temática no alcanza para recomendar financiamiento. La decisión es qué oportunidades permiten pagar actividades concretas de tu proyecto, quién puede solicitarlas y si hay tiempo y capacidad para ejecutarlas. Esta receta transforma esa decisión en un radar que puedas repetir.

La IA ayuda a leer materiales, proponer búsquedas y comparar requisitos. La información de un buscador sirve para descubrir oportunidades; las bases oficiales permiten comprobarlas. Una propuesta de la IA sigue siendo una interpretación hasta que revises su conexión con tu proyecto.

## Ingredientes reales

Una descripción, página o documentos del proyecto; acceso a un asistente; un lugar privado para guardar perfil e historial. No necesitás una web ni saber programar. La ruta Apps Script requiere una cuenta de Google y, si usás búsqueda y modelo por API, cuentas y claves propias de Serper y OpenRouter. Esos servicios pueden tener costos independientes.

## Preparación

1. **Elegí el recorrido.** La primera intervención contiene exactamente una pregunta: «¿Qué asistente tenés disponible? A. ChatGPT. B. Claude. C. Gemini. D. Otro o no sé». En otro turno pregunta por tu plan o tipo de acceso. Si usás ChatGPT sin Plus, te enseña Apps Script. Si usás Claude o Gemini, adapta la receta a ese asistente y ofrece Apps Script para ejecución recurrente o cuando falten herramientas. No supone navegación, memoria ni programación por tener un plan pago. Si no sabés qué tenés, ayuda a comprobarlo. Siempre existe una alternativa manual.
2. **Presentá tu proyecto.** La siguiente pregunta solicita una descripción del proyecto con las actividades que necesita financiar. En otro turno, pide su web o materiales alternativos. La IA lee lo accesible y registra URL o archivo, sección o página y fecha de consulta. Si no puede leerlo, solicita el contenido pertinente sin simular acceso.
3. **Confirmá la interpretación.** Recibís una síntesis en tres bloques: documentado, inferencia de la IA y pendiente. La única pregunta del turno es si confirmás, corregís o todavía no sabés. Si corregís, se actualiza y vuelve a confirmar antes de filtrar.
4. **Resolvé lo que falta.** La IA pregunta un campo por turno y omite lo ya respondido: país, geografía del proyecto, tipo de entidad, solicitante, administrador de fondos, población, etapa, monto, duración y capacidad. Distingue residencia, nacionalidad, registro legal y lugar de ejecución. «No sé» conserva el dato pendiente; no te vuelve inelegible.
5. **Decidí qué entra.** Elegí clases de oportunidades, exclusiones y restricciones negociables mediante preguntas sucesivas. Por ejemplo, una beca individual puede ser adecuada para una persona y no cubrir salarios institucionales. Un consorcio puede abrir una vía, pero requiere un socio real. La IA explica alternativas antes de pedir una decisión y registra las razones.
6. **Construí las búsquedas.** Relacioná actividad, tema, territorio y tipo de instrumento; agregá sinónimos e idiomas pertinentes. Combiná búsquedas amplias con portales de financiadores identificados. Probá versiones con y sin año, PDF y filtros de recencia para no perder bases vigentes publicadas antes. Guardá consultas exactas y fuentes. El año se obtiene de la fecha de ejecución.
7. **Definí la entrega.** Una pregunta por turno resuelve frecuencia, día, hora, zona horaria, canal, formato y comportamiento sin novedades. El correo requiere destinatarios autorizados y una prueba privada. Una falla de búsqueda nunca equivale a «no hay oportunidades».
8. **Probá antes de programar.** Mostrá perfil, criterios, consultas y entrega consolidados. Ejecutá una búsqueda pequeña, abrí las bases oficiales y armá fichas con actividad financiable y restricciones. Separá confirmadas y pendientes usando el [protocolo](../../crear-radar-financiamiento/references/protocolo.md). Pedí una sola evaluación de los resultados, corregí consultas o criterios y repetí lo necesario. Una búsqueda sin resultados también puede revelar filtros demasiado estrechos.
9. **Implementá el recorrido elegido.** Con ChatGPT, Claude o Gemini, usá las herramientas disponibles y el [prompt de continuidad](../../crear-radar-financiamiento/prompts/continuidad.md). En la ruta Apps Script, seguí la [guía de Apps Script](../../crear-radar-financiamiento/references/apps-script.md), que permite copiar y pegar el código sin escribirlo. Si no querés APIs, ejecutá las consultas en el navegador y conservá la tabla manualmente. Primero obtené una salida revisable; solo después de prueba, ajuste y autorización explícita se enseña a agregar la programación. Esta entrega no la activa.

La [skill de soporte](../../crear-radar-financiamiento/SKILL.md) conserva los estados y reglas. Para empezar sin instalación, copiá el [prompt autocontenido](../../crear-radar-financiamiento/prompts/inicio.txt) en tu asistente.

## Cómo saber si quedó bien

Elegí una ficha y comprobá en las bases su estado, fecha exacta, monto y tipo de solicitante. Revisá si el gasto propuesto está permitido y si existe una vía institucional documentada. Repetí con una ficha pendiente: tiene que indicar qué falta y cómo resolverlo. Volvé a ejecutar con el mismo historial: un registro igual no se anuncia como nuevo; un cambio de plazo debe mostrar antes, después y fuente. No tomes una salida de ejemplo como una prueba real.

## Curaduría de textos pertinentes y verificados

Son referencias operativas, no bibliografía académica ni evidencia de eficacia del radar. Consultadas el 26 de octubre de 2026.

- Grants.gov, s. f., [Applicant Eligibility](https://www.grants.gov/applicants/applicant-eligibility). Fundamenta comprobar elegibilidad antes de invertir en una postulación. Es una guía de su sistema, no una regla universal de entidades admisibles.
- Google for Developers, s. f., [Installable Triggers](https://developers.google.com/apps-script/guides/triggers/installable). Referencia técnica para el recorrido programado. Los activadores temporales pueden ejecutarse dentro de una franja, no garantizan un minuto exacto.
- Google for Developers, s. f., [Properties Service](https://developers.google.com/apps-script/guides/properties). Explica el almacenamiento de configuración del script. No autoriza compartir secretos con editores.
- OpenAI, s. f., [Set up scheduled tasks](https://developers.openai.com/training/walkthroughs/scheduled-tasks). Sustenta probar en un chat y ajustar antes de programar. Debe comprobarse disponibilidad en la cuenta concreta.

## ¿Qué podés hacer después?

**Ya resolviste:** qué buscar y cómo comprobar si puede financiar tus actividades.

**Si tenés oportunidades confirmadas:** la próxima decisión es elegir una postulación y convertir sus bases en un plan de trabajo y presupuesto. Esa receta queda por desarrollar.

**Si predominan pendientes:** resolvé primero la elegibilidad institucional o el acceso a bases, y repetí la prueba.

**Para continuar:** «Usá mi perfil y el historial del radar. Hacé una pregunta por turno. ¿Querés A. revisar una oportunidad confirmada, B. resolver un requisito pendiente o C. repetir la búsqueda? No envíes postulaciones ni programes tareas sin autorización».

## Revisión editorial

¿APROBADA / CASI / REHACER?

