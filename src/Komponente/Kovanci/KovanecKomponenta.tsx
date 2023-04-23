import {Kovanec} from "../../Modeli/Kovanec";
import "./Kovanec.css";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Flag from 'react-flagkit';

type Props = {
    kovanec: Kovanec;
    handlePremakniKovanec: (kovanecId: number, status: string) => void;
    handleOdstraniKovanec: (kovanecId: number) => void;
};

export default function KovanecKomponenta({kovanec, handlePremakniKovanec, handleOdstraniKovanec,}: Props) {
    const [pokaziZbiratelja, setPokaziZbiratelja] = useState(false);
    let drzava;
    if(kovanec.drzava === "Slovenija") {
        drzava = "SI"
    }
    if(kovanec.drzava === "Avstrija") {
        drzava = "AT"
    }
    const handlePremakniMedManjkajoce = () => {
        handlePremakniKovanec(kovanec.id, "manjkajoc");
    };

    const handlePremakniMedZbirko = () => {
        handlePremakniKovanec(kovanec.id, "zbirka");
    };
    const handlePremakniMedVisek = () => {
        handlePremakniKovanec(kovanec.id, "visek");
    };

    const handleOdstrani = () => {
        handleOdstraniKovanec(kovanec.id);
    };

    const handlePokaziZbiratelja = () => {
        setPokaziZbiratelja(!pokaziZbiratelja);
    };
    return (
        <>
            <div className="card ">
                <img
                    src={kovanec.slika}
                    className="card-img-top"
                    alt={kovanec.opis}
                />
                <div className="card-body">
                    <h5 className="card-title">Vrednost: {kovanec.vrednost} €</h5>
                    <p className="card-text">Teža: {kovanec.teza} g</p>
                    <p className="card-text">Država: {kovanec.drzava} <Flag country={drzava} size={25}/></p>
                    <p className="card-text">Kolekcija: {kovanec.status}</p>
                    <div className="coin-actions">
                        {kovanec.status === "manjkajoc" ? null : (
                            <button
                                className="btn btn-primary"
                                onClick={handlePremakniMedManjkajoce}
                            >
                                <i className="fas fa-plus"></i> Manjkajoč
                            </button>
                        )}
                        {kovanec.status === "zbirka" ? null : (
                            <button
                                className="btn btn-primary"
                                onClick={handlePremakniMedZbirko}
                            >
                                <i className="fas fa-plus"></i> Zbirka
                            </button>
                        )}
                        {kovanec.status === "visek" ? null : (
                            <button
                                className="btn btn-primary"
                                onClick={handlePremakniMedVisek}
                            >
                                <i className="fas fa-plus"></i> Višek
                            </button>
                        )}

                        <div>
                            <button className="btn btn-danger btn-odstrani" onClick={handleOdstrani}>
                                <i className="fas fa-minus"></i>
                            </button>
                        </div>
                        <Link
                            key={kovanec.id + 100}
                            to={"/seznamKovancev/uredi/" + kovanec.id}
                            className="btn btn-secondary"
                        >
                            Uredi
                        </Link>
                        <Link
                            key={kovanec.id}
                            to={"/seznamKovancev/" + kovanec.id}
                            className="btn btn-secondary"
                        >
                            Več
                        </Link>
                        <button
                            className="btn btn-secondary"
                            onClick={handlePokaziZbiratelja}
                        >
                            <i className=""></i> O zbiratelju
                        </button>
                        <div>{pokaziZbiratelja && kovanec.zbiratelj.ime + " " + kovanec.zbiratelj.priimek}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
