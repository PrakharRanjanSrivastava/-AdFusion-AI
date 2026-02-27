import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://876d80de5e9a7b8342821b07b36b36bd@o4510810191757312.ingest.de.sentry.io/4510810196672592",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});