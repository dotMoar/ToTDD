// components/Chat.tsx
import React from 'react';

const messagesDummy = [
  { id: 1, text: "Hola, ¿cómo estás?", sender: "person1" },
  { id: 2, text: "¡Hola! Estoy bien, ¿y tú?", sender: "person2" },
  { id: 3, text: "Muy bien, gracias. ¿Qué has estado haciendo?", sender: "person1" },
  { id: 4, text: "He estado trabajando en un nuevo proyecto, ¿y tú?", sender: "person2" },
  // Agrega más mensajes aquí si es necesario
];

const Chat: React.FC = () => {

  const [messages, setMessages] = React.useState(messagesDummy);

  const sendMessage = () => {
    const input = document.querySelector('input') as HTMLInputElement;
    const message = {
      id: messages.length + 1,
      text: input.value,
      sender: 'person1',
    };
    setMessages([...messages, message]);
    input.value = '';
  }

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white p-4 w-full">
      <div className="flex-1 overflow-auto">
        {messages.map((message) => (
          <div key={message.id} className={`p-2 rounded-lg mb-2 ${message.sender === 'person1' ? 'bg-blue-500 self-start' : 'bg-green-500 self-end'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg bg-gray-700 text-white"
          placeholder="Escribe un mensaje..."
          onKeyDown={pressEnter}
        />
        <button onClick={sendMessage} className="ml-2 p-2 rounded-lg bg-blue-600 text-white">Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
