// components/Chat.tsx
import React, { useEffect, useState } from 'react';
import { ChatProps } from '../types/propsComponents/chat';


const Chat: React.FC<ChatProps> = ({ apiKey }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    const input = document.querySelector('#messageInput') as HTMLInputElement;
    const objectMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'person1',
    };
    setMessages((prevMessages: Message[]) => [...prevMessages, objectMessage]);
    input.value = '';

    fetchMessages(objectMessage);
  };

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const fetchMessages = async (text: Message) => {
    setLoading(true);
    const response = await fetch('/api/sendMessageController', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Key': btoa(apiKey),
      },
      body: JSON.stringify({ message: text }),
    });

    const data = await response.json();
    const iaMessage = {
      id: messages.length + 2,
      text: data.text,
      sender: 'person2',
    };

    setLoading(false);
    setMessages((prevMessages: Message[]) => [...prevMessages, iaMessage]);
  };

  const writingMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  return (
    <div className="flex flex-col h-full bg-zinc-200 text-white p-4 w-full rounded-2xl">
      <div className="flex-1 overflow-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'person1' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`inline-block max-w-xs px-5 py-2 shadow-md m-2 rounded-3xl mb-2 ${message.sender === 'person1' ? 'bg-zinc-600 text-right' : 'bg-zinc-500 text-left'}`}>
              {message.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start animate-pulse">
            <div className="inline-block max-w-xs p-2 rounded-lg mb-2 bg-zinc-500 text-left animate-pulse">
              ...
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg bg-zinc-100 text-zinc-800 shadow-xl"
          placeholder="Escribe un mensaje..."
          onKeyDown={pressEnter}
          onChange={writingMessage}
        />
        <button onClick={sendMessage} id="messageInput" className="ml-2 p-2 rounded-lg bg-zinc-700 text-white">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;