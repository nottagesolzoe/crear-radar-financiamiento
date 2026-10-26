# Verification, ranking and history

## Discovery and verification

Log exact query, language, timestamp/time zone, tool, filters, coverage and outcome: successful with candidates, successful empty, partial or error. Missing API fields or failed requests are not empty searches. Aggregators identify candidates but cannot confirm funding conditions.

Read the funder's official page and rules for the exact edition. For each decisive field retain URL/document, section/page, short evidence excerpt and access date; retain document version/hash when feasible. Official-source status requires checking the entity and domain.

## Opportunity record

Retain stable funder/programme/cycle/official ID; resource type (call, portal, directory, recurring fund); official URL and aliases; first detection and last review; and these separate classifications:

- Verification: confirmed/pending.
- Temporal status: open/future/closed/rolling/unknown.
- Project eligibility: compatible/incompatible/pending, with each requirement compared to a documented profile field.

Record opening and exact closing date, time and time zone as published. Convert to UTC only when possible. Never assume 23:59. Unknown time, zone or unpublished amount stays pending. “Rolling, no deadline” needs official evidence. Record original amount/currency, minimum/maximum and whether it is per award, per entity or a total pool; retain co-funding and overhead restrictions. Currency conversion is optional and needs a dated source.

Applicant type includes individual/entity/consortium, citizenship/residence, legal registration, eligible locations, lead partner and fund administrator. Unknown eligibility is not incompatibility.

Connect an actual project activity and cost to an allowed use in the rules. Record exclusions, duration, reporting, co-funding and product/data restrictions. Explain fit: high for a central activity and allowed cost; medium for a real component; low if obtaining fit would require changing the purpose. Record agreed preparation days and compare with time available, without claiming the person can apply when preparation cannot fit.

A confirmed call requires official verification of status, exact date, amount and applicant type for that edition. Project eligibility can still be pending. Conflicting official sources remain documented and pending until clarified. Do not contact a funder automatically.

## Ranking

Apply only agreed exclusions and documented contradictions, retaining reasons in history. Separate confirmed compatible opportunities, pending verification/eligibility, and closed/incompatible/excluded archive. Future and rolling calls are explicit, without invented urgency.

Within each group order by high/medium/low fit, compatible/pending eligibility, feasible/unknown/infeasible preparation time, then nearest deadline among feasible options. Unknown deadlines sort last. Explain components rather than inventing a percentage score. A user may change the order; save the chosen rule.

## Deduplication and change alerts

Remove tracking URL parameters and fragments without removing parameters that identify editions. Match funder, title, programme ID and cycle, not URL alone. Same edition across URLs is one record with aliases; uncertainty requires review before merging. New edition is a linked new record.

A material change to deadline, amount, applicant type, status or spending restrictions creates an event with previous/new values, source, detection date and version. Unchanged records update last review without a new-opportunity alert. Wording changes without changed conditions do not require an alert.

Discovery, verification and delivery are distinct events. Only mark a version delivered after successful channel execution. Failed or uncertain delivery is not confirmed receipt.

## Output and fallback

Report date/coverage, new confirmed opportunities, evidenced changes, pending items and next steps, inaccessible sources and errors. Each recommendation names activity, cost, restrictions and legal application route. Follow the user's explicit silence/empty-summary preference when there is no news, but keep operational failures visible.

The Apps Script adapter performs initial URL deduplication; programme/cycle/alias consolidation is manual. Its shared schema and status values remain Spanish, mapped in the English setup guide. The assistant may translate a report into English without changing classifications, evidence, deadlines, amounts, restrictions or URLs.

