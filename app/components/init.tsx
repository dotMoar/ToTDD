import { InitProps } from "../types/propsComponents/init";

const Init: React.FC<InitProps> = ({ configModal }) => {
    return (
        <>
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
        </>
    )
}

export default Init;