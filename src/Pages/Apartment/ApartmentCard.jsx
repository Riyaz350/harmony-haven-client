import { motion } from 'framer-motion';
import { IoWaterOutline } from "react-icons/io5";
import { FaFireBurner } from "react-icons/fa6";
import { TiLightbulb } from "react-icons/ti";
import { GiComputerFan } from "react-icons/gi";
import { MdBalcony, MdFireplace } from "react-icons/md";






const ApartmentCard = ({apartment}) => {

    const{id, apartmentImage, floorNo, blockName, apartmentNo, rent, balcony, water, gas, electricity, security, airCondition, heater, waterHeater} = apartment

    const fadeFromLeft = {
        initial:{ opacity: 0, x: -200 },
        animate: { opacity: 3, x: 0 } 
    }

    const fadeinAnimate = {
        initial:{opacity: 0, scale:0},
        animate: {opacity:1, scale:1 } 
    }
    return (
        <div>
            <div>
            <div className=" max-w-7xl mx-auto bg-[#092327] rounded-xl text-white">
            <div className="hero-content lg:flex flex-col items-start lg:items-center lg:justify-between  lg:flex-row-reverse ">
               <div> <motion.img variants={fadeFromLeft} initial='initial' whileInView='animate' transition={{ duration: 1 }}  src="https://i.ibb.co/RTjR6yM/modern-residential-building.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" /></div>
               <div className=''>
                <div>

                <h1 className="text-xl lg:text-3xl font-bold ">Apartment NO: {apartmentNo}</h1>
                <p className="py-6 text-lg lg:text-xl">Floor: <span className='bg-[#00a9a5] p-2 rounded-full'>{floorNo}</span></p>
                <p className="py-6 text-lg lg:text-xl">Block: <span className='bg-[#00a9a5] p-2 rounded-full'>{blockName}</span></p>
                <p className="py-6 text-lg lg:text-xl">Rent: <span className='bg-[#00a9a5] p-2 rounded-full'>{rent}</span></p>
                </div>
                <div className='space-y-2 mb-5'>
                    <h1 className='text-2xl'>Other Facilities</h1>
                    <div className='flex gap-5'>
                    {balcony? <motion.div  variants={fadeinAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}}    className='bg-[#00a9a5] w-fit text-xl lg:text-3xl p-2 rounded-full' ><MdBalcony /></motion.div>: <></>}
                    {water? <motion.div  variants={fadeinAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}} className='bg-[#00a9a5] w-fit text-xl lg:text-3xl p-2 rounded-full' ><IoWaterOutline /></motion.div>: <></>}
                    {gas? <motion.div  variants={fadeinAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}} className='bg-[#00a9a5] w-fit text-xl lg:text-3xl p-2 rounded-full' > <FaFireBurner /> </motion.div>: <></>}
                    {electricity? <motion.div  variants={fadeinAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}} className='bg-[#00a9a5] w-fit text-xl lg:text-3xl p-2 rounded-full' ><TiLightbulb /></motion.div>: <></>}
                    {airCondition? <motion.div  variants={fadeinAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}} className='bg-[#00a9a5] w-fit text-xl lg:text-3xl p-2 rounded-full' ><GiComputerFan /></motion.div>: <></>}
                    {heater? <motion.div  variants={fadeinAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}} className='bg-[#00a9a5] w-fit text-xl lg:text-3xl p-2 rounded-full' ><MdFireplace /></motion.div>: <></>}
                    </div>
                </div>
                <div>
                    <button className='btn bg-[#00a9a5] hover:bg-white hover:text-[#00a9a5] text-white font-bold'>Agreement</button>
                </div>
                </div>
                
            </div>
            </div>
            </div>
        </div>
    );
};

export default ApartmentCard;