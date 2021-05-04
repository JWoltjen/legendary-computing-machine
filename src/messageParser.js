class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message)
    console.log(this.state)
    const lowercase = message.toLowerCase()
    if(lowercase.includes("hello") && lowercase.includes("movie")){
    console.log("hi"); 
    console.log (this.state.movieTitles[0])
    }
  }
}

export default MessageParser;