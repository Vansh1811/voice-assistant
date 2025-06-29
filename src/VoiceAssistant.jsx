import AssistantHeader from './components/AssistantHeader';
import MicButton from './components/MicButton';
import StatusBadge from './components/StatusBadge';
import TranscriptBox from './components/TranscriptBox';
import ResponseBox from './components/ResponseBox';
import SupportedCommands from './components/SupportedCommands';
import Instructions from './components/Instructions';
import './components/VoiceAssistant.css';
import './App.css';

import React, { useState, useEffect, useRef } from 'react';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isSupported, setIsSupported] = useState(true);
  const recognitionRef = useRef(null);

  // ✅ Setup speech recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setTranscript(spokenText);
      handleCommand(spokenText);
    };

    recognition.onerror = (event) => {
      console.error('Recognition error:', event.error);
    };

    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
  }, []);

  // ✅ Text-to-speech
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  // ✅ Handle known and unknown commands
  const handleCommand = (text) => {
    const command = text.toLowerCase().trim();
    let reply = '';

    if (command.includes('hello') || command.includes('hi')) {
      reply = 'Hello there! How can I help you today?';
    } else if (command.includes('how are you')) {
      reply = "I'm just a virtual assistant, but I'm functioning as expected!";
    } else if (command.includes('thank you')) {
      reply = "You're welcome!";
    } else if (command.includes('your name')) {
      reply = "I'm your voice assistant. I don't have a name... yet!";
    } else if (command.includes('open youtube')) {
      reply = 'Opening YouTube.';
      window.open('https://www.youtube.com', '_blank');
    } else if (command.includes('open google')) {
      reply = 'Opening Google.';
      window.open('https://www.google.com', '_blank');
    } else if (command.includes('open facebook')) {
      reply = 'Opening Facebook.';
      window.open('https://www.facebook.com', '_blank');
    } else if (command.includes('open instagram')) {
      reply = 'Opening Instagram.';
      window.open('https://www.instagram.com', '_blank');
    } else if (command.includes('open whatsapp')) {
      reply = 'Opening WhatsApp Web.';
      window.open('https://web.whatsapp.com', '_blank');
    } else if (command.includes('time')) {
      const now = new Date();
      reply = `The time is ${now.toLocaleTimeString()}`;
    } else if (command.includes('date')) {
      const today = new Date();
      reply = `Today's date is ${today.toDateString()}`;
    } else {
      reply = ` opening "${text}". on google for you `;
      window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, '_blank');
    }

    setResponse(reply);
    speak(reply);
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setTranscript('');
      setResponse('');
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  if (!isSupported) {
    return (
      <div className="not-supported-container">
        <div className="not-supported-box">
          <div className="not-supported-icon">⚠️</div>
          <h2>Not Supported</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="assistant-wrapper">
      <div className="assistant-box">
        <AssistantHeader />
        <MicButton
          isListening={isListening}
          startListening={startListening}
          stopListening={stopListening}
        />
        <StatusBadge isListening={isListening} />
        {transcript && <TranscriptBox transcript={transcript} />}
        {response && <ResponseBox response={response} />}
        <SupportedCommands />
        <Instructions />
      </div>
    </div>
  );
};

export default VoiceAssistant;
