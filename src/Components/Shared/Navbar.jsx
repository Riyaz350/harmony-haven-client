import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import '../../App.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useUserRole from "../../Hooks/useUserRole";



const Navbar = () => {

    const {user, logOut} =useContext(AuthContext)
    const [userRole] =useUserRole()
        const active = 'btn shadow-none font-bold bg-transparent rounded-none  border-0 lg:w-auto w-full border-[#ffffff] text-[#e94f37]  hover:bg-transparent  border-b-[#e94f37] hover:border-b-[#e94f37] hover:border-b-2 border-b-2 border-transparent'
        const inActive = 'btn shadow-none font-bold bg-transparent rounded-none  border-0 lg:w-auto w-full border-[#ffffff] text-[#ffffff]  hover:bg-transparent  hover:border-b-[#e94f37] hover:border-b-2 border-b-2 border-transparent'


    const navLinks = < div className=" lg:flex items-center gap-6 space-y-1">
      <NavLink className={({ isActive, isPending,  }) =>isPending ? "pending" : isActive ? active : inActive} to="/">Home</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/apartments">Apartment</NavLink>
      </div>

      const handleLogOut = () =>{
        logOut()
      }
      


    return (
        <div>
            <div className="navbar bg-black z-10 ">

                
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu bg-[#000000] text-white text-base font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                    {navLinks}
                </ul>
                </div>
                <div><img src="https://i.ibb.co/BL7SFJf/harmony-haven-high-resolution-logo-transparent-3.png" className=" w-3/4 md:w-1/5" alt="" /></div>
            </div>



            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {!user?
                <Link to='/logIn' className="btn bg-[#000000] hover:bg-white hover:text-[#000000] text-white font-bold">Log In</Link>:
                <>
                <details className="dropdown dropdown-bottom dropdown-end">
                    <summary className="m-2 btn p-0 rounded-full bg-transparent border-0 hover:border-0 hover:bg-transparent" >{user.photoURL? <img className="w-14 rounded-full" src={user.photoURL}></img> :<div className="m-1 btn bg-[#000000] rounded-full hover:text-[#000000] hover:bg-white"><FaRegUser  /></div>} </summary>
                    <ul className="text-base text-white font-semibold dropdown-content z-[1] menu p-2 shadow bg-[#000000] rounded-box w-52">
                        <li className="btnLandLord"><Link>{user.displayName}</Link></li>
                        <li className="btnLandLord"><Link to={userRole == 'admin'? '/dashboard/adminHome' :'/dashboard/userHome' }>Dashboard</Link></li>
                        <li className="btnLandLord"><button onClick={handleLogOut}>Log Out</button></li>
                    </ul>
                </details>

                </>
                }
            </div>
            </div>
        </div>
    );
};

export default Navbar;