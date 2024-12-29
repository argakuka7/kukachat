Title: Tool Calling

URL Source: http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling

Markdown Content:
[AI SDK Core](https://sdk.vercel.ai/docs/ai-sdk-core)Tool Calling

As covered under Foundations, [tools](https://sdk.vercel.ai/docs/foundations/tools) are objects that can be called by the model to perform a specific task. AI SDK Core tools contain three elements:

*   **`description`**: An optional description of the tool that can influence when the tool is picked.
*   **`parameters`**: A [Zod schema](https://sdk.vercel.ai/docs/foundations/tools#schemas) or a [JSON schema](https://sdk.vercel.ai/docs/reference/ai-sdk-core/json-schema) that defines the parameters. The schema is consumed by the LLM, and also used to validate the LLM tool calls.
*   **`execute`**: An optional async function that is called with the arguments from the tool call. It produces a value of type `RESULT` (generic type). It is optional because you might want to forward tool calls to the client or to a queue instead of executing them in the same process.

You can use the [`tool`](https://sdk.vercel.ai/docs/reference/ai-sdk-core/tool) helper function to infer the types of the `execute` parameters.

The `tools` parameter of `generateText` and `streamText` is an object that has the tool names as keys and the tools as values:

```
import { z } from 'zod';import { generateText, tool } from 'ai';const result = await generateText({  model: yourModel,  tools: {    weather: tool({      description: 'Get the weather in a location',      parameters: z.object({        location: z.string().describe('The location to get the weather for'),      }),      execute: async ({ location }) => ({        location,        temperature: 72 + Math.floor(Math.random() * 21) - 10,      }),    }),  },  prompt: 'What is the weather in San Francisco?',});
```

When a model uses a tool, it is called a "tool call" and the output of the tool is called a "tool result".

Tool calling is not restricted to only text generation. You can also use it to render user interfaces (Generative UI).

[Multi-Step Calls (using maxSteps)](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#multi-step-calls-using-maxsteps)
---------------------------------------------------------------------------------------------------------------------------------

With the `maxSteps` setting, you can enable multi-step calls in `generateText` and `streamText`. When `maxSteps` is set to a number greater than 1 and the model generates a tool call, the AI SDK will trigger a new generation passing in the tool result until there are no further tool calls or the maximum number of tool steps is reached.

To decide what value to set for `maxSteps`, consider the most complex task the call might handle and the number of sequential steps required for completion, rather than just the number of available tools.

By default, when you use `generateText` or `streamText`, it triggers a single generation (`maxSteps: 1`). This works well for many use cases where you can rely on the model's training data to generate a response. However, when you provide tools, the model now has the choice to either generate a normal text response, or generate a tool call. If the model generates a tool call, it's generation is complete and that step is finished.

You may want the model to generate text after the tool has been executed, either to summarize the tool results in the context of the users query. In many cases, you may also want the model to use multiple tools in a single response. This is where multi-step calls come in.

You can think of multi-step calls in a similar way to a conversation with a human. When you ask a question, if the person does not have the requisite knowledge in their common knowledge (a model's training data), the person may need to look up information (use a tool) before they can provide you with an answer. In the same way, the model may need to call a tool to get the information it needs to answer your question where each generation (tool call or text generation) is a step.

### [Example](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#example)

In the following example, there are two steps:

1.  **Step 1**
    1.  The prompt `'What is the weather in San Francisco?'` is sent to the model.
    2.  The model generates a tool call.
    3.  The tool call is executed.
2.  **Step 2**
    1.  The tool result is sent to the model.
    2.  The model generates a response considering the tool result.

```
import { z } from 'zod';import { generateText, tool } from 'ai';const { text, steps } = await generateText({  model: yourModel,  tools: {    weather: tool({      description: 'Get the weather in a location',      parameters: z.object({        location: z.string().describe('The location to get the weather for'),      }),      execute: async ({ location }) => ({        location,        temperature: 72 + Math.floor(Math.random() * 21) - 10,      }),    }),  },  maxSteps: 5, // allow up to 5 steps  prompt: 'What is the weather in San Francisco?',});
```

You can use `streamText` in a similar way.

### [Steps](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#steps)

To access intermediate tool calls and results, you can use the `steps` property in the result object or the `streamText` `onFinish` callback. It contains all the text, tool calls, tool results, and more from each step.

```
import { generateText } from 'ai';const { steps } = await generateText({  model: openai('gpt-4-turbo'),  maxSteps: 10,  // ...});// extract all tool calls from the steps:const allToolCalls = steps.flatMap(step => step.toolCalls);
```

### [`onStepFinish` callback](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#onstepfinish-callback)

When using `generateText` or `streamText`, you can provide an `onStepFinish` callback that is triggered when a step is finished, i.e. all text deltas, tool calls, and tool results for the step are available. When you have multiple steps, the callback is triggered for each step.

```
import { generateText } from 'ai';const result = await generateText({  // ...  onStepFinish({ text, toolCalls, toolResults, finishReason, usage }) {    // your own logic, e.g. for saving the chat history or recording usage  },});
```

[Response Messages](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#response-messages)
---------------------------------------------------------------------------------------------------

Adding the generated assistant and tool messages to your conversation history is a common task, especially if you are using multi-step tool calls.

Both `generateText` and `streamText` have a `responseMessages` property that you can use to add the assistant and tool messages to your conversation history. It is also available in the `onFinish` callback of `streamText`.

The `responseMessages` property contains an array of `CoreMessage` objects that you can add to your conversation history:

```
import { generateText } from 'ai';const messages: CoreMessage[] = [  // ...];const { responseMessages } = await generateText({  // ...  messages,});// add the response messages to your conversation history:messages.push(...responseMessages); // streamText: ...(await responseMessages)
```

You can use the `toolChoice` setting to influence when a tool is selected. It supports the following settings:

*   `auto` (default): the model can choose whether and which tools to call.
*   `required`: the model must call a tool. It can choose which tool to call.
*   `none`: the model must not call tools
*   `{ type: 'tool', toolName: string (typed) }`: the model must call the specified tool

```
import { z } from 'zod';import { generateText, tool } from 'ai';const result = await generateText({  model: yourModel,  tools: {    weather: tool({      description: 'Get the weather in a location',      parameters: z.object({        location: z.string().describe('The location to get the weather for'),      }),      execute: async ({ location }) => ({        location,        temperature: 72 + Math.floor(Math.random() * 21) - 10,      }),    }),  },  toolChoice: 'required', // force the model to call a tool  prompt: 'What is the weather in San Francisco?',});
```

When tools are called, they receive additional options as a second parameter.

### [Tool Call ID](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#tool-call-id)

The ID of the tool call is forwarded to the tool execution. You can use it e.g. when sending tool-call related information with stream data.

```
import { StreamData, streamText, tool } from 'ai';export async function POST(req: Request) {  const { messages } = await req.json();  const data = new StreamData();  const result = streamText({    // ...    messages,    tools: {      myTool: tool({        // ...        execute: async (args, { toolCallId }) => {          // return e.g. custom status for tool call          data.appendMessageAnnotation({            type: 'tool-status',            toolCallId,            status: 'in-progress',          });          // ...        },      }),    },    onFinish() {      data.close();    },  });  return result.toDataStreamResponse({ data });}
```

### [Messages](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#messages)

The messages that were sent to the language model to initiate the response that contained the tool call are forwarded to the tool execution. You can access them in the second parameter of the `execute` function. In multi-step calls, the messages contain the text, tool calls, and tool results from all previous steps.

```
import { generateText, tool } from 'ai';const result = await generateText({  // ...  tools: {    myTool: tool({      // ...      execute: async (args, { messages }) => {        // use the message history in e.g. calls to other language models        return something;      },    }),  },});
```

### [Abort Signals](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#abort-signals)

The abort signals from `generateText` and `streamText` are forwarded to the tool execution. You can access them in the second parameter of the `execute` function and e.g. abort long-running computations or forward them to fetch calls inside tools.

```
import { z } from 'zod';import { generateText, tool } from 'ai';const result = await generateText({  model: yourModel,  abortSignal: myAbortSignal, // signal that will be forwarded to tools  tools: {    weather: tool({      description: 'Get the weather in a location',      parameters: z.object({ location: z.string() }),      execute: async ({ location }, { abortSignal }) => {        return fetch(          `https://api.weatherapi.com/v1/current.json?q=${location}`,          { signal: abortSignal }, // forward the abort signal to fetch        );      },    }),  },  prompt: 'What is the weather in San Francisco?',});
```

[Types](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#types)
---------------------------------------------------------------------------

Modularizing your code often requires defining types to ensure type safety and reusability. To enable this, the AI SDK provides several helper types for tools, tool calls, and tool results.

You can use them to strongly type your variables, function parameters, and return types in parts of the code that are not directly related to `streamText` or `generateText`.

Each tool call is typed with `CoreToolCall<NAME extends string, ARGS>`, depending on the tool that has been invoked. Similarly, the tool results are typed with `CoreToolResult<NAME extends string, ARGS, RESULT>`.

The tools in `streamText` and `generateText` are defined as a `Record<string, CoreTool>`. The type inference helpers `CoreToolCallUnion<TOOLS extends Record<string, CoreTool>>` and `CoreToolResultUnion<TOOLS extends Record<string, CoreTool>>` can be used to extract the tool call and tool result types from the tools.

```
import { openai } from '@ai-sdk/openai';import { CoreToolCallUnion, CoreToolResultUnion, generateText, tool } from 'ai';import { z } from 'zod';const myToolSet = {  firstTool: tool({    description: 'Greets the user',    parameters: z.object({ name: z.string() }),    execute: async ({ name }) => `Hello, ${name}!`,  }),  secondTool: tool({    description: 'Tells the user their age',    parameters: z.object({ age: z.number() }),    execute: async ({ age }) => `You are ${age} years old!`,  }),};type MyToolCall = CoreToolCallUnion<typeof myToolSet>;type MyToolResult = CoreToolResultUnion<typeof myToolSet>;async function generateSomething(prompt: string): Promise<{  text: string;  toolCalls: Array<MyToolCall>; // typed tool calls  toolResults: Array<MyToolResult>; // typed tool results}> {  return generateText({    model: openai('gpt-4o'),    tools: myToolSet,    prompt,  });}
```

[Handling Errors](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#handling-errors)
-----------------------------------------------------------------------------------------------

The AI SDK has three tool-call related errors:

*   [`NoSuchToolError`](https://sdk.vercel.ai/docs/reference/ai-sdk-errors/ai-no-such-tool-error): the model tries to call a tool that is not defined in the tools object
*   [`InvalidToolArgumentsError`](https://sdk.vercel.ai/docs/reference/ai-sdk-errors/ai-invalid-tool-arguments-error): the model calls a tool with arguments that do not match the tool's parameters
*   [`ToolExecutionError`](https://sdk.vercel.ai/docs/reference/ai-sdk-errors/ai-tool-execution-error): an error that occurred during tool execution
*   [`ToolCallRepairError`](https://sdk.vercel.ai/docs/reference/ai-sdk-errors/ai-tool-call-repair-error): an error that occurred during tool call repair

### [`generateText`](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#generatetext)

`generateText` throws errors and can be handled using a `try`/`catch` block:

```
try {  const result = await generateText({    //...  });} catch (error) {  if (NoSuchToolError.isInstance(error)) {    // handle the no such tool error  } else if (InvalidToolArgumentsError.isInstance(error)) {    // handle the invalid tool arguments error  } else if (ToolExecutionError.isInstance(error)) {    // handle the tool execution error  } else {    // handle other errors  }}
```

### [`streamText`](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#streamtext)

`streamText` sends the errors as part of the full stream. The error parts contain the error object.

When using `toDataStreamResponse`, you can pass an `getErrorMessage` function to extract the error message from the error part and forward it as part of the data stream response:

```
const result = streamText({  // ...});return result.toDataStreamResponse({  getErrorMessage: error => {    if (NoSuchToolError.isInstance(error)) {      return 'The model tried to call a unknown tool.';    } else if (InvalidToolArgumentsError.isInstance(error)) {      return 'The model called a tool with invalid arguments.';    } else if (ToolExecutionError.isInstance(error)) {      return 'An error occurred during tool execution.';    } else {      return 'An unknown error occurred.';    }  },});
```

The tool call repair feature is experimental and may change in the future.

Language models sometimes fail to generate valid tool calls, especially when the parameters are complex or the model is smaller.

You can use the `experimental_toToolCallRepair` function to attempt to repair the tool call with a custom function.

You can use different strategies to repair the tool call:

*   Use a model with structured outputs to generate the arguments.
*   Send the messages, system prompt, and tool schema to a stronger model to generate the arguments.
*   Provide more specific repair instructions based on which tool was called.

```
import { openai } from '@ai-sdk/openai';import { generateObject, generateText, NoSuchToolError, tool } from 'ai';const result = await generateText({  model,  tools,  prompt,  // example approach: use a model with structured outputs for repair.  // (you can use other strategies as well)  experimental_repairToolCall: async ({    toolCall,    tools,    parameterSchema,    error,    messages,    system,  }) => {    if (NoSuchToolError.isInstance(error)) {      return null; // do not attempt to fix invalid tool names    }    const tool = tools[toolCall.toolName as keyof typeof tools];    const { object: repairedArgs } = await generateObject({      model: openai('gpt-4o', { structuredOutputs: true }),      schema: tool.parameters,      prompt: [        `The model tried to call the tool "${toolCall.toolName}"` +          ` with the following arguments:`,        JSON.stringify(toolCall.args),        `The tool accepts the following schema:`,        JSON.stringify(parameterSchema(toolCall)),        'Please fix the arguments.',      ].join('\n'),    });    return { ...toolCall, args: JSON.stringify(repairedArgs) };  },});
```

The `activeTools` property is experimental and may change in the future.

Language models can only handle a limited number of tools at a time, depending on the model. To allow for static typing using a large number of tools and limiting the available tools to the model at the same time, the AI SDK provides the `experimental_activeTools` property.

It is an array of tool names that are currently active. By default, the value is `undefined` and all tools are active.

```
import { openai } from '@ai-sdk/openai';import { generateText } from 'ai';const { text } = await generateText({  model: openai('gpt-4o'),  tools: myToolSet,  experimental_activeTools: ['firstTool'],});
```

Multi-modal tool results are experimental and only supported by Anthropic.

In order to send multi-modal tool results, e.g. screenshots, back to the model, they need to be converted into a specific format.

AI SDK Core tools have an optional `experimental_toToolResultContent` function that converts the tool result into a content part.

Here is an example for converting a screenshot into a content part:

```
const result = await generateText({  model: anthropic('claude-3-5-sonnet-20241022'),  tools: {    computer: anthropic.tools.computer_20241022({      // ...      async execute({ action, coordinate, text }) {        switch (action) {          case 'screenshot': {            return {              type: 'image',              data: fs                .readFileSync('./data/screenshot-editor.png')                .toString('base64'),            };          }          default: {            return `executed ${action}`;          }        }      },      // map to tool result content for LLM consumption:      experimental_toToolResultContent(result) {        return typeof result === 'string'          ? [{ type: 'text', text: result }]          : [{ type: 'image', data: result.data, mimeType: 'image/png' }];      },    }),  },  // ...});
```

[Examples](http://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling#examples)
---------------------------------------------------------------------------------

You can see tools in action using various frameworks in the following examples: