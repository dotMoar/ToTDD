export interface Model {
    value: string;
    name: string;
    order: number;
    default: boolean;
}

export interface Models {
    [key: string]: Model;
}