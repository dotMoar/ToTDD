import Chat from "@/app/components/chat";
import { Configuration } from "@/app/components/configuration";
import Init from "@/app/components/init";
import ScriptSelect from "@/app/components/scriptSelect";
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
    <div className="font-mono min-h-screen w-full bg-stone-900 text-white flex flex-col justify-between">
      {step === 0 && <Init configModal={configModal} />}
      {step === 1 && <ScriptSelect setHistory={setHistory} />}
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
      )}
    </div>
  );
}