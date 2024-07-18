import { generateText } from "ai"
import { createOpenAI } from "@ai-sdk/openai"

export const getResponseMessage = async (message: Message, key: string): Promise<any> => {
    const openai = createOpenAI({
        // custom settings, e.g.
        compatibility: 'strict', // strict mode, enable when using the OpenAI API
        apiKey: key,
    });

    try {
        const response = await generateText({
            model: openai("gpt-4-turbo"),

            prompt: message.text,
            system: "Contexto: Eres un game master y estas jugando una partida de rol solo con un jugador. No sabes nada de el por lo que deberas de improvisar todo comenzando por conocerlo y saber sus estadisticas de VIT, STR, AGI, DEX, INT y LUCK. (esta informacion deberas inferirla en base a la profesion, actividades y gustos del jugador)Lugar: estan en un callejon, oscuro humedo, no puedes ver la cara de quien te habla, pero esta buscando informacion para iniciar su viaje."
        })

        return response;
    } catch (error) {
        return error;
    }
};