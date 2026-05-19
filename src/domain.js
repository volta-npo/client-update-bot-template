export const domain = {
    "kind": "status-update",
    "title": "Client Update Bot Template",
    "purpose": "A purpose-built status update interface for a structured status-update assistant for keeping clients informed during 4-8 week student projects.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Project status items",
    "metricLabels": [
        "Update Completeness",
        "On-time Cadence",
        "Risk Clarity"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "BrightPath Tutoring Studio",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "weeks with on-time client updates",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Milestones entered",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Email update",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Milestones entered",
        "Completed work summarized",
        "Blockers logged",
        "Owner asks listed",
        "Risks rated",
        "Next steps written",
        "Mentor notes reviewed",
        "Weekly update exported"
    ],
    "artifacts": [
        "Email update",
        "Slack-style update",
        "Timeline CSV"
    ],
    "checks": [
        "Next step and owner ask required",
        "Risk level required",
        "Reviewer required before sending"
    ],
    "sampleClient": "BrightPath Tutoring Studio"
};
//# sourceMappingURL=domain.js.map