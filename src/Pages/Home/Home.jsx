import About from "./HomeComponents/About";
import Coupon from "./HomeComponents/Coupon";
import Slider from "./HomeComponents/Slider";

const user = true

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            {user? <Coupon></Coupon> : <></>}

        </div>
    );
};

export default Home;