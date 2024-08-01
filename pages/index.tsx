import Chat from "@/app/components/chat";
import { Configuration } from "@/app/components/configuration";
import Init from "@/app/components/init";
import ScriptSelect from "@/app/components/ScriptSelect";
import { Model } from "@/app/types/model/model";
import { models } from "@/app/utils/objects/model";
import { useEffect, useState } from "react";

export default function Page() {
  const [key, setKey] = useState('');
  const [model, setModel] = useState<Model>(models.gpt4o);
  const [step, setStep] = useState(0);
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

  const handleStep = (step: number) => {
    setStep(step);
  }

  return (

    <div className="min-h-screen w-full bg-stone-900 text-white flex flex-col justify-between">

      <>
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-lg ">
            <h1 className="text-3xl font-press-start">Para comenzar selecciona un modo de juego</h1>
            <h2 className="text-xs mb-8">Recuerda que siempre podrás volver a comenzar</h2>

            <div className="flex justify-center gap-4">
              <div className="border border-gray-400 p-4 text-left flex flex-col ">
                <h3 className="text-xl font-bold">Crea tu propia historia</h3>
                <p className="text-sm mb-2">Crea tu prompt</p>
                <p className="text-xs mb-4">Advertir que el resultado puede no ser el esperado</p>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                  <button className="border border-gray-400 py-1 px-4 mt-4">Seleccionar</button>
                </div>
              </div>

              <div className="border border-gray-400 p-4 text-left flex flex-col ">
                <h3 className="text-xl font-bold">Crea tu propia historia</h3>
                <p className="text-sm mb-2">Crea tu prompt</p>
                <p className="text-xs mb-4">Advertir que el resultado puede no ser el esperado</p>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                  <button className="border border-gray-400 py-1 px-4 mt-4">Seleccionar</button>
                </div>
              </div>

              <div className="border border-gray-400 p-4 text-left flex flex-col ">
                <h3 className="text-xl font-bold">Crea tu propia historia</h3>
                <p className="text-sm mb-2">Crea tu prompt</p>
                <p className="text-xs mb-4">Advertir que el resultado puede no ser el esperado</p>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                  <button className="border border-gray-400 py-1 px-4 mt-4">Seleccionar</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <button className="mb-8 font-press-start text-xs hover:text-stone-500 text-center">
          Créditos
        </button>
      </>

      {step === 2 && <Init configModal={configModal} />}
      {step === 3 && <ScriptSelect setHistory={setHistory} />}
      <p> key: {key} </p>
      <p> model: {model?.name && model.name} </p>
      {state.configModal && (
        <>
          <Configuration
            setKey={setKey}
            setModel={setModel}
            closeModal={configModal}
            handleStep={handleStep}
          />
          <div className="fixed inset-0 bg-gray-900 opacity-50 z-40"></div>
        </>
      )
      }
    </div >
  );
}