class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  helloWorldHandler = () => {
    const message = this.createChatBotMessage("Hello, I am Neumann.")
    this.setChatBotMessage(message)
  }

  setChatBotState = (message) => {
    this.setState(state => ({...state, messages: [...state.messages, message]}))
  }
}

export default ActionProvider;

//responses are defined in the actionProvider