import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { FaFireBurner } from "react-icons/fa6";
import { TiLightbulb } from "react-icons/ti";
import { GiComputerFan } from "react-icons/gi";
import { MdBalcony, MdFireplace } from "react-icons/md";
import { motion } from 'framer-motion';

import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { dateTime } from "../../../Utility/utilities";
import useApartmentInfo from '../../../Hooks/useApartmentInfo';
import Swal from 'sweetalert2';
import useUserRole from '../../../Hooks/useUserRole'



const ApartmentCard = ({apartment, index}) => {
    const toDate = new Date()
    const {user} = useContext(AuthContext)
    const{_id, apartmentImage,status, floorNo, room, blockName, apartmentNo, rent, balcony, water, gas, electricity, security, airCondition, heater, waterHeater} = apartment
    const axiosSecure =useAxiosSecure()
    const [userRole] = useUserRole()
    const [,,refetch] =useApartmentInfo()

    const specClass = 'bg-white text-black p-2 rounded-lg'
    const faciClass = 'bg-white text-black p-2 rounded-lg w-fit text-xl lg:text-3xl p-2'

    // ANIMATIONS
    const fadeFromLeft = {
        initial:{ opacity: 0, x: -200 },
        animate: { opacity: 3, x: 0 } 
    }

    const fadeInAnimate = {
        initial:{opacity: 0, scale:0.7},
        animate: {opacity:1, scale:1 } 
    }

    const handleAgreement = () =>{
       if(userRole !== 'admin'){
        const submissionTime = dateTime(toDate)
        const userInfo ={apartmentId:_id, acceptedTime:'', name: user?.displayName, email:user?.email, floorNo, blockName, room, apartmentNo, rent, submissionTime, status:'pending' }
        axiosSecure.post(`/agreements`, userInfo)
        .then(res => {
            if(res.status == 200){
                refetch()
            }
        })
        axiosSecure.patch(`/apartments/${_id}`, {status: 'pending'})
        .then(res=> {
            if(res.status == 200){
                Swal.fire({position: "top-end", icon: "success", title: "Waiting for approval", showConfirmButton: false, timer: 1500});
                refetch()
            }
        })
       }else{
        Swal.fire({position: "top-end", icon: "error", title: "Only a user or Member can sign an agreement", showConfirmButton: false, timer: 1500});
       }
        
    }

    const handleError =()=>{
        Swal.fire({position: "top-end", icon: "error", title: "You already own an apartment,", text:'Multiple apartment owning will be available soon', showConfirmButton: false, timer: 1500});
    }

    const handleUnavailable =()=>{
        Swal.fire({position: "top-end", icon: "error", title: "This apartment is booked already", showConfirmButton: false, timer: 1500});
    }

    const handleAdminError = () =>{
        Swal.fire({position: "top-end", icon: "error", title: "Only a user can sign an agreement", text:'Sign in as user to book an apartment', showConfirmButton: false, timer: 1500});
    }

    const images = [
        'https://i.ibb.co/Vw1n3nf/image.png',
        'https://i.ibb.co/Q9yB63j/image.png',
        'https://i.ibb.co/6rfvbCp/image.png',
        'https://i.ibb.co/YcDmLPr/image.png',
        'https://i.ibb.co/ZBTmQJs/image.png',
        'https://i.ibb.co/6rfvbCp/image.png',
        'https://i.ibb.co/YcDmLPr/image.png',
        'https://i.ibb.co/ZBTmQJs/image.png',
        'https://i.ibb.co/ZBTmQJs/image.png',
        'https://i.ibb.co/9wYqrMb/image.png'

    ]
    const iconClass = 'flex items-center gap-2 border-2 border-black border-opacity-30 p-1 rounded-lg'

    return (
        <motion.div initial={{scale:1}} whileHover={{scale:1.04}} className="cursor-pointer">
            <div className="card w-fit mx-auto   shadow-xl">
            <figure><img className="h-[120px]  lg:h-[250px]  lg:w-[350px] " src={images[index]} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title text-sm md:text-base lg:text-xl ">Block Name: {apartment?.blockName}</h2>
                <p>Apartment No: {apartment?.apartmentNo}</p>

                <div className="flex gap-10">
                    <h1><span className="font-medium ">Rent:  </span>{apartment.rent}</h1>
                    <h1><span className="font-medium">Rooms: </span>{apartment.room}</h1>
                </div>

                <div className='flex flex-wrap md:hidden '>
                    {balcony? <motion.div title='Balcony'  variants={fadeInAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}}    className={faciClass} ><MdBalcony /></motion.div>: <></>}
                    {water? <motion.div title='Water'  variants={fadeInAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}} className={faciClass} ><IoWaterOutline /></motion.div>: <></>}
                    {gas? <motion.div title='Gas' variants={fadeInAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}} className={faciClass} > <FaFireBurner /> </motion.div>: <></>}
                    {electricity? <motion.div title='Electricity' variants={fadeInAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}} className={faciClass} ><TiLightbulb /></motion.div>: <></>}
                    {airCondition? <motion.div title='Cooler' variants={fadeInAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}} className={faciClass} ><GiComputerFan /></motion.div>: <></>}
                    {heater? <motion.div title='Heater' variants={fadeInAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}} className={faciClass} ><MdFireplace /></motion.div>: <></>}
                </div>

                <div className='hidden md:grid grid-cols-3  gap-3 text-xs'>
                    <p className={iconClass}>Balcony:{balcony?  <><FaRegThumbsUp className="text-green-500" /></>: <><FaRegThumbsDown className="text-red-500" /></>}</p>
                    <p className={iconClass}>Water: {water?  <><FaRegThumbsUp className="text-green-500" /></>: <><FaRegThumbsDown className="text-red-500" /></>}</p>
                    <p className={iconClass}>Gas: {gas?  <><FaRegThumbsUp className="text-green-500" /></>: <><FaRegThumbsDown className="text-red-500" /></>}</p>
                    <p className={iconClass}>Electricity: {electricity?  <><FaRegThumbsUp className="text-green-500" /></>: <><FaRegThumbsDown className="text-red-500" /></>}</p>
                    <p className={iconClass}>AC: {airCondition?  <><FaRegThumbsUp className="text-green-500" /></>: <><FaRegThumbsDown className="text-red-500" /></>}</p>
                    <p className={iconClass}>Heater: {heater?  <><FaRegThumbsUp className="text-green-500" /></>: <><FaRegThumbsDown className="text-red-500" /></>}</p>
                </div>

                
                
                <div>
                    {userRole =='admin'? 
                    <div>
                        {status == 'booked'?
                    
                            <button onClick={handleAdminError}   className= 'btn bg-gray-400 hover:bg-gray-400  text-black font-bold'>Unavailable</button>             :
                        
                            <button onClick={handleAdminError}  className= 'btn bg-[#000000] hover:bg-white hover:text-[#000000] text-white font-bold'> <p>Available</p> </button>
                        }
                        </div>:
                <></>}
                    {userRole =='user'? 
                    <div>
                        {status == 'booked'?
                    
                    <button onClick={handleUnavailable}   className= 'btn bg-gray-400 hover:bg-gray-400  text-black font-bold'>Unavailable</button>             :
                
                    <button onClick={handleAgreement}  className= 'btn bg-[#000000] hover:bg-white hover:text-[#000000] text-white font-bold'> <p>Book Now</p> </button>
                }

                    {/* <button onClick={handleAgreement}  className= 'btn bg-[#000000] hover:bg-white hover:text-[#000000] text-white font-bold'> <p>Book Now</p> </button> */}
                </div>:
                <></>}
                    {userRole =='member'? 
                    <div>
                        <button onClick={handleError}   className= 'btn bg-gray-400 hover:bg-gray-400  text-black font-bold'>Unavailable</button>             </div>:
                <></>}
                </div>
            </div>
            </div>
        </motion.div>
    );
};

export default ApartmentCard;


            