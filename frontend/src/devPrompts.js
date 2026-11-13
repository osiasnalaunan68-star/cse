// Dev Panel only (never shipped): AI prompts + JSON templates for imports.

export const LIBRARY_TEMPLATE = JSON.stringify(
  {
    subject: "Analytical Ability",
    subject_icon: "🧠",
    topic: "Logical Reasoning",
    keywords: ["syllogism", "deduction"],
    ai: {
      title: "Overview ng Logical Reasoning",
      content: "📖 Kahulugan\n[Tagalog explanation here]\n\n💡 Simpleng Paliwanag\n[Tagalog explanation here]",
      prompt: "Explain this topic simply, with examples and common Civil Service Exam traps.",
    },
    sections: [
      {
        id: "s1",
        heading: "Syllogism",
        paragraphs: [
          { id: "p1", label: "1.", text: "[Paragraph text, copied exactly from your source.]" },
          {
            id: "p2",
            label: "2.",
            text: "[Another paragraph.]",
            ai: {
              title: "Syllogism",
              content: "📖 Kahulugan\n[Tagalog]\n\n⚠️ Dapat Tandaan\n[Tagalog]",
              prompt: "Explain this step by step with an example.",
            },
          },
          { id: "p3", label: "a.", indent: 1, text: "[Sub-item, nested one level.]" },
        ],
      },
    ],
  },
  null,
  2
);

export const QUIZ_TEMPLATE = JSON.stringify(
  {
    subject: "Verbal Ability",
    subject_icon: "📖",
    topic: "Grammatical Categories",
    questions: {
      "1": {
        question: "[Question text]",
        choices: { A: "[choice]", B: "[choice]", C: "[choice]", D: "[choice]" },
        correct: "A",
        reason: "[Short explanation why A is correct]",
      },
      "2": {
        question: "[Fill-in question — no choices]",
        correct: "[typed answer]",
        reason: "[Short explanation]",
      },
    },
  },
  null,
  2
);

export const LIBRARY_PROMPT = String.raw`🧠 LIBRARY → STUDY-JSON GENERATION PROMPT
You are an expert Philippine Civil Service Exam (CSE) reviewer, tutor, and content writer for a study app.

Convert the SOURCE TEXT at the very bottom into ONE valid JSON object the app can import directly. The English study text and the Tagalog AI explanations must come out TOGETHER in the same JSON.

OUTPUT RULES
- Output ONLY the JSON. No markdown fences, no commentary before or after.
- Copy the English source text VERBATIM (same wording, numbering, punctuation). Never paraphrase, shorten, or reorder it. Never invent facts not in the source.
- Keep the source structure: one entry per paragraph / numbered item / bullet, in the original order.
- "label" = the numbering exactly as printed (e.g. "1.", "a.", "(i)"). Do NOT repeat the label inside "text".
- "indent" = nesting depth 0–4 (0 = main, 1 = sub-item, 2 = sub-sub-item).
- Group paragraphs under the source's own headings using "sections". If there are no headings, use one section without "heading".
- Never put real line breaks inside a JSON string — use the two characters backslash-n.
- Top level must be: { "subject": "Verbal Ability", "subject_icon": "📖", "topics": [ ...one or more topic objects... ] }

EVERY PARAGRAPH MUST HAVE AN "ai" OBJECT — THIS IS REQUIRED
- Do NOT skip any paragraph. Each paragraph object must include an "ai" with { "title", "content", "prompt" }.
- Also give each section an "ai" (short, about the whole section), and the topic an overview "ai".
- Very short / label-only / boilerplate paragraphs (e.g. "Answer:", "Example:") → use a mini Q&A in "content" (1–2 exchanges only):

    Tanong: [simple question a student would naturally ask]
    Sagot: [1–2 sentences, plain Tagalog, like a classmate explaining]

- Substantive paragraphs → short format in "content":
    📖 Kahulugan
    ...
    💡 Simpleng Paliwanag
    ...
    ⚠️ Dapat Tandaan
    ...
    (📦 Halimbawa only if really needed)

- Topic-level overview "ai" → full format in this order:
    📖 Kahulugan · 🔍 Breakdown · 💡 Simpleng Paliwanag · 📦 Halimbawa · ⭐ Bakit Mahalaga Ito? · ⚠️ Dapat Tandaan · 🎯 Exam Tip

AI CONTENT LANGUAGE RULES
- Language: simple, conversational Tagalog, like a mentor teaching a student. Keep technical terms in English. Do not sound robotic. Never invent facts, rules, or numbers not in the source.
- "title": short Tagalog label. "content": the Tagalog guide with the emoji headings above, separated by blank lines (use backslash-n backslash-n).
- "prompt": a ready-to-send prompt for an external AI asking it to explain THAT specific paragraph simply, with examples and common CSE traps. Do NOT paste the source text inside it — the app adds it automatically.

SHAPE EXAMPLE (structure only — every paragraph has ai)
{"subject":"Verbal Ability","subject_icon":"📖","topics":[{"topic":"...","topic_order":1,"keywords":["..."],"ai":{"title":"...","content":"...","prompt":"..."},"sections":[{"id":"s1","heading":"...","ai":{"title":"...","content":"...","prompt":"..."},"paragraphs":[{"id":"p1","label":"1.","text":"...","ai":{"title":"...","content":"...","prompt":"..."}},{"id":"p2","label":"Answer:","indent":2,"text":"...","ai":{"title":"...","content":"Tanong: ...\nSagot: ...","prompt":"..."}}]}]}]}

SOURCE TEXT (the only source of truth):
`;

export const QUIZ_PROMPT = String.raw`🧠 QUIZ → JSON GENERATION PROMPT
You are an expert Philippine Civil Service Exam (CSE) question writer. Write multiple-choice questions for the SUBJECT and TOPIC given at the bottom and output ONE valid JSON object the app can import directly.

OUTPUT RULES
- Output ONLY the JSON. No markdown fences, no commentary before or after.
- "subject" and "topic": use EXACTLY the names given at the bottom (same spelling every time, so everything lands in the same place). A brand-new subject/topic is created automatically on import.
- "questions" is an object whose keys are the question numbers "1", "2", "3", ... (continue from START NUMBER).
- Each question: { "question": "...", "choices": { "A": "...", "B": "...", "C": "...", "D": "..." }, "correct": "A", "reason": "..." }
- Exactly ONE correct answer. "correct" must be one of the choice letters.
- Fill-in-the-blank question? Omit "choices" and put the answer text in "correct".
- "reason": 1–3 sentences in simple Tagalog explaining why the answer is correct (and why the tempting wrong choices fail). Keep technical terms in English.
- Exam-level difficulty. No trick wording, no duplicate questions, and spread the correct letters evenly across A–D.
- Never put real line breaks inside a JSON string (use the two characters backslash-n).

SHAPE EXAMPLE (structure only)
{"subject":"Verbal Ability","subject_icon":"📖","topic":"Grammatical Categories","questions":{"1":{"question":"...","choices":{"A":"...","B":"...","C":"...","D":"..."},"correct":"A","reason":"..."}}}

SUBJECT: [replace me]
TOPIC: [replace me]
NUMBER OF QUESTIONS: [replace me]
START NUMBER: 1
SOURCE (optional — if empty, write from your own knowledge):
`;
