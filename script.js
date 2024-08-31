const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function addMessage(message) {
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
}

userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const userMessage = userInput.value;
        addMessage(`You: ${userMessage}`);
        // Add logic to handle chatbot responses here
        userInput.value = ''; // Clear input field
    }
});