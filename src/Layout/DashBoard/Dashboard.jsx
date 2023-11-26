import { NavLink, Outlet } from "react-router-dom";
import '../../App.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Dashboard = () => {
    const axiosPublic = useAxiosPublic()
    const [userRole, setUserRole] =useState({})
    const {user} =useContext(AuthContext)
    useEffect(()=>{
    axiosPublic.get(`/users/${user?.email}`)
    .then(res=> setUserRole(res.data.role))
    })
    

    const active = 'btn font-bold bg-[#00a9a5] border-2  w-full border-[#ffffff] text-[#ffffff] rounded-lg hover:bg-[#0b5351]  hover:border-[#ffffff]'
    const inActive = 'btn shadow-none bg-[#00a9a5] border-2 border-white text-white font-bold  w-full hover:border-[#00a9a5] border-transparent rounded-lg hover:bg-[#00a9a5] hover:border-[#ffffff] hover:text-[#ffffff]'

    const navLinks = < div className="z100 lg:flex flex-col items-start gap-1 space-y-1">
      <NavLink className={({ isActive, isPending,  }) =>isPending ? "pending" : isActive ? active : inActive} to="/">Home</NavLink>
      {userRole == 'admin' && 
      <>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/adminHome">Admin Home</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/manageMembers">Manage Members</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/makeAnnouncement">Make Announcement</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/agreementRequest">Agreement Request</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/manageCoupons">Manage Coupons</NavLink>
      </>
      }
      {userRole !== 'admin' && 
      <>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/userHome">User Home</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/announcements">Announcements</NavLink>
      </>
      }
      {userRole == 'member' && 
      <>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/payment">Payment</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/paymentHistory">Payment History</NavLink>
      </>
      }


      </div>

    return (
        <div>
            <div className="drawer ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btnLandLord btn text-white drawer-button">Menu</label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="bg-[#00a9a5]  menu p-4 w-40 md:w-80 min-h-full  text-base-content">
                {/* Sidebar content here */}
                {navLinks}
                
                </ul>
            </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;