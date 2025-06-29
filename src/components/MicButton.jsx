import { Mic, MicOff } from 'lucide-react';

const MicButton = ({ isListening, startListening, stopListening }) => {
  const buttonStyle = {
    position: 'relative',
    padding: '0.9rem',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    background: isListening ? '#ef4444' : '#10b981', // Red / Emerald
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    animation: isListening ? 'pulse 2s infinite' : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
      <button
        onClick={isListening ? stopListening : startListening}
        style={buttonStyle}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isListening ? (
          <MicOff style={{ width: '1.8rem', height: '1.8rem', color: 'white' }} />
        ) : (
          <Mic style={{ width: '1.8rem', height: '1.8rem', color: 'white' }} />
        )}
      </button>
    </div>
  );
};

export default MicButton;
