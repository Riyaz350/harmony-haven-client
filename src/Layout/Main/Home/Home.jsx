import { useContext } from "react";
import About from "./HomeComponents/About";
import Coupon from "./HomeComponents/Coupon/Coupon";
import Location from "./HomeComponents/Location/Location";
import Slider from "./HomeComponents/Slider";
import { AuthContext } from "../../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import Facilities from "./HomeComponents/Facilities/Facilities";
import Reviews from "./HomeComponents/Reviews/Reviews";
import AboutUs from "./HomeComponents/AboutUs/AboutUs";


const Home = () => {
    const {user, loading} =useContext(AuthContext)
    return (
        <div className="overflow-hidden">
            
               <div> <Slider></Slider></div>
            <About></About>
            {user && <Coupon></Coupon>}
            <Facilities></Facilities>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            <Location></Location>

        </div>
    );
};

export default Home;