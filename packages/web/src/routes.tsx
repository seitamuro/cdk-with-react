import { RouteObject } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";

export const routes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/",
    element: <App />
  }
]