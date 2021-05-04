import './App.css';
import {Chatbot} from 'react-chatbot-kit'
import messageParser from './messageParser'; 
import actionProvider from './actionProvider'; 
import config from './config'; 

function App() {
  return (
    <div className="App">
      <Chatbot config={config} actionProvider={actionProvider} messageParser={messageParser} />
    </div>
  );
}

export default App;
