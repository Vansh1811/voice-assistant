import React from 'react';
import '../App.css';
import { FaYoutube, FaGoogle, FaFacebook, FaInstagram, FaWhatsapp, FaClock, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const commands = [
  { text: 'Open YouTube', icon: <FaYoutube /> },
  { text: 'Open Google', icon: <FaGoogle /> },
  { text: 'Open Facebook', icon: <FaFacebook /> },
  { text: 'Open Instagram', icon: <FaInstagram /> },
  { text: 'Open WhatsApp', icon: <FaWhatsapp /> },
  { text: 'What time is it?', icon: <FaClock /> },
  { text: 'What\'s the date?', icon: <FaCalendarAlt /> },
  { text: 'Any other phrase (Google search)', icon: <FaSearch /> }
];

const SupportedCommands = ({ onCommandClick }) => {
  return (
    <div className="commands-box">
      <h3> Supported Commands</h3>
      <div className="commands-grid">
        {commands.map((cmd, index) => (
          <motion.div
            key={index}
            className="command-card"
            onClick={() => onCommandClick(cmd.text)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="command-icon">{cmd.icon}</span>
            <span>{cmd.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SupportedCommands;
