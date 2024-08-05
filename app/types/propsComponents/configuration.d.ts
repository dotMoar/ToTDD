import { Models } from "@/app/enums/models";
import { Model } from "../model/model";

export interface configurationProps {
    setKey: (key: string) => void;
    setModel: (model: Models) => void;
    model: Model;
    keyChat: string;
    closeModal: () => void;
    handleStep: (step: number) => void;
}