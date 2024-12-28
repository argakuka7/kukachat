Here’s the content in markdown format with unnecessary details removed:

```markdown
# FLUX.1 [schnell]
Turbo mode for the next generation text-to-image model FLUX.

## 1. Calling the API

### Install the client
The client provides a convenient way to interact with the model API.

```bash
bun add @fal-ai/client
```

### Setup your API Key
Set `FAL_KEY` as an environment variable in your runtime.

```bash
export FAL_KEY="YOUR_API_KEY"
```

### Submit a request
The client API handles the API submit protocol.

```javascript
import { fal } from "@fal-ai/client";

const result = await fal.subscribe("fal-ai/flux/schnell", {
  input: {
    prompt: "Extreme close-up of a single tiger eye, direct frontal view..."
  },
  logs: true,
  onQueueUpdate: (update) => {
    if (update.status === "IN_PROGRESS") {
      update.logs.map((log) => log.message).forEach(console.log);
    }
  },
});
console.log(result.data);
console.log(result.requestId);
```

## 2. Authentication
The API uses an API Key for authentication. Set the `FAL_KEY` environment variable when possible.

### Protect your API Key
Do not expose your `FAL_KEY` in client-side code. Use a server-side proxy for requests.

## 3. Queue
### Long-running requests
For long-running requests, check the Queue status and rely on Webhooks.

### Submit a request
```javascript
const { request_id } = await fal.queue.submit("fal-ai/flux/schnell", {
  input: {
    prompt: "Extreme close-up of a single tiger eye, direct frontal view..."
  },
  webhookUrl: "https://optional.webhook.url/for/results",
});
```

### Fetch request status
```javascript
const status = await fal.queue.status("fal-ai/flux/schnell", {
  requestId: "764cabcf-b745-4b3e-ae38-1200304cf45b",
  logs: true,
});
```

### Get the result
```javascript
const result = await fal.queue.result("fal-ai/flux/schnell", {
  requestId: "764cabcf-b745-4b3e-ae38-1200304cf45b"
});
console.log(result.data);
console.log(result.requestId);
```

## 4. Files
### Data URI (base64)
You can pass a Base64 data URI as a file input.

### Uploading files
You can upload files using the client API.

```javascript
const file = new File(["Hello, World!"], "hello.txt", { type: "text/plain" });
const url = await fal.storage.upload(file);
```

## 5. Schema

### Input
- **prompt**: string
- **image_size**: ImageSize | Enum (Default: landscape_4_3)
- **num_inference_steps**: integer (Default: 4)
- **seed**: integer
- **sync_mode**: boolean
- **num_images**: integer (Default: 1)
- **enable_safety_checker**: boolean (Default: true)

### Output
- **images**: list<Image>
- **timings**: Timings
- **seed**: integer
- **has_nsfw_concepts**: list<boolean>
- **prompt**: string

## Related Models
- **fal-ai/lcm**: Produce high-quality images with minimal inference steps.
- **fal-ai/omnigen-v1**: Unified image generation model for various tasks.
```

Let me know if you need any adjustments!