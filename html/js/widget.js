const widget = document.createElement("div");
widget.id = "ai-cat-widget";

widget.innerHTML = `
  <img
    id="ai-cat-button"
    src="../images/cat2.jpg"
    alt="AI Cat"
  />

  <div id="ai-chat-window">

    <div id="ai-chat-header">
      <span class="cat-avatar">😽</span>
      AI Киса
    </div>

    <div id="ai-chat-messages">
      <div id="ai-typing" class="ai-message ai-bot" style="display:none;">
        кисуля печатает...
      </div>
    </div>

    <div id="ai-chat-input-area">
      <input
        id="ai-chat-input"
        placeholder="Напиши сообщение..."
      />

      <button id="ai-chat-send">
        →
      </button>
    </div>

  </div>
`;

document.body.appendChild(widget);

const catButton = document.getElementById("ai-cat-button");
const chatWindow = document.getElementById("ai-chat-window");

catButton.addEventListener("click", () => {
  chatWindow.style.display =
    chatWindow.style.display === "flex"
      ? "none"
      : "flex";
});

const sendButton = document.getElementById("ai-chat-send");
const input = document.getElementById("ai-chat-input");
const messages = document.getElementById("ai-chat-messages");
const cat = document.getElementById("ai-cat-float");

let lastActivity = Date.now();

async function sendMessage() {

  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  // показываем typing
  document.getElementById("ai-typing").style.display = "block";

  try {

    const response = await fetch(
      "https://asolontsov.ru/service/cat-ai/chat",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      }
    );

    const data = await response.json();

    // скрываем typing
    document.getElementById("ai-typing").style.display = "none";

    addMessage(data.reply, "bot");

  } catch (err) {

    document.getElementById("ai-typing").style.display = "none";

    addMessage("Мяу… ошибка соединения 😿", "bot");

    console.error(err);
  }
}

function addMessage(text, type) {

  const div = document.createElement("div");

  div.className =
    `ai-message ai-${type}`;

  div.innerText = text;

  messages.appendChild(div);

  messages.scrollTop =
    messages.scrollHeight;
}

sendButton.addEventListener(
  "click",
  sendMessage
);

input.addEventListener(
  "keypress",
  (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  }
);
