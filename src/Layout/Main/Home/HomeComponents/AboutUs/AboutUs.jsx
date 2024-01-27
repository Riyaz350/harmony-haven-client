import SubTitle from "../../../../../Hooks/SubTitle";
import { motion } from 'framer-motion';
import useApartmentInfo from "../../../../../Hooks/useApartmentInfo";
import useUserInfo from "../../../../../Hooks/useUserInfo";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

    const [apartments] =useApartmentInfo()
    const [users] = useUserInfo()
    const members = users.filter(user => user?.role == 'member')


    return (
        <div className=" mx-auto  bg-cover relative bg-fixed bg-blend-overlay bg-black bg-opacity-50" style={{backgroundImage: 'url("https://i.ibb.co/6W78bjg/christian-lambert-hl-Op-CML8tw-I-unsplash-1.jpg")'}}>
                {/* <div className="text-white">
                <SubTitle className="" title='About Us'></SubTitle>
                </div> */}

            <div className="top-10 h-[400px]  md:flex  flex-col lg:flex-row items-center justify-center p-10">
                <div className="flex flex-col items-center lg:items-start text-white space-y-5">
                    <h1 className="text-xl lg:text-3xl">Living Spaces at a Glance</h1>
                    <h1 className="text-sm text-center lg:text-start lg:text-base w-4/5">Explore our diverse range of living spaces—thoughtfully designed rooms for every lifestyle, fostering a vibrant community with various members.</h1>
                    <NavLink className='mt-2 w-fit lg:mt-5 block p-1 lg:p-5 lg:text-xl text-xs border-2  border-white bg-white hover:text-[#e94f37] lg:w-fit  text-black ' to='/apartments'>Take A Peak</NavLink>                </div>

                <div className="flex my-5 justify-center text-white md:gap-10 gap-5  w-3/4 lg:w-full lg:my-10 mx-auto  font-bold  ">
                    <div className=" m-0 text-center">
                        <div  className="text-xl md:text-2xl lg:text-7xl" ref={ref}> {isVisible && <CountUp end={20} duration={2.5} />}+</div>
                        <h2 className="text-xs font-light lg:font-bold lg:text-xl">Years of Reputation</h2>
                    </div>
                    <div className=" m-0 text-center">
                        <p className="text-xl md:text-2xl lg:text-7xl" ref={ref}>{isVisible && <CountUp end={apartments.length} duration={2.5} />}</p>
                        <h2 className="text-xs font-light lg:font-bold lg:text-xl">Total Number Of Rooms</h2>
                    </div>
                    <div className="m-0 text-center">
                        <p className="text-xl md:text-2xl lg:text-7xl" ref={ref}>{isVisible &&<CountUp end={members.length} duration={2.5} />}</p>
                        <h2 className="text-xs font-light lg:font-bold lg:text-xl">Total Residents</h2>
                    </div>
                    <div className="m-0 text-center">
                        <p className="text-xl md:text-2xl lg:text-7xl" ref={ref}>{isVisible && <CountUp end={apartments.length - members.length} duration={2.5} />}</p>
                        <h2 className="text-xs font-light lg:font-bold lg:text-xl">Total Available Rooms</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;