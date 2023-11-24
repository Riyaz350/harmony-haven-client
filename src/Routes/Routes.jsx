import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/apartments',
          element:<Apartment></Apartment>
        }
      ]
    },
  ]);

export default Routes;