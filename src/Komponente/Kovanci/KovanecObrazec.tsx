import {Kovanec} from "../../Modeli/Kovanec";
import {useEffect, useState} from "react";
import {ZbirateljModel} from "../../Modeli/ZbirateljModel";
import {kolekcija} from "../../podatki";

const zbiratelj: ZbirateljModel = {
    ime: "",
    priimek: ""
}

const initialState = {
    id: -1,
    vrednost: -1,
    teza: -1,
    drzava: "",
    opis: "",
    status: "",
    slika: "/images/slovenija2eur.jpg",
    zbiratelj: zbiratelj
};

interface Props {
    kovanecUredi?: Kovanec;
    onAdd: (kovanec: Kovanec) => void;
}

export default function KovanecObrazec({onAdd, kovanecUredi}: Props) {
    let [kovanec, setKovanec] = useState<Kovanec>(initialState);
    useEffect(() => {
        if (kovanecUredi !== undefined) {
            setKovanec(kovanecUredi)
        }
    }, []);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(kovanec);
        onAdd(kovanec);
        setKovanec(initialState)
    };

    const handleChange = (e: { target: { value: any; name: any; files?: any }; }) => {
        const { value, name, files } = e.target;

        if (name === "slika") {
            const file = files[0];
            const blob = new Blob([file], { type: "image/*" });
            const slika = URL.createObjectURL(blob);

            setKovanec((prevState: Kovanec) => {
                return {
                    ...prevState,
                    slika,
                };
            });
        } else {
            setKovanec((prevState: Kovanec) => {
                return {
                    ...prevState,
                    [name]: value,
                };
            });
        }
    };

    return (
        <>
            <div className="coin-form">
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Vrednost (€):</label>
                            <input type="number" name="vrednost" value={kovanec.vrednost !== -1 ? kovanec.vrednost : ''} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Teža (g):</label>
                            <input type="number" name="teza" value={kovanec.teza !== -1 ? kovanec.teza : ''} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Država:</label>
                            <input type="text" name="drzava" value={kovanec.drzava} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Opis:</label>
                            <textarea name="opis" value={kovanec.opis} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Status:</label>
                            <select name="status" value={kovanec.status} onChange={handleChange} className="form-select">
                                <option value="">Izberi...</option>
                                <option value="manjkajoc">Manjkajoč</option>
                                <option value="zbirka">Zbirka</option>
                                <option value="visek">Višek</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Slika:</label>
                            <input type="file" name="slika"  onChange={handleChange} className="form-control" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Shrani</button>
                </form>
            </div>
        </>
    )
}
