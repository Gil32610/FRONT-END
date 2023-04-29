import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App"

//configurando o router
import{ createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";

import Home from './routes/Home';
import ErroPage from "./routes/ErroPage";
import ListaOrganizations from './routes/ListsOrganizations';
import Contact from './routes/Contact';
import Settings from './routes/Settings';
import Help from './routes/Help';
import ListaDepartament from './routes/ListsDepartament';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    //page de erro
    errorElement: <ErroPage/>,
    children: [
      {
        path: "Home",
        element: <Home/>,
      },
      {
        path: "ListsOrganizations",
        element: <ListaOrganizations/>,
      },
      {
        path: "ListsDepartament",
        element: <ListaDepartament/>,
      },
      {
        path: "Contact",
        element: <Contact/>,
      },
      {
        path: "Settings",
        element: <Settings/>,
      },
      {
        path: "Help",
        element: <Help/>,
      },
      //nested routes - identificador unico - dynimic routes
      /* {
        path: "/Home/:id",
        element: <Listas/>,
      }, */
      // navigate para pages não existentes
      {
        path: "oldcontact",
        element: <Navigate to="/Home"/>
      }
    ]
  },
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
