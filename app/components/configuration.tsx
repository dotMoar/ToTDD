import React, { useEffect, useRef, useState } from 'react';
import { configurationProps } from '../types/propsComponents/configuration';
import Image from 'next/image';
import openia from '../img/svg/openai.svg';
import { Models } from '../enums/models';

export const Configuration: React.FC<configurationProps> = ({ setKey, setModel, model }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [apiKey, setApiKey] = useState('');
    const [newModel, setNewModel] = useState<Models>(model);
    const [errorConfiguration, setErrorConfiguration] = useState(false);
    const [acceptCookies, setAcceptCookies] = useState(false);

    useEffect(() => {
        const storedKey = localStorage.getItem('key') || '';
        const storedAcceptCookies = localStorage.getItem('acceptCookies') === 'true';
        const storedModel = localStorage.getItem('model') as Models;

        setApiKey(storedKey);
        setKey(storedKey);
        setAcceptCookies(storedAcceptCookies);

        if (storedModel) {
            setNewModel(storedModel);
            setModel(storedModel);
        }
    }, [setKey, setModel]);

    const setKeyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newKey = e.target.value;
        setApiKey(newKey);
        setKey(newKey);
    };

    const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newModel = e.target.value as Models;
        setNewModel(newModel);
        setModel(newModel);
    };

    const confirmConfiguration = async () => {
        const response = await fetch('/api/testConfiguration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': btoa(apiKey),
                'Model': newModel
            }
        });

        if (response.status === 200 && acceptCookies) {
            localStorage.setItem('key', apiKey);
            localStorage.setItem('model', newModel);
            localStorage.setItem('acceptCookies', 'true');
        } else {
            setErrorConfiguration(true);
        }
    };

    const clearStorage = () => {
        localStorage.removeItem('key');
        localStorage.removeItem('model');
        localStorage.removeItem('acceptCookies');
        setApiKey('');
        setModel(Models.GPT4O);
        setNewModel(Models.GPT4O);
        setAcceptCookies(false);
    };

    const toggleAcceptCookies = () => {
        setAcceptCookies(prev => !prev);
    };

    return (
        <div className="mx-auto p-4">
            <article className="bg-black text-green-500 border-4 border-green-700 rounded-lg shadow p-4 font-pixel">
                <pre className="whitespace-pre-wrap">
                    ToTDD - tittle
                </pre>
            </article>
            <section className="mb-4">
                Este proyecto está enfocado a simular una partida de rol uno a uno con una IA. Para ello se necesita una clave de OpenAI para poder hacer uso de su API.
            </section>
            <div className="mb-4">
                <p className="text-xl mb-2">Key</p>
                <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded text-black"
                    placeholder="Key"
                    onChange={setKeyInput}
                    ref={inputRef}
                />
            </div>
            <div className="bg-zinc-600 divide-y divide-zinc-900 rounded-lg shadow p-4">
                <ul className="space-y-4 text-sm text-zinc-300" aria-labelledby="dropdownHelperRadioButton">
                    <li>
                        <label htmlFor="helper-radio-4" className="flex p-2 rounded hover:bg-zinc-400 cursor-pointer">
                            <div className="flex items-center h-5">
                                <input
                                    id="helper-radio-4"
                                    name="helper-radio"
                                    type="radio"
                                    value={Models.GPT4O}
                                    className="w-4 h-4 text-blue-600 bg-zinc-100 border-zinc-300"
                                    checked={newModel === Models.GPT4O}
                                    onChange={handleModelChange}
                                />
                            </div>
                            <div className="ml-2 text-sm">
                                <div className="flex items-center space-x-2">
                                    <Image
                                        className="w-5 max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
                                        src={openia}
                                        alt="openia"
                                        width={20}
                                        height={20}
                                    />
                                    <div>OpenAI<span className="font-bold text-gray-100">/gpt-4o</span></div>
                                </div>
                                <p id="helper-radio-text-4" className="text-xs font-normal text-zinc-500 mt-1">
                                    💸💸💸
                                </p>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="helper-radio-5" className="flex p-2 rounded hover:bg-zinc-100 cursor-pointer">
                            <div className="flex items-center h-5">
                                <input
                                    id="helper-radio-5"
                                    name="helper-radio"
                                    type="radio"
                                    value={Models.GPT4Turbo}
                                    className="w-4 h-4 text-blue-600 bg-zinc-100 border-zinc-300"
                                    checked={newModel === Models.GPT4Turbo}
                                    onChange={handleModelChange}
                                />
                            </div>
                            <div className="ml-2 text-sm">
                                <div className="flex items-center space-x-2">
                                    <Image
                                        className="w-5 max-w-xl rounded-lg shadow-xl"
                                        src={openia}
                                        alt="openia"
                                        width={20}
                                        height={20}
                                    />
                                    <div>OpenAI<span className="font-bold text-gray-100">/gpt-4-turbo</span></div>
                                </div>
                                <p id="helper-radio-text-5" className="flex items-center font-normal text-zinc-500 mt-1 space-x-2">
                                    <span>💸💸</span>
                                    <span className="relative font-pixel text-yellow-400 font-bold text-xs p-2 recommended-text">
                                        Recomendado
                                    </span>
                                </p>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="helper-radio-6" className="flex p-2 rounded hover:bg-zinc-100 cursor-pointer">
                            <div className="flex items-center h-5">
                                <input
                                    id="helper-radio-6"
                                    name="helper-radio"
                                    type="radio"
                                    value={Models.GPT3_5Turbo}
                                    className="w-4 h-4 text-blue-600 bg-zinc-100 border-zinc-300"
                                    checked={newModel === Models.GPT3_5Turbo}
                                    onChange={handleModelChange}
                                />
                            </div>
                            <div className="ml-2 text-sm">
                                <div className="flex items-center space-x-2">
                                    <Image
                                        className="w-5 max-w-xl rounded-lg shadow-xl"
                                        src={openia}
                                        alt="openia"
                                        width={20}
                                        height={20}
                                    />
                                    <div>OpenAI<span className="font-bold text-gray-100">/gpt-3.5-turbo</span></div>
                                </div>
                                <p id="helper-radio-text-6" className="text-xs font-normal text-zinc-500 mt-1">
                                    🐌
                                </p>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="flex items-center mt-4">
                <input 
                    id="accept-cookies" 
                    type="checkbox" 
                    checked={acceptCookies} 
                    onChange={toggleAcceptCookies} 
                    className="mr-2"
                />
                <label htmlFor="accept-cookies" className="text-white cursor-pointer">Guardar key y configuración</label>
            </div>
            <button
                className="w-full mt-4 bg-zinc-700 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded"
                onClick={confirmConfiguration}
            >
                Confirmar Configuración
            </button>
            <button onClick={clearStorage} className="w-full mt-4 rounded-lg py-2 px-4 bg-red-900 text-white">
                Borrar configuración
            </button>
            {errorConfiguration && (
                <div className="mt-4 text-red-500">
                    Ocurrió un error con las credenciales o la disponibilidad del modelo.
                </div>
            )}
        </div>
    );
};

export default Configuration;
