import {ZbirateljModel} from "./ZbirateljModel";

interface Kovanec {
    id: number;
    vrednost: number;
    teza: number;
    drzava: string;
    opis: string;
    status: string;
    slika: string;
    zbiratelj: ZbirateljModel;

}

export type {Kovanec}