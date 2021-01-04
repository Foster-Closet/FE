import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatApp from './ChatApp';
import Message from './Message';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChatApp />, document.getElementById('root'));
registerServiceWorker();

const ChatFeature = { ChatApp, Message, MessageForm, MessageList }

export default ChatFeature