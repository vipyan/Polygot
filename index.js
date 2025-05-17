import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

// 2) Grab UI elements
const comment      = document.getElementById("comments");
const translateBtn = document.getElementById("translate");
const startOverBtn = document.getElementById("start-over");
const conversion   = document.getElementById("convertion");

// 3) Wire up events
translateBtn.addEventListener("click", handleTranslate);
startOverBtn.addEventListener("click", handleStartOver);

// 4) Translate handler
async function handleTranslate(e) {
  e.preventDefault();

  // get user inputs
  const text = comment.value.trim();
  const lang = document.querySelector("input[name='language']:checked").value;

  if (!text) return;  // nothing to do

  // call OpenAI
  try {
    translateBtn.disabled = true;            // disable while loading
    const prompt = `Translate the following English text to ${lang}:\n\n"${text}"`;

    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful translator." },
        { role: "user",   content: prompt }
      ],
      temperature: 0.0
    });

    // extract translation
    const translation = res.choices[0].message.content.trim();

    // show it
    conversion.textContent = translation;
    conversion.classList.remove("hidden");
    startOverBtn.classList.remove("hidden");
    translateBtn.classList.add("hidden");

  } catch (err) {
    console.error("Translation error:", err);
    alert("Sorry, translation failed. Check console for details.");
  } finally {
    translateBtn.disabled = false;
  }
}

// 5) Reset handler
function handleStartOver(e) {
  e.preventDefault();

  // hide & reset UI
  conversion.classList.add("hidden");
  startOverBtn.classList.add("hidden");
  translateBtn.classList.remove("hidden");

}
