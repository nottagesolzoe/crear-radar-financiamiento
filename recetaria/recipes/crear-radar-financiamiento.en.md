# Create a funding radar

[Español](crear-radar-financiamiento.md)

**Status:** RecetarIA DRAFT. Editorial review and an independent user trial are pending. No historical recipe number assigned.

**Preparation time:** allow 30–60 minutes for the first session, plus time to read funding rules and test delivery. This is a design estimate, not a measured result.

**Output:** a confirmed project profile, tailored searches, a reviewed first selection and reusable history. Scheduling is a later decision and has not been activated.

## About this recipe

A thematic match is insufficient to recommend funding. Decide which opportunities can pay for specific activities, who can legally apply and administer the award, and whether preparation and delivery are feasible. AI helps read materials and compare conditions; search results identify candidates, while official rules support verification.

## Ingredients

A project description, website, documents or pasted text; an assistant; and a private place to retain the profile and history. No website or programming knowledge is required. The Apps Script route needs a Google account and, if using the APIs, personal Serper and optionally OpenRouter accounts. External services may have separate costs.

## Preparation

1. **Choose the route.** The first question asks whether you have ChatGPT, Claude, Gemini, or another/unknown assistant. A separate turn asks about the selected service's plan or access. ChatGPT without Plus follows Apps Script. Claude and Gemini use available tools and can use Apps Script for recurring execution. Never infer capabilities from a subscription.
2. **Describe the project.** Give one description including activities that need funding. In another turn, provide a website or alternative materials. The assistant records source, section/page and access date. If access fails, it asks for relevant text and does not simulate reading.
3. **Confirm the interpretation.** Review three sections: documented evidence, AI inference and unknowns. The single question asks whether you confirm, correct or remain unsure. Corrections are incorporated and reconfirmed before filtering.
4. **Resolve missing fields.** One field per turn: country, geography, entity type, legal applicant, administrator, population, stage, amount, duration and capacity. Distinguish citizenship, residence and registration. “Not sure” remains pending.
5. **Choose inclusion rules.** Agree on instrument types, exclusions and negotiable restrictions. A personal fellowship may fund a researcher but not an institution's operating costs. A consortium needs an actual eligible partner. Explain consequences before choosing.
6. **Build searches.** Combine activity, theme, geography and instrument in relevant languages. Identify funders and official portals. Try alternatives to fixed-year, recency and PDF filters. Record exact queries, sources, dates and failures.
7. **Define delivery.** Frequency, day, time, time zone, channel, format and no-news behavior each receive a separate question. Email requires an authorized recipient and a private test. Operational failure is not lack of opportunities.
8. **Run and adjust a trial.** Show the consolidated configuration. Search a small sample and read official rules for the exact edition. Connect activities and costs to restrictions. Separate confirmed from pending records using the [protocol](../../crear-radar-financiamiento/references/protocol.en.md). Ask for one evaluation, adjust criteria or searches and repeat as needed.
9. **Implement the selected route.** Use tools actually available in ChatGPT, Claude or Gemini, following the [adapters](../../crear-radar-financiamiento/references/asistentes.md#english). For Apps Script, follow the [copy-and-paste guide](../../crear-radar-financiamiento/references/apps-script.en.md). If APIs are unwanted, search in a browser and maintain tables manually. Scheduling is taught only after a reviewed trial, adjustments and explicit authorization.

Start without installation by pasting [start.en.txt](../../crear-radar-financiamiento/prompts/start.en.txt) into a chat. The [English workflow](../../crear-radar-financiamiento/references/guide.en.md) and shared skill retain the operating rules.

## Check the result

Verify one record against official rules: status, exact date, amount, applicant type and allowed spending. A pending record must name the missing evidence and next step. Repeating the same edition must not create a new-opportunity alert; a changed deadline must preserve before, after and source. Examples and simulated tests do not constitute a real user trial.

## Verified operational reading

Consulted 26 October 2026. These are operational references, not academic evidence that the radar is effective.

- Grants.gov, n.d., [Applicant Eligibility](https://www.grants.gov/applicants/applicant-eligibility): check eligibility before investing in an application. Its entity categories are not universal.
- Google for Developers, n.d., [Installable Triggers](https://developers.google.com/apps-script/guides/triggers/installable): reference for optional scheduling. Time-based triggers may run within a time window.
- Google for Developers, n.d., [Properties Service](https://developers.google.com/apps-script/guides/properties): project configuration storage; sharing access with editors affects confidentiality.
- OpenAI, n.d., [Set up scheduled tasks](https://developers.openai.com/training/walkthroughs/scheduled-tasks): run and refine a task before scheduling; actual account availability must be checked.
- Anthropic and Google: the [assistant adapters](../../crear-radar-financiamiento/references/asistentes.md#english) link the official skills and Gems documentation used to design the proposed routes.

## What can you do next?

**Completed:** what to search for and how to verify whether it can fund your activities.

**If opportunities are confirmed:** choose one and turn its rules into an application work plan and budget. That follow-up recipe is not included.

**If unknowns dominate:** resolve institutional eligibility or access to rules, then repeat the trial.

**Transfer prompt:** “Use my profile and history. Ask one question per turn. Would you like to A. review a confirmed opportunity, B. resolve a pending requirement or C. repeat the search? Do not submit or schedule anything without authorization.”

## Editorial review

APPROVED / ALMOST / REWORK?

