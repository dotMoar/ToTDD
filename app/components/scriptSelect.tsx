import React, { useEffect, useState } from 'react';
import { textScript } from '../scripts/textScript';
import { TextScript } from '../types/script/textScript';
import { ScriptSelectProps } from '../types/propsComponents/historySelect';
import Image from 'next/image';

export const ScriptSelect: React.FC<ScriptSelectProps> = ({ setHistory }) => {
    // const [selectedStory, setSelectedStory] = useState(null as TextScript | null);

    // const handleStorySelect = (story: TextScript) => {
    //     setSelectedStory(story);
    //     setHistory(story.context);
    // };

    return (
        <>
            <div className="flex-grow flex items-center justify-center w-full">
                <div className="text-center max-w-50 w-full"> {/* Aumenté el max-w */}
                    <h1 className="text-2xl font-pixel mb-2">Para comenzar selecciona un modo de juego</h1>
                    <h2 className="text-1xl mb-8">Recuerda que siempre podrás volver a comenzar</h2>

                    <div className="flex justify-center gap-4 flex-wrap mb-6"> {/* Añadido flex-wrap */}

                        {textScript.map((story) => (
                            <div key={story.id} className="border border-white hover:border-red-800 p-4 text-left flex flex-col w-full sm:w-[450px]"> {/* w-full para móviles */}
                                <h2 className="text-l font-pixel mb-6">{story.title}</h2>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <Image
                                            alt="image-context-1"
                                            src={story.img}
                                            width={100}
                                            height={100}
                                            className="object-cover rounded"
                                        />
                                    </div>
                                    <p className="text-xs mb-4 px-4">{story.context}</p>
                                </div>
                                <div className="mb-4 mt-2">
                                    {story.tags.map((tag, index) => (
                                        <span key={index} className="bg-black text-white px-2 py-1 text-xs rounded-lg mr-2">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex justify-end mb-2">
                                    <button className="bg-transparent border rounded-xl border-white font-pixel px-1 py-1">
                                        Seleccionar
                                    </button>
                                </div>
                            </div>
                        ))}

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
