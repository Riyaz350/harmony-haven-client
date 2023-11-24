import About from "./HomeComponents/About";
import Coupon from "./HomeComponents/Coupon/Coupon";
import Location from "./HomeComponents/Location/Location";
import Slider from "./HomeComponents/Slider";

const user = true

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            {user? <Coupon></Coupon> : <></>}
            <Location></Location>

        </div>
    );
};

export default Home;