import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Main/Home/Home"
import Apartment from "../Layout/Main/Apartment/Apartment";
import Dashboard from "../Layout/DashBoard/Dashboard";
import UserDashboard from "../Layout/DashBoard/DashboardItems/UserDashboard/UserDashboard";
import Announcements from "../Layout/DashBoard/DashboardItems/Announcements/Announcements";
import Payment from "../Layout/DashBoard/DashboardItems/Payment/Payment";
import PaymentHistory from "../Layout/DashBoard/DashboardItems/PaymentHistory/PaymentHistory";
import AdminHome from "../Layout/DashBoard/DashboardItems/Admin/AdminHome/AdminHome";
import ManageMembers from "../Layout/DashBoard/DashboardItems/Admin/ManageMembers/ManageMembers";
import MakeAnnouncement from "../Layout/DashBoard/DashboardItems/Admin/MakeAnnouncement/MakeAnnouncement";
import AgreementRequest from "../Layout/DashBoard/DashboardItems/Admin/AgreementRequest/AgreementRequest";
import ManageCoupons from "../Layout/DashBoard/DashboardItems/Admin/ManageCoupons/ManageCoupons";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Pay from "../Layout/DashBoard/DashboardItems/Payment/Pay";
import PrivateRoute from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

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
        },
        {
          path:'/logIn',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[


        // User & Member Routes


        {
          path:'userHome',
          element:<PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>
        },
        {
          path:'announcements',
          element:<PrivateRoute><Announcements></Announcements></PrivateRoute>
        },


        // Member only routes

        {
          path:'pay',
          element:<PrivateRoute><Pay></Pay></PrivateRoute>
        },
        {
          path:'payment',
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
        },
        {
          path:'paymentHistory',
          element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        },


        // Admin only routes


        {
          path:'adminHome',
          element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path:'manageMembers',
          element:<AdminRoutes><ManageMembers></ManageMembers></AdminRoutes>
        },
        {
          path:'makeAnnouncement',
          element:<AdminRoutes><MakeAnnouncement></MakeAnnouncement></AdminRoutes>
        },
        {
          path:'agreementRequest',
          element:<AdminRoutes><AgreementRequest></AgreementRequest></AdminRoutes>
        },
        {
          path:'manageCoupons',
          element:<AdminRoutes><ManageCoupons></ManageCoupons></AdminRoutes>

        }
      ]
    }
  ]);

export default Routes;