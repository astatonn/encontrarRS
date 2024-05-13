import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import AddPet from "./AddPet";
import AddShelter from "./AddShelter";
import Login from "./Login";
import SearchPhoto from "./SearchPhoto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/adicionarPet",
    element: <AddPet />,
  },
  {
    path: "/adicionarAbrigo",
    element: <AddShelter />,
  },
  {
    path: "/loginAbrigo",
    element: <Login />,
  },
  {
    path: "/enviarFoto",
    element: <SearchPhoto />,
  },
]);

export default router;
