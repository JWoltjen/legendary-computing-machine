import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hello, I'm here to chat with you.`)],
  botName: "Neumann",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props}/>
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state: {
    movieTitles: ["2001: A Space Odyssey", "Terminator 2: Judgment Day", "Home Alone", "Up", "A Few Good Men"]
  }
}

export default config