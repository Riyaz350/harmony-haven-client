import SubTitle from "../../../../../Hooks/SubTitle";
import { motion } from 'framer-motion';
import useApartmentInfo from "../../../../../Hooks/useApartmentInfo";
import useUserInfo from "../../../../../Hooks/useUserInfo";

const AboutUs = () => {
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
                            <p className="text-xl md:text-2xl lg:text-7xl">20+</p>
                            <h2 className="text-xs lg:text-xl">Years of Reputation</h2>
                        </div>
                        <div className=" m-0 text-center">
                            <p className="text-xl md:text-2xl lg:text-7xl">{apartments.length}</p>
                            <h2 className="text-xs lg:text-xl">Total Number Of Rooms</h2>
                        </div>
                        </div>
                        <div className="col-span-1 justify-between flex flex-col">
                        <div className="m-0 text-center">
                            <p className="text-xl md:text-2xl lg:text-7xl">{members.length}</p>
                            <h2 className="text-xs lg:text-xl">Total Residents</h2>
                        </div>
                        <div className="m-0 text-center">
                            <p className="text-xl md:text-2xl lg:text-7xl">{apartments.length - members.length}</p>
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