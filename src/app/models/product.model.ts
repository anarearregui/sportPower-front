export interface Product{
    name: string;
    price: number;
    description: string;
    id: number;
    image?: string;
}

export interface Clothes extends Product{
    size: string;
    color: string;
    gendre: "Hombre" | "Mujer";
}

export interface Supplement extends Product{
    medida?: string;
}

export interface Protein extends Supplement{
    flavour: string;
}

export interface Snack extends Supplement{
    flavor: string;
}