import {Kovanec} from "./Kovanec";
import {ZbirateljModel} from "./ZbirateljModel";

class KolekcijaModel {
    private kovanci: Kovanec[] = [];
    private zbiratelj: ZbirateljModel = {ime: "", priimek: ""};

    setZbiratelj(zbiratelj: ZbirateljModel) {
        this.zbiratelj = zbiratelj;
    }

    dodajKovanec(kovanec: Kovanec){
        this.kovanci.push(kovanec);
    }

    urediKovanec(kovanec: Kovanec){
        const index = this.kovanci.findIndex((k) => k.id === kovanec.id);
        if(index !== -1) {
            this.kovanci[index] = kovanec;
        }
    }

    odstraniKovanec(kovanec: Kovanec){
        const index = this.kovanci.findIndex((k) => k.id === kovanec.id);
        if(index !== -1) {
            this.kovanci.splice(index, 1);
        }
    }

    getVsiKovanci(): Kovanec[]{
        return this.kovanci;
    }

    getManjkajociKovanci(): Kovanec[]{
        return this.kovanci.filter((k) => k.status = 'manjkajoc');
    }

    getZbirkaKovanci(): Kovanec[]{
        return this.kovanci.filter((k) => k.status = 'zbirka');
    }

    getVisekKovanci(): Kovanec[]{
        return this.kovanci.filter((k) => k.status = 'visek');
    }

    getKovanecId(id: number): Kovanec | undefined{
        return this.kovanci.find((k) => k.id === id);
    }
}

export {KolekcijaModel}