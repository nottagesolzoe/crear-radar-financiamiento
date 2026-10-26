# Adaptación por asistente / Assistant adapters

Consulta documental: 26 de octubre de 2026. Adaptaciones propuestas, sin prueba real en cuentas externas.

## Español

Primero preguntar qué asistente tiene. Después preguntar por su plan o acceso en un turno independiente. Si responde «otro/no sé», ayudar a identificarlo con una sola pregunta. Usar el idioma de la conversación; si falta, una pregunta de idioma ocupa su propio turno. No pedir dos datos bajo una única interrogación.

### ChatGPT

Pegar [inicio.txt](../prompts/inicio.txt) en un chat. Si puede cargar archivos, aportar la receta y los materiales; si no, pegar el texto pertinente. Preguntar por el plan: gratis, Plus, otro, no sé. Con ChatGPT sin Plus, enseñar Apps Script como ruta de implementación. Con Plus u otro acceso, comprobar las herramientas disponibles. La programación se plantea después de prueba y ajuste, nunca por tener un plan determinado.

Referencia: [Scheduled tasks](https://learn.chatgpt.com/docs/automations). La disponibilidad depende del plan y configuración; este paquete no comprueba las capacidades de una cuenta concreta.

### Claude

Ruta universal: pegar el mismo prompt en un chat y aportar materiales accesibles. Preguntar por acceso gratis, pago/institucional o desconocido. Si Claude puede leer archivos, aportar la receta y referencias; si no, pegar los fragmentos requeridos.

Ruta opcional: usar la carpeta de esta skill si la cuenta ofrece skills y permite habilitarlas. Verificar las opciones visibles y seguir su documentación; no afirmar que quedaron instaladas por compartir GitHub. No exigir Claude Code, una API o terminal. Un proyecto de Claude puede organizar materiales si está disponible, pero no prueba ejecución recurrente. Si falta búsqueda, aportar bases; si falta persistencia, guardar tablas; para programación, ofrecer Apps Script después de probar.

Referencia: [What are skills?](https://support.claude.com/en/articles/12512176-what-are-skills). Documenta instrucciones y recursos en carpetas y el requisito de ejecución de código habilitada. No implica que esta skill se haya instalado o validado en Claude.

### Gemini

Ruta universal: pegar el prompt en un chat Gemini. Preguntar por acceso gratis, pago/institucional o desconocido. No asumir funcionalidades por el nombre del plan ni confundir la app Gemini con Gemini por API u OpenRouter.

Ruta opcional: si ofrece crear Gems, usar «Crear radar financiamiento» como nombre y pegar el prompt como instrucciones, sin credenciales ni perfiles de otras personas. Probarlo en la vista disponible y verificar que conserva una pregunta por turno. Un Gem conserva instrucciones de una tarea; no se presenta como un activador, una base de historial o un servicio de correo. Para esas funciones ofrecer Apps Script o repetición manual si no están realmente disponibles.

Referencia: [Get started with Gems](https://support.google.com/gemini/answer/15236321?hl=en). Describe personalización con instrucciones y diferencias entre clientes. No prueba programación ni lectura de todos los materiales.

### Comprobación de capacidades

Consultar las herramientas expuestas por el entorno. Para lo que no se pueda comprobar, preguntar una capacidad por turno, cuando sea necesaria: lectura de URL, lectura de archivo, acceso a búsqueda, guardar historial, ejecutar código, programar y entregar. Registrar «disponible comprobado», «declarado por la persona», «no disponible» o «no comprobado». No decir que se leyó una página porque se recibió su URL.

Compartir una skill o un prompt con un asistente distinto no demuestra que siga todas sus instrucciones. Conservar el estado de borrador hasta prueba externa.

## English

Start by asking which assistant the person has. In the next turn, ask about that assistant's plan or access. Use [start.en.txt](../prompts/start.en.txt). Ask exactly one question per turn; language, plan and capabilities are separate decisions.

- **ChatGPT:** paste the prompt into a normal chat. Ask whether the plan is Free, Plus, another plan or unknown. Teach Apps Script for ChatGPT without Plus. Otherwise inspect available tools. A subscription alone does not establish browsing, persistence or scheduling.
- **Claude:** paste the prompt into a normal chat. Ask whether access is free, paid/institutional or unknown. If custom skills are available, the folder is an optional installation route, subject to the account's actual settings and official documentation. Do not require Claude Code, a terminal or an API. Projects or skills do not by themselves establish recurring execution. Export history when needed.
- **Gemini:** paste the prompt into a normal chat. Ask about free, paid/institutional or unknown access. If Gems are available, optionally name a Gem “Create a funding radar” and use the English prompt as its instructions. Do not confuse the Gemini app, a Gem and a model served through OpenRouter. A Gem is not evidence of a scheduled job, persistent history or email delivery.
- **Missing capabilities:** use supplied official documents when browsing is unavailable; export profile/history when persistence is unavailable; teach Apps Script or manual repetition when scheduling is unavailable. Inspect exposed tools, and ask about one unavailable-to-inspection capability per turn only when needed.

The official sources linked above were read for the proposed adaptations. No external account, installation or assistant behavior was tested. Do not treat documentation review as compatibility certification.

