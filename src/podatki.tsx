import {Kovanec} from "./Modeli/Kovanec";
import {KolekcijaModel} from "./Modeli/KolekcijaModel";
import {ZbirateljModel} from "./Modeli/ZbirateljModel";

const zbiratelj: ZbirateljModel = {
    ime: "Matija",
    priimek: "Krsnik"
}

const seznamKovancev: Kovanec[] = [
    {
        id: 0,
        vrednost: 2,
        teza: 8.50,
        drzava: "Slovenija",
        opis: "Upodobljen je reliefni obris portreta največjega slovenskega pesnika Franceta Prešerna. Pod njegovo podobo pa je vpisan še Prešernov rokopis verza ŽIVE NAJ VSI NARODI iz njegove pesmi Zdravljica, ki je slovenska državna himna.",
        status: "zbirka",
        slika: "/images/slovenija2eur.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 1,
        vrednost: 1,
        teza: 7.50,
        drzava: "Slovenija",
        opis: "Predstavljen je doprsni portret Primoža Trubarja, zaslužnega za prvo slovensko tiskano knjigo. Ob njegovi podobi je na kovancu vpisan še stavek STATI INU OBSTATI.",
        status: "manjkajoc",
        slika: "/images/slovenija1eur.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 2,
        vrednost: 0.5,
        teza: 7.80,
        drzava: "Slovenija",
        opis: "Na kovancu je prikazana podoba Triglava, ozvezdje raka in napis OJ TRIGLAV MOJ DOM. Triglav je od nekdaj simbol slovenstva, ozvezdje raka pa predstavlja zodiakalno znamenje, v katerem je Slovenija postala samostojna država.",
        status: "visek",
        slika: "/images/slovenija50centov.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 3,
        vrednost: 0.2,
        teza: 5.74,
        drzava: "Slovenija",
        opis: "Kovanec krasi podoba dveh lipicancev, zaščitenih slovenskih paradnih konjev.",
        status: "visek",
        slika: "/images/slovenija20centov.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 4,
        vrednost: 0.1,
        teza: 4.10,
        drzava: "Slovenija",
        opis: "Predstavljen je projekt slovenskega parlamenta, ki ga je izdelal znameniti slovenski arhitekt Jože Plečnik kot vizijo bodoče slovenske samostojnosti. Projekt sicer nikoli ni bil realiziran. Nad podobo je napis KATEDRALA SVOBODE.",
        status: "zbirka",
        slika: "/images/slovenija10centov.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 5,
        vrednost: 0.05,
        teza: 3.92,
        drzava: "Slovenija",
        opis: "Osrednji motiv je sejalec, ki je pogosto uporabljen motiv likovnih ustvarjalcev. Upodobljen je v simbolni gesti, ko trosi semena. Med slednjimi je 25 zvezd, ki simbolizirajo države članice Evropske unije.",
        status: "zbirka",
        slika: "/images/slovenija5centov.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 6,
        vrednost: 0.02,
        teza: 3.06,
        drzava: "Slovenija",
        opis: "Na kovancu je reliefna podoba knežjega kamna, ki v slovenski zavesti predstavlja prapodobo organizirane državniške oblasti in simbol večstoletne težnje po samostojnosti in svobodi slovenskega naroda.",
        status: "zbirka",
        slika: "/images/slovenija2centa.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 7,
        vrednost: 0.01,
        teza: 2.3,
        drzava: "Slovenija",
        opis: "Upodobljen je motiv štorklje iz obstoječega kovanca za 20 SIT. Štorklja sicer predstavlja simbol rojstva in dolgega življenja.",
        status: "manjkajoc",
        slika: "/images/slovenija1cent.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 8,
        vrednost: 2,
        teza: 8.5,
        drzava: "Avstrija",
        opis: "Avstrijski kovanec za 2 € prikazuje lik radikalne pacifistke Berthe von Suttner, ki simbolizira večdesetletna prizadevanja Avstrije za krepitev miru. Napis na robu kovanca za 2 €: 2 EURO ***, štirje nizi, obrnjeni izmenično navzgor in navzdol.",
        status: "manjkajoc",
        slika: "/images/avstrija2eur.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 9,
        vrednost: 1,
        teza: 7.50,
        drzava: "Avstrija",
        opis: "Ta kovanec nosi lik slavnega avstrijskega skladatelja Wolfganga Amadeusa Mozarta in Avstrijo prikazuje kot deželo glasbe.",
        status: "manjkajoc",
        slika: "/images/avstrija1eur.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 10,
        vrednost: 0.5,
        teza: 7.80,
        drzava: "Avstrija",
        opis: "Secesijska stavba, ki je upodobljena na tem kovancu, ilustrira začetke art nouveau v Avstriji in simbolizira rojstvo nove dobe kot mostu v novo denarno obdobje.",
        status: "visek",
        slika: "/images/avstrija50centov.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 11,
        vrednost: 0.2,
        teza: 5.74,
        drzava: "Avstrija",
        opis: "Na kovancu je upodobljena palača Belvedere, ena najlepših baročnih stavb v Avstriji. V njej je bila leta 1955 podpisana Avstrijska državna pogodba, s katero je Avstrija ponovno pridobila popolno suverenost, zato je ime palače postalo sinonim za svobodo.",
        status: "visek",
        slika: "/images/avstrija20centov.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 12,
        vrednost: 0.1,
        teza: 4.10,
        drzava: "Avstrija",
        opis: "Kovanec prikazuje enega biserov dunajske gotske arhitekture in priljubljeno turistično točko, katedralo sv. Štefana.",
        status: "zbirka",
        slika: "/images/avstrija10centov.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 13,
        vrednost: 0.05,
        teza: 3.92,
        drzava: "Avstrija",
        opis: "Alpska trobentica, ki je upodobljena na tem kovancu, simbolizira skrb za okolje in vlogo Avstrije v razvoju okoljevarstvene zakonodaje EU.",
        status: "zbirka",
        slika: "/images/avstrija5centov.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 14,
        vrednost: 0.02,
        teza: 3.06,
        drzava: "Avstrija",
        opis: "Planika na tem kovancu, ki prav tako kot alpska trobentica na kovancu za 5 centov prihaja iz rožne serije, simbolizira skrb za okolje in vlogo Avstrije v razvoju okoljevarstvene zakonodaje EU.",
        status: "zbirka",
        slika: "/images/avstrija2centa.jpg",
        zbiratelj: zbiratelj
    },
    {
        id: 15,
        vrednost: 0.01,
        teza: 2.3,
        drzava: "Avstrija",
        opis: "Svišč, zadnji iz rožne serije, skupaj s planiko in alpsko trobentico simbolizira skrb za okolje in vlogo Avstrije v razvoju okoljevarstvene zakonodaje EU.",
        status: "manjkajoc",
        slika: "/images/avstrija1cent.jpg",
        zbiratelj: zbiratelj
    },
];

let kolekcija: Kovanec[] = seznamKovancev;


export {kolekcija}