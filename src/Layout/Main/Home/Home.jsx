import { useContext } from "react";
import About from "./HomeComponents/About";
import Coupon from "./HomeComponents/Coupon/Coupon";
import Location from "./HomeComponents/Location/Location";
import Slider from "./HomeComponents/Slider";
import { AuthContext } from "../../../Provider/AuthProvider";
import Facilities from "./HomeComponents/Facilities/Facilities";
import Reviews from "./HomeComponents/Reviews/Reviews";
import AboutUs from "./HomeComponents/AboutUs/AboutUs";
import OurTeam from "./HomeComponents/OurTeam/OurTeam";
import Choose from "./HomeComponents/Choose/Choose";

const Home = () => {
    const {user} =useContext(AuthContext)
    return (
        <div className="overflow-hidden">
            
               <div> <Slider></Slider></div>
            {user && <Coupon></Coupon>}
            <Choose></Choose>
            <Facilities></Facilities>
            <About></About>
            <OurTeam></OurTeam>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            {/* <Faq></Faq> */}
            <Location></Location>

        </div>
    );
};

export default Home;