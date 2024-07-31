import { Models } from "@/app/types/model/model";

export const models: Models = {
    "gpt-3.5-turbo": {
        value: "gpt-3.5-turbo",
        name: "GPT-3.5 Turbo",
        order: 4,
        default: false
    }
    , "gpt-4-turbo": {
        value: "gpt-4-turbo",
        name: "gpt-4-turbo",
        order: 2,
        default: false
    }
    , "gpt-4o": {
        value: "gpt-4o",
        name: "gpt-4o",
        order: 1,
        default: true
    }
    , "gpt-4o-mini": {
        value: "gpt-4o-mini",
        name: "gpt-4o-mini",
        order: 3,
        default: false
    }
}