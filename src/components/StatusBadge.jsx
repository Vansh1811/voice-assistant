const StatusBadge = ({ isListening }) => (
  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500',
      background: isListening ? '#fef2f2' : '#f3f4f6',
      color: isListening ? '#991b1b' : '#1f2937'
    }}>
      <div style={{
        width: '0.5rem',
        height: '0.5rem',
        borderRadius: '50%',
        marginRight: '0.5rem',
        background: isListening ? '#ef4444' : '#6b7280',
        animation: isListening ? 'pulse 2s infinite' : 'none'
      }}></div>
      {isListening ? 'Listening...' : 'Click to start listening'}
    </div>
  </div>
);

export default StatusBadge;
