import { InitProps } from "../types/propsComponents/init";

const Init: React.FC<InitProps> = ({ configModal }) => {
    return (
        <>
            <div className="flex-grow flex items-center justify-center">
                <div className="text-center font-press-start w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
                    <h1 className="text-lg font-pixel">Tales of the Digital Dungeon</h1>
                    <h3 className="text-xs"> o en español</h3>
                    <h2 className="text-3xl mb-8 font-pixel">Historias generadas con IA</h2>
                    <p className="mb-28 font-mono">
                        Aquí, la inteligencia artificial es tu compañero de juego y guía en emocionantes aventuras de rol. Imagina explorar mundos llenos de misterio, enfrentarte a monstruos, y resolver acertijos, todo mientras tus decisiones moldean la historia. No necesitas un grupo o un maestro de juego; nuestra IA te ofrece una experiencia única cada vez que juegas. Ya sea que quieras ser un valiente héroe o un astuto hechicero, este juego es tu puerta de entrada a un sinfín de posibilidades. ¡Prepárate para una aventura inolvidable y deja volar tu imaginación!
                    </p>
                    <button
                        className="bg-actionColor hover:bg-red-800 font-pixel text-white font-bold py-2 px-4 rounded mb-8"
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
