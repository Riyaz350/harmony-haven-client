import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import useUserInfo from '../../../../../Hooks/useUserInfo';
import useAxiosPublic from '../../../../../Hooks/useAxiosPublic';

const ManageMemberRow = ({user}) => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [,,refetch] =useUserInfo()
    const {_id, name, email, owned} = user
    const handleApprove = ()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete this member!"
          }).then((result) => {
            if (result.isConfirmed) {

              //   Reoccupying apartment
              const apartmentIds = owned.join(',');

              axiosPublic.patch(`/apartmentos?ids=${apartmentIds}`)
              .then(res=> console.log(res))




            // axiosSecure.patch(`/apartments/${_id}`, {status: 'notBooked'})
            // .then()



              // removing apartment ids
              axiosSecure.patch(`/user/${email}` , {owned: []})
              .then(()=>{

              })

              
                
              // demoting member
              axiosSecure.patch(`/users/${email}` , {role: 'user'})
              .then(res=>{
                if(res.data.modifiedCount){
                  Swal.fire({
                    title: "Deleted!",
                    text: `${name} has been demoted to User & his apartment is ready to be rented.`,
                    icon: "success"
                  });
                  refetch()
                }
              })
            }
          });
    }


    return (
        <tr className="border-2 border-black  rounded-lg ">
        <th>{name}</th>
        <th>{email}</th>
        
        <th><motion.button  whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="btn btnLandLord text-white" onClick={handleApprove}>Remove</motion.button></th>
        </tr>
    );
};

export default ManageMemberRow;