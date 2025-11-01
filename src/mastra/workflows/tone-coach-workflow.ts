import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';


const analyzeTone = createStep({
    id: 'analyze-tone',
    description: 'Analyzes the tone of a user-provided message using the Tone Coach agent',

   
    inputSchema: z.object({
        message: z.string().describe('The user message to be analyzed'),
    }),

   
    outputSchema: z.object({
        analysis: z.string().describe('The structured analysis from the AI'),
    }),

    
    execute: async ({ inputData, mastra }) => {
        if (!inputData) {
            throw new Error('Input data (message) not found');
        }

        
        const agent = mastra?.getAgent('toneCoachAgent');
        if (!agent) {
            throw new Error('Tone Coach agent not found');
        }

       
        const response = await agent.stream([
            {
                role: 'user',
                content: inputData.message,
            },
        ]);

        
        let analysisText = '';
        for await (const chunk of response.textStream) {
            process.stdout.write(chunk); 
            analysisText += chunk;
        }

        
        return {
            analysis: analysisText,
        };
    },
});


const toneCoachWorkflow = createWorkflow({
    id: 'tone-coach-workflow',

    
    inputSchema: z.object({
        message: z.string().describe('The user message to be analyzed'),
    }),

  
    outputSchema: z.object({
        analysis: z.string().describe('The structured analysis from the AI'),
    }),
})
    
    .then(analyzeTone);


toneCoachWorkflow.commit();

export { toneCoachWorkflow };