import { generateText } from "ai"
import { createOpenAI } from "@ai-sdk/openai"
import { OpenIAResponse } from '../types/openIaResponse';

export const getResponseMessage = async (message: Message, key: string, model: string): Promise<any> => {
    const openai = createOpenAI({
        compatibility: 'strict',
        apiKey: key,
    });

    try {
        const response = await generateText({
            model: openai(model),
            prompt: message.text,
            system: "Contexto: Eres un game master y estas jugando una partida de rol solo con un jugador. No sabes nada de el por lo que deberas de improvisar todo comenzando por conocerlo y saber sus estadisticas de VIT, STR, AGI, DEX, INT y LUCK. (esta informacion deberas inferirla en base a la profesion, actividades y gustos del jugador)Lugar: estan en un callejon, oscuro humedo, no puedes ver la cara de quien te habla, pero esta buscando informacion para iniciar su viaje."
        })

        return response;
    } catch (error) {
        return error;
    }
};

export const testConnectionConfiguration = async (key: string, model: string) => {
    console.log(key, model)
    try {
        const openai = createOpenAI({
            compatibility: 'strict',
            apiKey: key,
        });

        const response = await generateText({
            model: openai(model),
            prompt: `test connection`,
        })

        console.log(response)

        return response;
    } catch (error) {
        return error as OpenIAResponse;
    }
}