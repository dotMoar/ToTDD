import { Models } from "@/app/enums/models";

export interface configurationProps {
    setKey: (key: string) => void;
    setModel: (model: Models) => void;
    // model: Models;
    closeModal: () => void;
}