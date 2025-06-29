import React from 'react';
import './ChatBubble.css';

const ResponseBox = ({ response }) => {
  return (
    <div className="chat-bubble assistant-bubble">
      <div className="chat-label"> Assistant response:</div>
      <div className="chat-text">{response}</div>
    </div>
  );
};

export default ResponseBox;
