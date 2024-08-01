import React, { useEffect, useRef, useState } from 'react';
import { configurationProps } from '../types/propsComponents/configuration';
import Image from 'next/image';
import openia from '../img/svg/openai.svg';
import { Model, Models } from '../types/model/model';
import { models as modelsList } from '../utils/objects/model';

export const Configuration: React.FC<configurationProps> = ({ setKey, closeModal, setModel, handleStep }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [apiKey, setApiKey] = useState('');
    const [models, setModels] = useState<Models>(modelsList);
    const [errorConfiguration, setErrorConfiguration] = useState(false);
    const [acceptCookies, setAcceptCookies] = useState(false);
    const [selectedModel, setSelectedModel] = useState(() => {
        const defaultModel = Object.values(models).find(model => model.default);
        return defaultModel ? defaultModel.value : '';
    });
    // useEffect(() => {
    //     const storedKey = localStorage.getItem('key') || '';
    //     const storedAcceptCookies = localStorage.getItem('acceptCookies') === 'true';
    //     // const storedModel = localStorage.getItem('model') as Models;

    //     setApiKey(storedKey);
    //     setKey(storedKey);
    //     setAcceptCookies(storedAcceptCookies);

    //     // if (storedModel) {
    //     //     setNewModel(storedModel);
    //     //     setModel(storedModel);
    //     // }
    // }, [setKey, setModel]);

    const setKeyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newKey = e.target.value;
        setApiKey(newKey);
        setKey(newKey);
    };

    // const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const newModel = e.target.value ;
    //     setNewModel(newModel);
    //     setModel(newModel);
    // };

    // const confirmConfiguration = async () => {
    //     const response = await fetch('/api/testConfiguration', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Key': btoa(apiKey),
    //             'Model': newModel
    //         }
    //     });

    //     if (response.status === 200 && acceptCookies) {
    //         localStorage.setItem('key', apiKey);
    //         localStorage.setItem('model', newModel);
    //         localStorage.setItem('acceptCookies', 'true');
    //     } else {
    //         setErrorConfiguration(true);
    //     }
    // };

    const clearStorage = () => {
        localStorage.removeItem('key');
        localStorage.removeItem('model');
        localStorage.removeItem('acceptCookies');
        setApiKey('');
        // setModel(Models.GPT4O);
        // setNewModel(Models.GPT4O);
        setAcceptCookies(false);
    };

    const toggleAcceptCookies = () => {
        setAcceptCookies(prev => !prev);
    };

    const handlerRadioChange = (e) => {
        setSelectedModel(e.target.value)
        setModel(models[e.target.value]);
    }

    const handleClick = (e) => {
        closeModal();
        handleStep(1);
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
                    <div className='flex justify-end pb-4'>
                        <button
                            className="bg-transparent border rounded-xl border-black font-pixel px-2 py-1 text-lg"
                            onClick={handleClick}
                        >
                            Ingresar
                        </button>
                    </div>
                </div>
                <div>
                    <p>
                        ¿Necesitas ayuda? revisa la guía oficial de chatgpt
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Configuration;
