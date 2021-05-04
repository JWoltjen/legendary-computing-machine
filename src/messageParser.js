class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message)
    console.log(this.state)
    const lowercase = message.toLowerCase()
    if(lowercase.includes("hello")){
      this.actionProvider.helloWorldHandler()
    }
  }
}

export default MessageParser;

//the message parser decides which response to activate
