import React, { useEffect, useRef } from 'react';
import { configurationProps } from '../types/propsComponents/configuration';

export const Configuration: React.FC<configurationProps> = ({ setKey }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const storedKey = localStorage.getItem('key') || '';
        if (inputRef.current) {
            inputRef.current.value = storedKey;
        }
        setKey(storedKey);
    }, [setKey]);

    const setKeyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newKey = e.target.value;
        localStorage.setItem('key', newKey);
        setKey(newKey);
    };

    return (
        <div>
            <section>
                Este proyecto está enfocado a simular una partida de rol uno a uno con una IA. Para ello se necesita una clave de OpenAI para poder hacer uso de su API.
            </section>
            <p className="text-xl">Key</p>
            <input
                type="password"
                className="text-black"
                placeholder="Key"
                onChange={setKeyInput}
                ref={inputRef}
            />
        </div>
    );
}
