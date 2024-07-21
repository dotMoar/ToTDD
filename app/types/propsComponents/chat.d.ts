import { Models } from "@/app/enums/models";

export interface ChatProps {
    apiKey: string;
    model: Models;
    history: string;
}