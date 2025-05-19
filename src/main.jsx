import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./layouts/MainLayouts.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/Authentication/SignIn.jsx";
import SignUp from "./components/Authentication/SignUp.jsx";
import AuhtProvider from "./Context/AuhtProvider.jsx";
import Users from "./components/users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/coffees')
      },
      {
        path: "/add-coffee",
        Component: AddCoffee,
      },
      {
        path: "/update-coffee/:id",
        Component: UpdateCoffee,
        loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
        path: "/coffee-details/:id",
        Component: CoffeeDetails,
        loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path: '/signup',
        Component: SignUp
      },
      {
        path: '/users',
        Component: Users,
        loader: ()=>fetch('http://localhost:3000/users')
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuhtProvider>
      <RouterProvider router={router} />
    </AuhtProvider>
  </StrictMode>
);
