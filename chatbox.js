document.addEventListener("DOMContentLoaded", () => {
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeButton = document.getElementById("close-button");
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");
    const chatbox = document.getElementById("chatbox");
  
    // 切換聊天機器人顯示狀態
    const toggleChatbot = () => {
        const isVisible = chatbotContainer.style.display === "flex";
        chatbotContainer.style.display = isVisible ? "none" : "flex";
      };
      
    // 發送消息
    const sendMessage = () => {
      const message = userInput.value.trim(); // 去除多餘空白
      if (message === "") return; // 如果輸入為空則不執行
  
      // 新增使用者的訊息
      addMessage("user", message);
  
      // 模擬機器人回應
      setTimeout(() => {
        addMessage("bot", "這是機器人的回應！");
      }, 500); // 延遲回應時間
  
      // 清空輸入框
      userInput.value = "";
    };
  
    // 新增訊息到聊天框
    const addMessage = (sender, text) => {
      const messageDiv = document.createElement("div");
      messageDiv.className = sender === "user" ? "message user" : "message bot";
      messageDiv.textContent = text;
  
      // 將訊息加入聊天框
      chatbox.appendChild(messageDiv);
  
      // 確保聊天框自動滾動到底部
      chatbox.scrollTop = chatbox.scrollHeight;
    };
  
    // 監聽輸入框的按鍵事件
    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // 避免預設換行行為
        sendMessage();
      }
    });
  
    // 綁定按鈕點擊事件
    chatbotIcon.addEventListener("click", toggleChatbot);
    closeButton.addEventListener("click", toggleChatbot);
    sendButton.addEventListener("click", sendMessage);
  });
  