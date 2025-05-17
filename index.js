



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

    /*
      Challenge:
        1. Make a fetch request to the Worker url:
          - The method should be 'POST'
          - In the headers, the 'Content-Type' should be 'application/json'
          - Set the body of the request to an empty string for now
        2. Parse the response to a JavaScript object and assign it to a const
        3. Log the response to the console to test
    */
      
    translateBtn.disabled = true;            // disable while loading
    const prompt = `Translate the following English text to ${lang}:\n\n"${text}"`;
    
    const messages = 
      [
        { role: "system", content: "You are a helpful translator." },
        { role: "user",   content: prompt }
      ]

        const url = "https://openai-api-worker1.vipinkaniyanthara.workers.dev"
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messages)
        })
        const translation = await response.json()
        



        if (!response.ok) {
          throw new Error(`Worker Error: ${data.error}`)
      }

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
