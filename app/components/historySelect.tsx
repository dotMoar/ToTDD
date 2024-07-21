import React, { useEffect, useState } from 'react';
import { textScript } from '../guion/textScript';
import { HistorySelectProps } from '../types/propsComponents/historySelect';
import { TextScript } from '../types/script/textScript';

export const HistorySelect: React.FC<HistorySelectProps> = ({ setHistory }) => {
    const [selectedStory, setSelectedStory] = useState(null as TextScript | null);

    const handleStorySelect = (story: TextScript) => {
        setSelectedStory(story);
        setHistory(story.context);
    };

    return (
        <div className="mx-auto">
            <div className="bg-black text-zinc-500 border-4 border-zinc-700 rounded-lg shadow text-xs font- el">
                <ul className="space-y-4 text-sm" aria-labelledby="dropdownHelperRadioButton">
                    {textScript.map((story) => (
                        <li key={story.id}>
                            <label
                                htmlFor={`story-select-${story.id}`}
                                className={`flex rounded cursor-pointer ${selectedStory?.id === story.id ? 'bg-zinc-100' : null}`}
                            >
                                <div className="hidden">
                                    <input
                                        name="story-select"
                                        id={`story-select-${story.id}`}
                                        type="radio"
                                        onChange={() => handleStorySelect(story)}
                                        checked={selectedStory?.id === story.id}
                                    />
                                </div>
                                <div className="mx-3 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <div>
                                            <p className='text-justify'>{story.text}</p>
                                        </div>
                                    </div>
                                    <p id={`helper-radio-text-${story.id}`} className="text-xs font-normal mt-1"></p>
                                </div>
                            </label>
                        </li>
                    ))}
                </ul>
                <button
                    className="w-full mt-4 bg-zinc-700 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => selectedStory && setHistory(selectedStory.context)}
                >
                    Confirmar Historia
                </button>
            </div>
        </div>
    );
};

export default HistorySelect;
