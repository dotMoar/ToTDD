import Chat from "@/app/components/chat";
import { Configuration } from "@/app/components/configuration";
import HistorySelect from "@/app/components/historySelect";
import { Models } from "@/app/enums/Models";
import { useEffect, useState } from "react";

export default function Page() {
  const [key, setKey] = useState('');
  const [model, setModel] = useState<Models>(Models.GPT4Turbo);
  const [history, setHistory] = useState<string>('');

  const [state, setState] = useState({
    loading: true,
    error: false,
    data: null,
    configModal: false,
  });

  const configMoadal = () => {
    setState({ ...state, configModal: !state.configModal });
  }

  return (
    <div className="min-h-screen bg-stone-900 text-white flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center font-press-start max-w-lg w-full">
          <h1 className="text-3xl">ToTDD</h1>
          <h2 className="text-xs mb-8">Tales of the Digital Dungeon</h2>
          <p className="mb-28">Descripción de que consiste o como funciona</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-8"
            onClick={configMoadal}
          >Comenzar</button>
        </div>
      </div>
      <button className="mb-8 font-press-start text-xs hover:text-stone-500 text-center">Créditos</button>
      {
        state.configModal && (
          <>
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-stone-950 bg-opacity-80">
              <div className="bg-white rounded-lg shadow-lg p-6 text-black max-w-sm w-[1000px] h-[550px]">
                <h2 className="text-2xl mb-4">Configuración inicial</h2>
                <p className="mb-4">Ingresa el key de chat gpt y selecciona el modelo que utilizarás.</p>
                <button onClick={configMoadal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cerrar</button>
              </div>
            </div>
            <div className="fixed inset-0 bg-gray-900 opacity-50 z-40"></div>
          </>
        )
      }
    </div>
  )
}