import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
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
          element:<UserDashboard></UserDashboard>
        },
        {
          path:'announcements',
          element:<Announcements></Announcements>
        },


        // Member only routes


        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },


        // Admin only routes


        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'manageMembers',
          element:<ManageMembers></ManageMembers>
        },
        {
          path:'makeAnnouncement',
          element:<MakeAnnouncement></MakeAnnouncement>
        },
        {
          path:'agreementRequest',
          element:<AgreementRequest></AgreementRequest>
        },
        {
          path:'manageCoupons',
          element:<ManageCoupons></ManageCoupons>

        }
      ]
    }
  ]);

export default Routes;