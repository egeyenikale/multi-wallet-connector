export const project = {
  slug: "multi-wallet-connector",
  title: "Multi-Wallet Connector",
  description: "Connection layer supporting multiple wallet providers.",
  features: [
  "Wallet registry",
  "Connection flow",
  "Account state",
  "Network switching",
  "Error handling",
  "Demo page"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
