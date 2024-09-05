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
  let userInput = document.getElementById("userInput").value.trim();
  let messages = document.getElementById("messages");

  console.log("User Input: ", userInput); // Debugging

  if (userInput !== "") {
    // Display user's message
    let userMessage = document.createElement("div");
    userMessage.textContent = "You: " + userInput + " 😊";
    userMessage.classList.add("user-message");
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
      botMessage.classList.add("bot-message");
      messages.appendChild(botMessage);

      // Scroll to the bottom
      messages.scrollTop = messages.scrollHeight;

      // Clear the input field
      document.getElementById("userInput").value = "";
    }, delay); // Random delay for bot response
  } else {
    console.log("User input is empty"); // Debugging
  }
}

function getBotResponse(input) {
  input = input.toLowerCase();

  // Custom responses based on keywords
  if (input.includes("hello")) {
    return "Hello! 👋 How can I assist you today?";
  } else if (input.includes("trip")) {
    return "I can help you with your upcoming trips! ✈️ Where would you like to go?";
  } else if (input.includes("thanks")) {
    return "You're welcome! 😊";
  } else if (input.includes("weather")) {
    return "Sure! The weather today is sunny 🌞";
  } else if (input.includes("help")) {
    return "I'm here to help! 💡";
  } else if (input.includes("book")) {
    return "I can help you book a flight or hotel. 🛫🏨 What would you like to book?";
  } else if (input.includes("cancel")) {
    return "I can assist with cancellations. ❌ What would you like to cancel?";
  } else if (input.includes("food")) {
    return "Looking for food recommendations? 🍕🍔 Let me know your preferences!";
  } else if (input.includes("bye")) {
    return "Goodbye! 👋 Feel free to reach out if you need help again.";
  } else if (input.includes("joke")) {
    return "Why don’t skeletons fight each other? They don’t have the guts! 😂";
  } else if (input.includes("price")) {
    return "I can help you find the best deals. 💰 What are you looking for?";
  } else if (input.includes("music")) {
    return "I love music too! 🎶 What's your favorite genre?";
  } else if (input.includes("time")) {
    let currentTime = new Date().toLocaleTimeString();
    return `The current time is ${currentTime}. ⏰`;
  } else if (input.includes("date")) {
    let currentDate = new Date().toLocaleDateString();
    return `Today's date is ${currentDate}. 📅`;
  } else if (input.includes("dhruv")) {
    return "Dhruv harami hai";
  } else if (input.includes("krish")) {
    return "Hi Krish bhai!";
  } else if (input.includes("lohith")) {
    return "Bro only talks with girls!";
  } else if (input.includes("vinay")) {
    return "vinay is also known as pro web devloper";
  } else {
    return "I'm here to assist! 🤖";
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
