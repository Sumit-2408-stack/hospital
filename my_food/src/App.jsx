import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Doctor } from "./pages/Doctor";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout> </AppLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
    path:"/",
    element:<Home/>,
  },
{
path:"about",
    element:<About/>,
  },
{
  path:"doctor",
  element:<Doctor/>,
},
  {
    path:"contact",
    element:<Contact/>,
  }], 
}
]);


const App = () => {
  return <RouterProvider router = {router} >  </RouterProvider>
};

export default App;