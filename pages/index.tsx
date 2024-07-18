import Chat from "@/app/components/chat";
import { Configuration } from "@/app/components/configuration";
import { useEffect, useState } from "react";

export default function Page() {
  const [key, setKey] = useState('');
  useEffect(()=>{ console.log(key) }, [key])
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center">
      <div className="grid grid-cols-12 gap-4 w-full h-screen">
        <div className="columns-secondary"><Configuration setKey={setKey} /></div>
        <div className="columns"> <Chat apiKey={key} /></div>
        <div className="columns-secondary">Columna Tres</div>
      </div>
    </div>
  )
}