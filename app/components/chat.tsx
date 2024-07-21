import React, { useEffect, useState, useRef } from 'react';
import { ChatProps } from '../types/propsComponents/chat';

const Chat: React.FC<ChatProps> = ({ apiKey, model, history }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (articleRef.current && chatContainerRef.current) {
        const articleHeight = articleRef.current.offsetHeight;
        chatContainerRef.current.style.height = `calc(100vh - ${articleHeight + 55}px)`;
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [history]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        'model': model
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
    <section className="flex flex-col h-full w-full">
      <article ref={articleRef} className="text-wrap bg-zinc-700 p-4 mb-2 rounded-2xl">
        <p>{history}</p>
      </article>
      <div ref={chatContainerRef} className="flex p-2 flex-col w-full bg-zinc-800 text-white px-4 rounded-2xl overflow-y-auto">
        <div className="relative h-full overflow-y-scroll">
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
          <div ref={messagesEndRef} />
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            className="flex-1 p-2 rounded-lg bg-zinc-100 text-zinc-800 shadow-xl"
            placeholder="Escribe un mensaje..."
            onKeyDown={pressEnter}
            onChange={writingMessage}
            id="messageInput"
          />
          <button onClick={sendMessage} className="ml-2 p-2 rounded-lg bg-zinc-700 text-white">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
