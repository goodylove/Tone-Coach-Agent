
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';


import { toolCallAppropriatenessScorer, completenessScorer, translationScorer } from './scorers/weather-scorer';
import { toneCoachAgent } from './agents/tone-coach-agent';
import { toneCoachWorkflow } from './workflows/tone-coach-workflow';
import { weatherWorkflow } from './workflows/weather-workflow';
import { weatherAgent } from './agents/weather-agent';
import { a2aAgentRoute } from './a2a-route';

export const mastra = new Mastra({
  workflows: { toneCoachWorkflow, weatherWorkflow },
  agents: { toneCoachAgent, weatherAgent },
  scorers: { toolCallAppropriatenessScorer, completenessScorer, translationScorer },
  storage: new LibSQLStore({

    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
  telemetry: {
    // Telemetry is deprecated and will be removed in the Nov 4th release
    enabled: false,
  },
  observability: {
    // Enables DefaultExporter and CloudExporter for AI tracing
    default: { enabled: true },
  },
  server:{
    apiRoutes:[a2aAgentRoute]
  }
});
