import React, { useEffect, useState } from 'react';
import { textScript } from '../guion/textScript';
import { TextScript } from '../types/script/textScript';
import { ScriptSelectProps } from '../types/propsComponents/historySelect';

export const ScriptSelect: React.FC<ScriptSelectProps> = ({ setHistory }) => {
    // const [selectedStory, setSelectedStory] = useState(null as TextScript | null);

    // const handleStorySelect = (story: TextScript) => {
    //     setSelectedStory(story);
    //     setHistory(story.context);
    // };

    return (
        <>
            <div className="flex-grow flex items-center justify-center">
                <div className="text-center max-w-lg w-full">
                    <h1 className="text-3xl font-press-start">Para comenzar selecciona un modo de juego</h1>
                    <h2 className="text-xs mb-8">Recuerda que siempre podrás volver a comenzar</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-gray-700 p-4 text-left">
                            <h3 className="text-xl font-bold">Historia 1</h3>
                            <p className="text-sm mb-2">Despiertas en un lugar desconocido, estás solo y solo puedes ver tu reflejo</p>
                            <p className="text-xs mb-4">Terror psicológico</p>
                            <button className="border border-gray-700 py-1 px-4 mt-4">Seleccionar</button>
                        </div>

                        <div className="border border-gray-700 p-4 text-left">
                            <h3 className="text-xl font-bold">Historia 1</h3>
                            <p className="text-sm mb-2">Esto es el contexto de la historia 1, debe ser un breve relato de la configuración y el tipo de modo que seleccionará el usuario</p>
                            <p className="text-xs mb-4">Detalle técnico de historia (tags) Suspenso, 1920, ciudad</p>
                            <button className="border border-gray-700 py-1 px-4 mt-4">Seleccionar</button>
                        </div>

                        <div className="border border-gray-400 p-4 text-left">
                            <h3 className="text-xl font-bold">Crea tu propia historia</h3>
                            <p className="text-sm mb-2">Crea tu prompt</p>
                            <p className="text-xs mb-4">Advertir que el resultado puede no ser el esperado</p>
                            <button className="border border-gray-400 py-1 px-4 mt-4">Seleccionar</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="mb-8 font-press-start text-xs hover:text-stone-500 text-center">
                Créditos
            </button>
        </>
    );
};

export default ScriptSelect;

// <div className="mx-auto">
//     <div className="bg-black text-zinc-500 border-4 border-zinc-700 rounded-lg shadow text-xs font- el">
//         <ul className="space-y-4 text-sm" aria-labelledby="dropdownHelperRadioButton">
//             {textScript.map((story) => (
//                 <li key={story.id}>
//                     <label
//                         htmlFor={`story-select-${story.id}`}
//                         className={`flex rounded cursor-pointer ${selectedStory?.id === story.id ? 'bg-zinc-100' : null}`}
//                     >
//                         <div className="hidden">
//                             <input
//                                 name="story-select"
//                                 id={`story-select-${story.id}`}
//                                 type="radio"
//                                 onChange={() => handleStorySelect(story)}
//                                 checked={selectedStory?.id === story.id}
//                             />
//                         </div>
//                         <div className="mx-3 text-sm">
//                             <div className="flex items-center space-x-2">
//                                 <div>
//                                     <p className='text-justify'>{story.text}</p>
//                                 </div>
//                             </div>
//                             <p id={`helper-radio-text-${story.id}`} className="text-xs font-normal mt-1"></p>
//                         </div>
//                     </label>
//                 </li>
//             ))}
//         </ul>
//         <button
//             className="w-full mt-4 bg-zinc-700 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded"
//             onClick={() => selectedStory && setHistory(selectedStory.context)}
//         >
//             Confirmar Historia
//         </button>
//     </div>
// </div>
