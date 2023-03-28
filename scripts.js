document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.getElementById("chat-window");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    function addMessageToChatWindow(message, sender) {
        const messageElement = document.createElement("p");
        messageElement.classList.add(sender);
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function handleUserMessage() {
        const message = userInput.value.trim();
        if (message.length === 0) return;

        addMessageToChatWindow(message, "user");
        userInput.value = "";

        // Add your chatbot API call here
        // For now, we'll simulate a chatbot response
        setTimeout(() => {
            addMessageToChatWindow("Hello, I'm the chatbot!", "chatbot");
        }, 1000);
    }

    sendButton.addEventListener("click", handleUserMessage);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleUserMessage();
        }
    });
});
