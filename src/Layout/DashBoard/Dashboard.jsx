import { NavLink, Outlet } from "react-router-dom";
import '../../App.css'
import useUserRole from "../../Hooks/useUserRole";
import { BsMenuButtonWideFill } from "react-icons/bs";


const Dashboard = () => {

    
    const [userRole] = useUserRole()

    const active = 'btn font-bold bg-[#000000] border-2  w-full border-[#ffffff] text-[#ffffff] rounded-lg hover:bg-[#0b5351]  hover:border-[#ffffff]'
    const inActive = 'btn shadow-none bg-[#000000] border-2 border-white text-white font-bold  w-full hover:border-[#000000] border-transparent rounded-lg hover:bg-[#000000] hover:border-[#ffffff] hover:text-[#ffffff]'

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
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/pay">Payment</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/paymentHistory">Payment History</NavLink>
      </>
      }


      </div>

    return (
        <div>
            <div className="drawer  absolute">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className=" btn bg-white border-0 lg:p-1 hover:bg-transparent hover:text-white font-bold text-3xl text-[#000000] drawer-button"><BsMenuButtonWideFill /></label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="bg-[#000000]  menu p-4 w-40 md:w-80 min-h-full  text-base-content">
                {/* Sidebar content here */}
                {navLinks}
                
                </ul>
            </div>
            </div>
            <div className="">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;