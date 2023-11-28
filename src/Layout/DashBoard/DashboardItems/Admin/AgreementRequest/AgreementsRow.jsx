import { motion } from 'framer-motion';
import '../../../../../App.css'
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import useAgreements from '../../../../../Hooks/useAgreements';
import Swal from 'sweetalert2';
import useUserInfo from '../../../../../Hooks/useUserInfo';
import { dateTime } from '../../../../../Utility/utilities';

const AgreementsRow = ({agreement}) => {
    const [,,refetch] =useUserInfo()
    const toDate = new Date()
    const [,refetchAgreements, loading] =useAgreements()
    const axiosSecure = useAxiosSecure()
    const{_id,userId, apartmentId, name, email, submissionTime, apartmentImage,status,room,  floorNo, blockName, apartmentNo, rent, balcony, water, gas, electricity, security, airCondition, heater, waterHeater} = agreement

    const handleApprove = () =>{
        const submissionTime = dateTime(toDate)

        axiosSecure.patch(`/apartments/${apartmentId}`, {status: 'booked'})
        .then(res=>{
            Swal.fire({position: "top-end", icon: "success", title: "Request Approved", showConfirmButton: false, timer: 1500});
            refetchAgreements()
        })

        axiosSecure.patch(`/users/${email}` ,  {role: 'member'} )
        .then(()=>{
            refetch()
        })
        axiosSecure.patch(`/owner/${email}` ,{owned: apartmentId, acceptedAgreement:{_id}} )
        .then(()=>{
            refetch()
        })
        
        axiosSecure.patch(`/agreements/${_id}`, {submissionTime, status:'booked'})
        .then()

    }
    const handleReject = () =>{
        axiosSecure.delete(`/agreements/${_id}`)
        .then(res=>{
            if(res.data.deletedCount>0){
                Swal.fire({position: "top-end", icon: "success", title: "Request Rejected", showConfirmButton: false, timer: 1500});
                refetchAgreements()
            }
        })
        axiosSecure.patch(`/apartments/${apartmentId}`, {status: 'notBooked'})
        .then(()=>{

        } )

    }
   
        return (
            
           <>
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
            </tr></>
        );

    
};

export default AgreementsRow;