export const PRODUCT_ROLES = [
  'Project lead',
  'Mentor reviewer',
  'Client owner',
  'Student contributor',
];

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

export const PRODUCT_WORKFLOWS = [
  'Weekly cadence tracker',
  'Blocker validation',
  'Tone templates',
  'Milestone/ask follow-up queue',
];

export const PRODUCT_GUARDS = [
  'Block update when owner ask is unclear',
  'Flag stale blockers',
  'Require mentor review before client send',
];

export function createProductSaasBlueprint(config, domain) {
  return {
    product: config.title,
    northStar: config.metric,
    roles: PRODUCT_ROLES,
    integrations: PRODUCT_INTEGRATIONS,
    analytics: PRODUCT_ANALYTICS,
    workflows: PRODUCT_WORKFLOWS,
    guards: PRODUCT_GUARDS,
    modules: config.modules,
    artifacts: domain.artifacts
  };
}
