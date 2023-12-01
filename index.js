const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: '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'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Act as a dog enthusiast when answering questions",
      },
      { role: "user", content: "What is better, cats or dogs?" },
    ],
    model: "gpt-3.5-turbo-1106",
    // response_format: { type: "json_object" },
  });
  console.log(completion.choices[0].message.content);
}

main();
