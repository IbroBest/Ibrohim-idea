import { createBrowserRouter } from "react-router-dom";
import { Aksiya } from "../components/Aksiya";
import { Kirish } from "../components/Kirish";
import App from "../App";
import { Savatcha } from "../components/Savatcha";
import { Tanlanganlar } from "../components/Tanlanganlar";
import { Taqqoslash } from "../components/Taqqoslash";
import { Layout } from "../layout/layout";
import { Manzil } from "../components/Manzillar";
import { Dynamic } from "../components/Dynamic";
import { BolibTolash } from "../components/BolibTolash";
import { Searchproduct } from "../components/search-product";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/aksiya",
        element: <Aksiya />,
      },

      {
        path: "/manzillar",
        element: <Manzil />,
      },
      
      {
        path: "/savatcha",
        element: <Savatcha />,
      },
      {
        path: "/tanlanganlar",
        element: <Tanlanganlar />,
      },
      {
        path: "/taqqoslash",
        element: <Taqqoslash />,
      },
      {
        path: "/product/:id",
        element: <Dynamic />,
      },
      {
        path: "/bolib-tolash",
        element: <BolibTolash />,
      },
      {
        path: "/search-product",
        element: <Searchproduct />,
      },
    ],
  },
  {
    path: "/registration",
    element: <Kirish />,
  },
]);
