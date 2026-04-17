import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CharactersPage } from "@/features/rickAndMortyCatalog/CharactersPage";
import { FavoritesPage } from "@/features/rickAndMortyCatalog/FavoritesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <CharactersPage /> },
      { path: "favorites", element: <FavoritesPage /> },
    ],
  },
]);
