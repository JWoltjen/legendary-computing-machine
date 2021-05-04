class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  setChatBotState = (message) => {
    this.setState(state => ({...state, messages: [...state.messages, message]})
  }
}

export default ActionProvider;