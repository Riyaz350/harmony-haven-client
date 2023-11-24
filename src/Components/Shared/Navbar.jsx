import { NavLink } from "react-router-dom";


const Navbar = () => {

    const active = 'btn font-bold bg-[#00a9a5] border-2 lg:w-auto w-full border-[#ffffff] text-[#ffffff] rounded-lg hover:bg-[#0b5351]  hover:border-[#ffffff]'
    const inActive = 'btn shadow-none bg-transparent border-2 border-transparent text-white font-bold lg:w-auto w-full hover:border-[#00a9a5] border-transparent rounded-lg hover:bg-[#00a9a5] hover:border-[#ffffff] hover:text-[#ffffff]'

    const user = true;

    const navLinks = < div className=" lg:flex items-center gap-6 space-y-1">
      <NavLink className={({ isActive, isPending,  }) =>isPending ? "pending" : isActive ? active : inActive} to="/">Home</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/apartments">Apartment</NavLink>
      {user? <>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/createAssignments">User</NavLink>
      </>: 
      <div>
          <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/createAssignments">Log In</NavLink>

      </div>

        }
       </div>
      


    return (
        <div>
            <div className="navbar bg-black bg-opacity-30 fixed z-10 bg-transparent">

                
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu bg-black bg-opacity-50 menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                    {navLinks}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>



            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;