import './App.css';
import Glava from "./Komponente/Glava/Glava";
import StranNeObstaja from "./Komponente/StranNeObstaja/StranNeObstaja";
import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import Noga from "./Komponente/Noga/Noga";
import PrikazKovancev from "./Komponente/Kovanci/PrikazKovancev";
import PodrobnostiKovanca from "./Komponente/Kovanci/PodrobnostiKovanca";
import {kolekcija} from "./podatki";
import KovanecUredi from "./Komponente/Kovanci/KovanecUredi";
import KovanecDodaj from "./Komponente/Kovanci/KovanecDodaj";

function App() {
    const router = createBrowserRouter([
        {
            path: '/seznamKovancev',
            element: <PrikazKovancev vsiKovanci={kolekcija}/>,
            errorElement: <StranNeObstaja/>,
        },
        {
            path: '/seznamKovancev/:kovanecId',
            element: <PodrobnostiKovanca kolekcija={kolekcija}/>,
            errorElement: <StranNeObstaja/>,
        },
        {
            path: '/seznamKovancev/uredi/:kovanecId',
            element: <KovanecUredi kolekcija={kolekcija}/>,
            errorElement: <StranNeObstaja/>,
        },
        {
            path: '/seznamKovancev/dodaj',
            element: <KovanecDodaj kolekcija={kolekcija}/>,
            errorElement: <StranNeObstaja/>,
        },
        {
            path: '*',
            element: <StranNeObstaja/>,
            errorElement: <StranNeObstaja/>,
        },
    ]);

    return (
        <div className="App">
            <Glava/>
            <RouterProvider router={router}/>
            <Noga/>
        </div>
    );
}

export default App;
