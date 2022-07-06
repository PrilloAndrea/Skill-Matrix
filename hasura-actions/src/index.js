const envalid = require("envalid");
const forrest = require("@forrestjs/core");

// Library Services
const serviceLogger = require("@forrestjs/service-logger");
const serviceFastify = require("@forrestjs/service-fastify");
const serviceHealthz = require("@forrestjs/service-fastify-healthz");
const hasuraClient = require("./services/hasura-client");

// Local Feature
const ping = require("./features/ping");
const testHasuraClient = require("./features/test-hasura-client");
const createAnswer = require("./features/createAnswer");

// Validate the environment
const env = envalid.cleanEnv(process.env, {
  LOG_LEVEL: envalid.str({
    desc: "Set the service log level",
    choices: ["error", "info", "verbose", "debug"],
    default: "info"
  }),

  HASURA_GRAPHQL_ENDPOINT: envalid.url({
    desc: "Target Hasura API endpoint"
  }),
  HASURA_GRAPHQL_AUTH_TOKEN: envalid.str({
    desc: "Hasura authentication token"
  })
});

forrest.run({
  settings: {
    logger: {
      level: env.LOG_LEVEL
    },
    hasura: {
      endpoint: env.HASURA_GRAPHQL_ENDPOINT,
      token: env.HASURA_GRAPHQL_AUTH_TOKEN
    }
  },
  services: [serviceLogger, hasuraClient, serviceFastify, serviceHealthz],
  features: [ping,createAnswer, testHasuraClient]
});
