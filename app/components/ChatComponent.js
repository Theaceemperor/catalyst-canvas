'use client'
import React, { useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa';

const ChatComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const timeSent = new Date();
  const [messageTime, setMessageTime] = useState(new Date().toLocaleTimeString());

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'User', time: messageTime }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className={`chat-icon ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
        <FaCommentAlt />
      </div>
      {isChatOpen && (
        <div className="chat-window">
          <div>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender} p-2 bg-light-blue rounded mt-2 max-w-[60%] text-left text-dark-ocean-blue flex flex-col shadow shadow-shadow-color`}>
                <span className='font-semibold mb-1 flex justify-between text-md'>{msg.sender}<small className='font-normal'>{msg.time}</small></span>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className='mt-4'>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className='p-2 focus:outline-none border rounded border-light-gray mr-2 placeholder:text-gray-600 text-gray-700'
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;