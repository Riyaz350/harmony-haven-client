import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;