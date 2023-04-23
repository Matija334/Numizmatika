import {Link, useNavigate} from "react-router-dom";
import React from "react";
import "./PodrobnostiKovanca.css"
import {Kovanec} from "../../Modeli/Kovanec";
import KovanecObrazec from "./KovanecObrazec";

type Props = {
    kolekcija: Kovanec[]
}

export default function KovanecDodaj({kolekcija}: Props) {
    const navigate = useNavigate();
    const handleAdd = (kovanec: Kovanec) => {
        kovanec.id = kolekcija.length;
        kolekcija.push(kovanec);
        navigate("/seznamKovancev")
    }
    return (
        <>
            <h3>Dodaj kovanec</h3>
            <KovanecObrazec onAdd={handleAdd}/>
            <Link to={"/seznamKovancev"}>Nazaj na seznam</Link>
        </>
    );
}