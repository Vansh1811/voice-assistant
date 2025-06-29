import React from 'react';
import './ChatBubble.css';

const TranscriptBox = ({ transcript }) => {
  return (
    <div className="chat-bubble user-bubble">
      <div className="chat-label"> You said:</div>
      <div className="chat-text">{transcript}</div>
    </div>
  );
};

export default TranscriptBox;
