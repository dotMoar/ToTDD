import Chat from "@/app/components/chat";
import { Configuration } from "@/app/components/configuration";
import HistorySelect from "@/app/components/historySelect";
import { Model } from "@/app/types/model/model";
import { models } from "@/app/utils/objects/model";
import { useEffect, useState } from "react";

export default function Page() {
  const [key, setKey] = useState('');
  const [model, setModel] = useState<Model>(models.gpt4o);
  const [history, setHistory] = useState<string>('');

  const [state, setState] = useState({
    loading: true,
    error: false,
    data: null,
    configModal: false,
  });

  const configModal = () => {
    setState({ ...state, configModal: !state.configModal });
  };

  useEffect(() => {
    console.log(key)
    console.log(model)
  }, [key, model]);

  return (
    <div className="min-h-screen bg-stone-900 text-white flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center font-press-start max-w-lg w-full">
          <h1 className="text-3xl">ToTDD</h1>
          <h2 className="text-xs mb-8">Tales of the Digital Dungeon</h2>
          <p className="mb-28">Descripción de que consiste o como funciona</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-8"
            onClick={configModal}
          >
            Comenzar
          </button>
        </div>
      </div>
      <button className="mb-8 font-press-start text-xs hover:text-stone-500 text-center">
        Créditos
      </button>
      {state.configModal && (
        <>
          <Configuration
            setKey={setKey}
            setModel={setModel}
            // model={model}
            closeModal={configModal}
          />
          {/* <h2 className="text-2xl mb-4">Configuración inicial</h2>
              <p className="mb-4">Ingresa el key de chat gpt y selecciona el modelo que utilizarás.</p>

              <div className="flex flex-col space-y-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray-600"
                    name="model"
                    value="model1"
                    checked={selectedModel === 'model1'}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-white">Modelo 1 (recomendado)</span>
                </label>
              </div>*/}
            

          <div className="fixed inset-0 bg-gray-900 opacity-50 z-40"></div>
        </>
      )
      }
    </div >
  );
}