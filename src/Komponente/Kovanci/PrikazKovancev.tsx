import {Kovanec} from "../../Modeli/Kovanec";
import React, {useState} from "react";
import KovanecKomponenta from "./KovanecKomponenta";
import "./KovanecSeznam.css"
import {Link, useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap';


type Props = {
    vsiKovanci: Kovanec[]
}

export default function PrikazKovancev({vsiKovanci}: Props) {
    let [kolekcija, setKolekcija] = useState<Kovanec[]>(vsiKovanci);
    let [prikazanaKolekcija, setPrikazanaKolekcija] = useState<Kovanec[]>(kolekcija);
    let [drzava, setDrzava] = useState("");
    let [vrednost, setVrednost] = useState("");

    const vsi = (): void => {
        setPrikazanaKolekcija(kolekcija);
    }

    const manjkajociKovanci = (): void => {
        setPrikazanaKolekcija(kolekcija.filter((k) => k.status === "manjkajoc"));
    }

    const zbirkaKovanci = (): void => {
        setPrikazanaKolekcija(kolekcija.filter((k) => k.status === "zbirka"));
    }

    const visekKovanci = (): void => {
        setPrikazanaKolekcija(kolekcija.filter((k) => k.status === "visek"));
    }

    const handleDrzava = (value: string): void => {
        setPrikazanaKolekcija(kolekcija.filter((k) => k.drzava === value));
    }

    const handleVrednost = (value: number): void => {
        setPrikazanaKolekcija(kolekcija.filter((k) => k.vrednost === value));
    }

    const navigate = useNavigate();

    const handlePremakniKovanec = (kovanecId: number, status: string) => {
        let k = kolekcija.find(k => k.id === kovanecId);
        if (k !== undefined) {
            k.status = status;
            setKolekcija(kolekcija);
            navigate("/seznamKovancev")
        }
    }

    const handleOdstraniKovanec = (kovanecId: number) => {
        const index = kolekcija.findIndex((k) => k.id === kovanecId);
        kolekcija.splice(index, 1);
        navigate("/seznamKovancev")
    }

    return (
        <>
            <div className='kovanci-seznam'>
                <h2>Seznam Kovancev</h2>
                <div className='coin-actions'>
                    <Link className={"btn btn-primary"} to={"/seznamKovancev/dodaj"}>Dodaj <i
                        className="fas fa-plus"></i></Link>
                    <Button variant={"warning"} onClick={manjkajociKovanci}>Prikaži manjkajoče</Button>
                    <Button variant={"success"} onClick={zbirkaKovanci}>Prikaži zbirko</Button>
                    <Button variant={"info"} onClick={visekKovanci}>Prikaži višek</Button>
                    <Button variant={"secondary"} onClick={vsi}>Prikaži vse</Button>
                    <div className={"izbira-drzave"}>
                        <label className="form-label">Država:</label>
                        <select name="drzava" onChange={(event) => handleDrzava(event.target.value)}
                                className="form-select">
                            <option value="vse">Izberi...</option>
                            <option value="Slovenija">Slovenija</option>
                            <option value="Avstrija">Avstrija</option>
                        </select>
                        <label className="form-label">Vrednost:</label>
                        <select name="vrednost" onChange={(event) => handleVrednost(Number(event.target.value))}
                                className="form-select">
                            <option value="vse">Izberi...</option>
                            <option value="2">2 €</option>
                            <option value="1">1 €</option>
                            <option value="0.5">0.50 €</option>
                            <option value="0.2">0.20 €</option>
                            <option value="0.1">0.10 €</option>
                            <option value="0.05">0.05 €</option>
                            <option value="0.02">0.02 €</option>
                            <option value="0.01">0.01 €</option>
                        </select>
                    </div>
                </div>
                <div className='kovanci-container'>
                    {prikazanaKolekcija.map((kovanec) => (
                        <KovanecKomponenta
                            key={kovanec.id}
                            kovanec={kovanec}
                            handlePremakniKovanec={handlePremakniKovanec}
                            handleOdstraniKovanec={handleOdstraniKovanec}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}