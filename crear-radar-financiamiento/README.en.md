# Create a funding radar

[Español](README.md)

**RecetarIA draft. Editorial review and an independent user trial are pending.**

1. Open [start.en.txt](prompts/start.en.txt), copy the whole prompt and paste it into ChatGPT, Claude or Gemini. No coding or skill installation is required.
2. It first asks which assistant you have. The next question asks about that assistant's plan or access.
3. Describe your project, provide a website, documents or text, and confirm the summary. It separates documented evidence, AI inference and unknowns.
4. Define selection criteria and multilingual searches, one question per turn. Review and adjust a real trial before considering scheduling.
5. Keep your profile and history privately. Reattach them when resuming if the assistant cannot retain them.

For ChatGPT without Plus, follow the [Apps Script guide](references/apps-script.en.md). Claude and Gemini use their available tools, with Apps Script as an optional recurring implementation. A manual route without APIs is always available. External APIs may have separate costs.

Read the [full recipe](../recetaria/recipes/crear-radar-financiamiento.en.md), [English workflow](references/guide.en.md), [assistant adapters](references/asistentes.md#english) and [verification protocol](references/protocol.en.md). Start in a normal chat; Claude skills and Gemini Gems are optional, subject to actual availability.

Do not share API keys in chat, sheets, code or GitHub. The code is shared across languages; function names, sheet names and configuration keys remain in Spanish so both guides operate on the same implementation.

Local simulated code tests passed. ChatGPT, Claude, Gemini, real API access, email delivery and scheduling have not been independently tested. Sending is disabled by default; no triggers were created.

[Private profile template](assets/profile.en.md) · [Fictional examples](references/examples.en.md) · [Repeat-run prompt](prompts/continuity.en.md) · [Independent test plan](references/tests.en.md)

