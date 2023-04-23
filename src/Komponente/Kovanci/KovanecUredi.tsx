import {Link, useNavigate, useParams} from "react-router-dom";
import React from "react";
import {kolekcija} from "../../podatki";
import StranNeObstaja from "../StranNeObstaja/StranNeObstaja";
import "./PodrobnostiKovanca.css"
import {Kovanec} from "../../Modeli/Kovanec";
import KovanecObrazec from "./KovanecObrazec";

type Props = {
    kolekcija: Kovanec[]
}

export default function KovanecUredi({kolekcija}: Props) {
    const navigate = useNavigate();
    const handleAdd = (kovanec: Kovanec) => {
        const index = kolekcija.findIndex((k) => k.id === kovanec.id);
        kolekcija[index] = kovanec;
        navigate("/seznamKovancev")
    }
    const { kovanecId } = useParams();
    const index = kolekcija.findIndex(((kovanec) => kovanec.id === Number(kovanecId)));
    const kovanec = kolekcija[index]
    if(kovanec) {
        return (
            <>
                <h3>Uredi kovanec</h3>
                <KovanecObrazec onAdd={handleAdd} kovanecUredi={kovanec} />
                <Link key={kovanec.id} to={"/seznamKovancev"}>Nazaj na seznam</Link>
            </>
        );
    } else {
        return <StranNeObstaja />
    }
}