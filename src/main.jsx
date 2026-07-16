import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/customer/contact/contact.jsx";
import MenuPage from "./pages/customer/menu/menu.jsx";
import LocationsPage from "./pages/customer/locations/locations.jsx";
import OffersPage from "./pages/customer/offers/offers.jsx";
import AdminPage from "./pages/admin/admin.jsx";
import WaiterPage from "./pages/waiter/waiter.jsx";
import KitchenPage from "./pages/kitchen/kitchen.jsx";
import LoginPage from "./pages/login/login.jsx";
import HomePage from "./pages/customer/home/home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/locations",
        element: <LocationsPage />,
      },
      {
        path: "/offers",
        element: <OffersPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/waiter",
    element: <WaiterPage />,
  },
  {
    path: "/kitchen",
    element: <KitchenPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
