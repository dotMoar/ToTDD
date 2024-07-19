import Chat from "@/app/components/chat";
import { Configuration } from "@/app/components/configuration";
import { Models } from "@/app/enums/models";
import { useEffect, useState } from "react";

export default function Page() {
  const [key, setKey] = useState('');
  const [model, setModel] = useState<Models>(Models.GPT4Turbo);

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center">
      <div className="grid grid-cols-12 gap-4 w-full h-screen">
        <div className="columns-secondary"><Configuration setKey={setKey} setModel={setModel} model={model} /></div>
        <div className="columns"> <Chat apiKey={key} model={model} /></div>
        <div className="columns-secondary">Columna Tres</div>
      </div>
    </div>
  )
}