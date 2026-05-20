export const PRODUCT_ROLES = ['Project lead', 'Mentor reviewer', 'Client owner', 'Student contributor'];
export const PRODUCT_PERSONAS = ['Project lead', 'Mentor reviewer', 'Client owner', 'Student contributor', 'Delivery manager', 'Implementation pod lead'];
export const PRODUCT_INTEGRATIONS = [
    'Email update export',
    'Slack-ready summary',
    'Timeline CSV',
    'Owner ask tracker',
];
export const PRODUCT_ANALYTICS = [
    'On-time update rate',
    'Open blocker age',
    'Owner ask SLA',
    'Tone/readability score',
];
export const PRODUCT_KPIS = ['Updates sent on cadence', 'Blockers clarified', 'Owner asks closed', 'Milestones validated', 'Client sentiment trend', 'Mentor review turnaround'];
export const PRODUCT_WORKFLOWS = [
    'Weekly cadence tracker',
    'Blocker validation',
    'Tone templates',
    'Milestone/ask follow-up queue',
];
export const PRODUCT_ONBOARDING = ['Define client update cadence', 'Map milestone and blocker fields', 'Approve tone templates', 'Set owner-ask SLA', 'Run mentor review sample', 'Export weekly update pack'];
export const PRODUCT_GUARDS = [
    'Block update when owner ask is unclear',
    'Flag stale blockers',
    'Require mentor review before client send',
];
export const PRODUCT_EXPANSION = ['Slack/email channel adapters', 'Portfolio evidence rollup', 'Client health trend dashboard', 'Multi-project delivery command center'];
export const PRODUCT_DATA_MODEL = ['Milestone', 'Blocker', 'Owner ask', 'Risk', 'Next step', 'Client update'];
export const PRODUCT_SUCCESS_SIGNALS = ['Every blocker has an owner and next step', 'Client asks include due dates', 'Mentor review precedes client send', 'Tone stays client-safe'];
export function createProductSaasBlueprint(config, domain) {
    return {
        product: config.title,
        northStar: config.metric,
        roles: PRODUCT_ROLES,
        personas: PRODUCT_PERSONAS,
        integrations: PRODUCT_INTEGRATIONS,
        analytics: PRODUCT_ANALYTICS,
        kpis: PRODUCT_KPIS,
        workflows: PRODUCT_WORKFLOWS,
        onboarding: PRODUCT_ONBOARDING,
        guards: PRODUCT_GUARDS,
        expansion: PRODUCT_EXPANSION,
        dataModel: PRODUCT_DATA_MODEL,
        successSignals: PRODUCT_SUCCESS_SIGNALS,
        modules: config.modules,
        artifacts: domain.artifacts
    };
}
//# sourceMappingURL=saas-blueprint.js.map