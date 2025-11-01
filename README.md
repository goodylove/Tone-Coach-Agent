## Overview

**Tone Coach** is an AI-powered communication assistant built with **Mastra** and integrated with **Telex.im**.
It helps users analyze the **tone** of their messages and offers more **professional**, **empathetic**, and **collaborative** alternatives — before they hit send.

Think of it as your personal _tone mirror_ — making sure your message says _what you mean_, without sounding harsh or unclear.

---

## ⚙️ How It Works

When a user sends a message to the **Tone Coach** agent on **Telex.im**, the AI (acting as **Tone Analyzer**) responds in **exactly three parts**:

1. **Tone:**
   Detects the primary tone of your message (e.g., _Confrontational_, _Neutral_, _Encouraging_, _Collaborative_).

2. **Feedback:**
   Explains why your message sounds that way and what impression it might leave on the recipient.

3. **Suggestions:**
   Provides two improved versions of your message to make it sound more clear, confident, or kind.

**Example:**

> **User Message:**
> “I already told you to fix that yesterday.”
>
> **Tone:** Confrontational
> **Feedback:** The message sounds accusatory and may make the receiver defensive.
> **Suggestions:**
> • “Hey, could you please check if the issue from yesterday was resolved?”
> • “Just a quick follow-up on yesterday’s fix — has it been implemented?”

---

## 🧩 Tech Stack

- **Language:** TypeScript
- **Framework:** Mastra
- **Integration:** Telex.im (A2A Protocol)
- **Deployment:** Telex Mastra Cloud

---

## Workflow JSON

```json
{
  "active": true,
  "category": "utilities",
  "description": "An AI agent that analyzes and improves the tone of messages before they’re sent.",
  "id": "toneCoach123",
  "name": "tone_coach",
  "long_description": "
      You are a professional, empathetic communications coach named 'Tone Analyzer'.
      A user needs help analyzing the tone of a message they are about to send to their team.

      The user's raw message will be provided as input. Your task is to analyze it.

      Provide a brief and helpful response. Structure your answer in exactly three parts:

      1. **Tone:** Start with the word 'Tone:', followed by 1-2 words that describe the message's primary tone (e.g., Confrontational, Neutral, Positive, Anxious, Collaborative).
      2. **Feedback:** Start with the word 'Feedback:', followed by a single, concise sentence explaining why it has that tone and what impact it might have.
      3. **Suggestions:** Start with the word 'Suggestions:', followed by a bulleted list of 2 alternative ways to phrase the message for a more professional and collaborative team environment.

      IMPORTANT: Do not add any conversational text, greetings, or sign-offs before or after your structured response. Just provide the three-part analysis directly.
  ",
  "short_description": "Analyzes and improves tone for more professional, empathetic communication.",
  "nodes": [
    {
      "id": "tone_coach_node",
      "name": "Tone Coach Agent",
      "parameters": {},
      "position": [820, -100],
      "type": "a2a/mastra-a2a-node",
      "typeVersion": 1,
      "url": "https://telex-mastra.mastra.cloud/a2a/agent/toneCoachAgent"
    }
  ],
  "pinData": {},
  "settings": {
    "executionOrder": "v1"
  }
}
```

---

## How to Test on Telex.im

1. **Join Telex:**
   Run this command in the HNG Discord bot:

   ```
   /telex-invite your-email@example.com
   ```

2. **Add Your Agent:**
   Use the workflow JSON above to register your agent inside your Telex organization.

3. **Send a test message:**
   Example request (Thunder Client or cURL):

   ```json
   {
     "jsonrpc": "2.0",
     "id": "request-001",
     "method": "message/send",
     "params": {
       "message": {
         "kind": "message",
         "role": "user",
         "parts": [
           {
             "kind": "text",
             "text": "I'm tired of reminding you about this task."
           }
         ],
         "messageId": "msg-001",
         "taskId": "task-001"
       },
       "configuration": { "blocking": true }
     }
   }
   ```

4. **View Agent Logs:**

   ```
   https://api.telex.im/agent-logs/{your-channel-id}.txt
   ```

## Why It Matters

Communication defines team culture.
**Tone Coach** helps people write with clarity and empathy — reducing tension, improving collaboration, and making feedback easier to digest.
