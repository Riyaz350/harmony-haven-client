import { useContext } from "react";
import About from "./HomeComponents/About";
import Coupon from "./HomeComponents/Coupon/Coupon";
import Location from "./HomeComponents/Location/Location";
import Slider from "./HomeComponents/Slider";
import { AuthContext } from "../../../Provider/AuthProvider";


const Home = () => {
    const {user, loading} =useContext(AuthContext)
    return (
        <div className="overflow-hidden">
            <Slider></Slider>
            <About></About>
            {user && <Coupon></Coupon>}
            <Location></Location>

        </div>
    );
};

export default Home;