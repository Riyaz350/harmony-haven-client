import SubTitle from "../../../../../Hooks/SubTitle";
import { motion } from 'framer-motion';
import useApartmentInfo from "../../../../../Hooks/useApartmentInfo";
import useUserInfo from "../../../../../Hooks/useUserInfo";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";


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
    const members = users.filter(user => user.role == 'member')


    return (
        <div className="max-w-7xl mx-auto   relative">
            <SubTitle className="" title='About Us'></SubTitle>
           <div className="">
           <motion.div initial={{x: -50}} animate={{x:0}} transition={{duration:1}} className="flex justify-end">
                <img className="" src="https://i.ibb.co/Jmd93dF/modern-residential-building-removebg-preview.png" alt="" />
            </motion.div>
            <div className=" absolute w-full h-full top-10 bg-gradient-to-r from-white to-transparent via-white">
                <div>
                    <h1></h1>
                </div>
                    <div className="grid grid-cols-6 text-black  justify-start gap-10 flex-row w-3/4 lg:w-full lg:my-10 mx-auto   font-bold  ">
                        <div className="col-span-1 justify-between flex flex-col">
                        <div className=" m-0 text-center">
                            <div  className="text-xl md:text-2xl lg:text-7xl" ref={ref}> {isVisible && <CountUp end={20} duration={2.5} />}+</div>
                            {/* <p>+</p> */}
                            <h2 className="text-xs lg:text-xl">Years of Reputation</h2>
                        </div>
                        <div className=" m-0 text-center">
                            <p className="text-xl md:text-2xl lg:text-7xl" ref={ref}>{isVisible && <CountUp end={apartments.length} duration={2.5} />}</p>
                            <h2 className="text-xs lg:text-xl">Total Number Of Rooms</h2>
                        </div>
                        </div>
                        <div className="col-span-1 justify-between flex flex-col">
                        <div className="m-0 text-center">
                            <p className="text-xl md:text-2xl lg:text-7xl" ref={ref}>{isVisible &&<CountUp end={members.length} duration={2.5} />}</p>
                            <h2 className="text-xs lg:text-xl">Total Residents</h2>
                        </div>
                        <div className="m-0 text-center">
                            <p className="text-xl md:text-2xl lg:text-7xl" ref={ref}>{isVisible && <CountUp end={apartments.length - members.length} duration={2.5} />}</p>
                            <h2 className="text-xs lg:text-xl">Total Available Rooms</h2>
                        </div>
                        </div>
                    </div>
            </div>
           </div>
        </div>
    );
};

export default AboutUs;