import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [createChatBotMessage(`Hey.. Are you doing okay lately?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(123 194 255)',
    },
    chatButton: {
      backgroundColor: 'rgb(123 194 255)',
    },
  },
};

export default config;