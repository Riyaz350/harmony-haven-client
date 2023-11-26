import { motion } from 'framer-motion';
import '../../../../../App.css'
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const AgreementsRow = ({agreement}) => {
    const axiosSecure = useAxiosSecure()
    const{apartmentId, name, email, submissionTime, apartmentImage,status,room,  floorNo, blockName, apartmentNo, rent, balcony, water, gas, electricity, security, airCondition, heater, waterHeater} = agreement

    const handleApprove = () =>{
        axiosSecure.patch(`/apartments/${apartmentId}`, {status: 'booked'})
        .then(res=>console.log(res))
    }
    const handleReject = () =>{
        axiosSecure.patch(`/apartments/${apartmentId}`, {status: 'notBooked'})
        .then(res=> console.log(res))
    }

    return (
        <tr className="border-2 border-black  rounded-lg ">
        <th>{name}</th>
        <th>{email}</th>
        <th>{floorNo}</th>
        <th>{blockName}</th>
        <th>{room}</th>
        <th>{rent}</th>
        <th>{submissionTime}</th>
        <th><motion.button  whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="btn btnLandLord text-white" onClick={handleApprove}>Approve</motion.button></th>
        <th><motion.button  whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="btn btnLandLord text-white" onClick={handleReject}>Reject</motion.button></th>
        </tr>
    );
};

export default AgreementsRow;