document.getElementById("sendBtn").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
document.getElementById("clearBtn").addEventListener("click", clearChat);
document.getElementById("themeBtn").addEventListener("click", toggleTheme);

let isDarkMode = false;
let isUserTyping = false;

function sendMessage() {
  let userInput = document.getElementById("userInput").value;
  let messages = document.getElementById("messages");

  if (userInput.trim() !== "") {
    // Display user's message
    let userMessage = document.createElement("div");
    userMessage.textContent = "You: " + userInput + " 😊";
    userMessage.style.marginBottom = "10px";
    messages.appendChild(userMessage);

    // Show typing indicator
    let typingIndicator = document.createElement("div");
    typingIndicator.textContent = "Bot is typing...";
    typingIndicator.style.color = "#aaa";
    typingIndicator.id = "typing";
    messages.appendChild(typingIndicator);

    // Scroll to the bottom
    messages.scrollTop = messages.scrollHeight;

    // Delay to simulate bot "thinking" with random response time
    let delay = Math.random() * 2000 + 1000; // Random delay between 1-3 seconds
    setTimeout(() => {
      messages.removeChild(typingIndicator); // Remove typing indicator

      // Display bot's message
      let botMessage = document.createElement("div");
      botMessage.textContent = "Bot: " + getBotResponse(userInput);
      botMessage.style.marginBottom = "10px";
      botMessage.style.color = "#0d47a1";
      messages.appendChild(botMessage);

      // Scroll to the bottom
      messages.scrollTop = messages.scrollHeight;

      // Clear the input field
      document.getElementById("userInput").value = "";
    }, delay); // Random delay for bot response
  }
}

function getBotResponse(input) {
  input = input.toLowerCase();

  // Custom responses based on keywords
  if (input.includes("hello")) {
    return "Hello! 👋 How can I assist you today?";
  } else if (input.includes("trip")) {
    return "I can help you with your upcoming trips! ✈️ Where would you like to go?";
  } else if (input.includes("dhruv")) {
    return "dhruv harami hai";
  } else if (input.includes("krish")) {
    return "Hi Krish bhai!";
  } else if (input.includes("lohith")) {
    return "Bro only talks with girls!";
  }else if (input.includes("thanks")) {
    return "You're welcome! 😊";
  } else if (input.includes("weather")) {
    return "Sure! The weather today is sunny 🌞";
  } else if (input.includes("help")) {
    return "I'm here to help! 💡";
  } else {
    return "I don't understand that, but I'm here to assist! 🤖";
  }
}

// Function to clear chat
function clearChat() {
  let messages = document.getElementById("messages");
  messages.innerHTML = ""; // Clear all messages
}

// Function to toggle light/dark theme
function toggleTheme() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    document.getElementById("themeBtn").textContent = "Switch to Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("themeBtn").textContent = "Switch to Dark Mode";
  }
}

// Add typing indicator
document.getElementById("userInput").addEventListener("input", () => {
  if (!isUserTyping) {
    isUserTyping = true;
    setTimeout(() => {
      isUserTyping = false;
    }, 2000); // Remove after 2 seconds of inactivity
  }
});
