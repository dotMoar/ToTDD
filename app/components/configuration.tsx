import React, { useEffect, useState } from 'react';
import { configurationProps } from '../types/propsComponents/configuration';
import { Model, Models } from '../types/model/model';
import { models as modelsList } from '../utils/objects/model';

export const Configuration: React.FC<configurationProps> = ({ setKey, closeModal, setModel, handleStep, model, keyChat }) => {
    const [models] = useState<Models>(modelsList);
    const [loading, setLoading] = useState(false);
    const [errorConfiguration, setErrorConfiguration] = useState(false);
    const [acceptCookies, setAcceptCookies] = useState(false);
    const [selectedModel, setSelectedModel] = useState(() => {
        const defaultModel = Object.values(models).find(model => model.default);
        return defaultModel ? defaultModel.value : '';
    });

    useEffect(() => {
        const storedKey = localStorage.getItem('key') || '';
        const storedModel = localStorage.getItem('model') || '';

        setKey(storedKey);
        setModel(models[storedModel]);
    }, [setKey, setModel]);

    const setKeyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKey(e.target.value);
    };

    const confirmConfiguration = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/testConfiguration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Key': btoa(keyChat),
                    'Model': model.value
                }
            });

            if (response.status === 200) {
                setErrorConfiguration(false);
                localStorage.setItem('key', keyChat);
                localStorage.setItem('model', model.value);
                localStorage.setItem('acceptCookies', 'true');
                closeModal();
                handleStep(1);
            } else {
                setErrorConfiguration(true);
            }
        } catch (error) {
            console.error('Error al confirmar la configuración:', error);
            setErrorConfiguration(true);
        } finally {
            setLoading(false);
        }
    };

    const handlerRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedModel(e.target.value);
        setModel(models[e.target.value]);
    }

    const handleClick = () => {
        if (!model.value || !keyChat) {
            setErrorConfiguration(true);
            return;
        }
        confirmConfiguration();
    }

    const sortedModels = Object.values(models).sort((a: Model, b: Model) => a.order - b.order);


    return (
        <div className="fixed text-base inset-0 flex items-center justify-center z-50 bg-stone-950 bg-opacity-80 text-black font-mono px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 text-black w-[600px] ">
                <div className="mx-auto p-4">
                    <div className="relative">
                        <h2 className="font-pixel text-lg pb-6">
                            Configuración Inicial
                        </h2>
                        <button className="absolute top-0 right-0 text-3xl" onClick={closeModal}>
                            &times;
                        </button>
                    </div>
                    <p className="mb-4">
                        Ingresa el key de chat gpt proporcionado. Con este key podrás, miau miau miau
                    </p>
                    <p className='mb-4'>
                        Este key tiene una validez de 12121
                    </p>
                    <div className="text-black pb-2">
                        <input
                            type="password"
                            placeholder="Ej. TuTuk!2142#3"
                            className="w-full border border-stone-950 rounded-xl py-2 px-2 text-black placeholder-stone-950"
                            onBlur={setKeyInput}
                            onChange={setKeyInput}
                            value={keyChat}
                        />
                    </div>
                    <div className='font-mono irst-line:lex flex-wrap pb-4'>
                        {sortedModels.map((model) => (
                            <div key={model.value} className="flex items-center">
                                <input
                                    id={`radio-${model.value}`}
                                    type="radio"
                                    value={model.value}
                                    name="model-radio"
                                    className="accent-black"
                                    checked={selectedModel === model.value}
                                    onChange={handlerRadioChange}
                                />
                                <label htmlFor={`radio-${model.value}`} className="ms-2 text-black">
                                    {model.name} {model.default && "(recomendado)"}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div>
                        {errorConfiguration && (
                            <p className="text-red-500 text-sm mb-4">
                                Error al configurar, por favor valida el key ingresado
                            </p>
                        )}
                    </div>
                    <div className='flex justify-end pb-4 status'>
                        <button
                            className="bg-transparent border rounded-xl border-black font-pixel px-2 py-1 text-lg w-56 h-10"
                            onClick={handleClick}
                        >
                            {loading ? (
                                <svg
                                    aria-hidden="true"
                                    className="inline w-8 h-8 text-black fill-gray-300 animate-spin"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            ) : (
                                "Ingresar"
                            )}
                        </button>
                    </div>

                </div>
                <div>
                    <p>
                        ¿Necesitas ayuda? revisa la guía oficial de chatgpt
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Configuration;
