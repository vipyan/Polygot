
# PollyGlot 🌍🦜

PollyGlot is a simple web application that translates user input text into multiple languages using the OpenAI API. The app features a clean user interface, language selection options, and responsive interaction for a smooth translation experience.

## 🌟 Features

- Translates text from English to:
  - French
  - Spanish
  - Japanese
  - Malayalam
- Clean and responsive UI
- Uses OpenAI's `gpt-4o-mini` model for accurate and efficient translations
- "Start Over" button to reset the translation

## 📁 Project Structure

```
📦 PollyGlot
├── index.html        # Main HTML file
├── index.css         # Styling for the app
├── index.js          # JavaScript for translation logic and UI handling
└── assets/
    └── parrot.png    # Logo image of PollyGlot
    └── worldmap.png  # Header background image
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/pollyglot.git
cd pollyglot
```

### 2. Install Dependencies
This app uses the [OpenAI JavaScript SDK](https://www.npmjs.com/package/openai).

Install it with:

```bash
npm install openai dotenv
```

### 3. Create a `.env` File
Add your OpenAI API key:

```env
OPENAI_API_KEY=your-api-key-here
```

### 4. Start a Local Server
Use any static server like `live-server`, `vite`, or `http-server`, or open `index.html` in your browser directly.

Example with live-server:

```bash
npx live-server
```

## 🔐 Note
For security reasons, **do not expose your OpenAI API key in frontend code** for production. Use a backend proxy or secure serverless function to handle API calls.



## 📸 Screenshot

![PollyGlot UI](./assets/Screenshot_1.png)
![PollyGlot UI](./assets/Screenshot_2.png)


## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript (ES Modules)
- OpenAI API (gpt-4o-mini)

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
```

Let me know if you'd like this customized further for GitHub deployment or hosting instructions!