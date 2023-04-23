import {Link, useParams} from "react-router-dom";
import React from "react";
import StranNeObstaja from "../StranNeObstaja/StranNeObstaja";
import "./PodrobnostiKovanca.css"
import {Kovanec} from "../../Modeli/Kovanec";
import Flag from 'react-flagkit';

type Props = {
    kolekcija: Kovanec[]
}

export default function PodrobnostiKovanca({kolekcija}: Props) {
    const { kovanecId } = useParams();
    const index = kolekcija.findIndex(((kovanec) => kovanec.id === Number(kovanecId)));
    const kovanec = kolekcija[index]
    if(kovanec) {
        return (
            <>
                <h1>Podrobnosti kovanca</h1>
                <div className='card mb-3'>
                    <div className='body'>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <div className='col-md-4'>
                                    <img src={kovanec.slika} alt={kovanec.opis} className='card-img-top'/>
                                </div>
                                <h3 className='card-title'><strong>Vrednost</strong>: {kovanec.vrednost} €</h3>
                                <p className='card-text'><strong>Teža</strong>: {kovanec.teza} g</p>
                                <p className='card-text'><strong>Država</strong>: {kovanec.drzava} <Flag country="SI" /></p>
                                <p className='card-text opis'><strong>Opis</strong>: {kovanec.opis}</p>
                                <p className='card-text'><strong>Kolekcija</strong>: {kovanec.status}</p>
                                <Link key={kovanec.id} to={"/seznamKovancev"} className='btn btn-primary'>Nazaj na seznam</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <StranNeObstaja />
    }
}
