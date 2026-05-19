export const config = {
    "number": 38,
    "slug": "client-update-bot-template",
    "title": "Client Update Bot Template",
    "category": "AI & Automation",
    "tagline": "A structured status-update assistant for keeping clients informed during 4-8 week student projects.",
    "persona": "Project leads coordinating owners, students, and mentors.",
    "gap": "Client trust drops when updates are inconsistent, even if work is moving.",
    "niche": "Volta-style pro bono and enterprise engagements.",
    "metric": "weeks with on-time client updates",
    "modules": [
        "Weekly update format",
        "Risk and blocker prompts",
        "Owner ask tracker",
        "Mentor review notes"
    ],
    "theme": {
        "accent": "#7c3aed",
        "accent2": "#c4b5fd",
        "emoji": "\u26a1",
        "metricLabel": "Automation safety",
        "workflow": [
            "Define workflow boundary",
            "Identify data and failure risks",
            "Require human review",
            "Export safe implementation plan"
        ],
        "privacy": "No external AI calls are made. Treat customer data, credentials, payments, and public posting as high risk."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "weekly-update-format",
            "label": "Weekly update format",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify weekly update format with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "risk-and-blocker-prompts",
            "label": "Risk and blocker prompts",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify risk and blocker prompts with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "owner-ask-tracker",
            "label": "Owner ask tracker",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify owner ask tracker with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "mentor-review-notes",
            "label": "Mentor review notes",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify mentor review notes with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Client Update Bot Template and capture baseline evidence.",
            "Complete the weekly update format workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "BrightPath Tutoring Studio",
        "chapter": "El Paso",
        "studentLead": "Volta Student Lead",
        "notes": "Responsible automation project to reduce admin time without exposing student data. Client Update Bot Template sample.",
        "evidencePrefix": "Client Update Bot Template",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map