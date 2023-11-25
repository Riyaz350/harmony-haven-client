import { NavLink } from "react-router-dom";
import '../../App.css'

const Dashboard = () => {

    const active = 'btn font-bold bg-[#00a9a5] border-2  w-full border-[#ffffff] text-[#ffffff] rounded-lg hover:bg-[#0b5351]  hover:border-[#ffffff]'
    const inActive = 'btn shadow-none bg-transparent border-2 border-white text-white font-bold  w-full hover:border-[#00a9a5] border-transparent rounded-lg hover:bg-[#00a9a5] hover:border-[#ffffff] hover:text-[#ffffff]'

    const navLinks = < div className=" lg:flex flex-col items-start gap-1 space-y-1">
      <NavLink className={({ isActive, isPending,  }) =>isPending ? "pending" : isActive ? active : inActive} to="/">Home</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/apartments">Apartment</NavLink>
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
        </div>
    );
};

export default Dashboard;