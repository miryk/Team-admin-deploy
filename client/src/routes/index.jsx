import { createBrowserRouter } from "react-router-dom";
import AddNewPlayer from "../components/AddNewPlayer";
import ListAll from "../components/ListAll";
import Layout from "../layouts/Layout";
import PlayersList from "../pages/PlayersList";
import StatusPage from "../pages/StatusPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Error. Not found</h1>,
    children: [
      {
        path: "players/",
        element: <PlayersList /> ,
        children: [
          {
            index: true,
            path: "list",
            element: <ListAll /> 
          }, 
          {
            path: 'addplayer',
            element: <AddNewPlayer />
          }
        ] 
      }, 
      {
        path: "status/game/:idx",
        element: <StatusPage />
      }
    ]
  },
])