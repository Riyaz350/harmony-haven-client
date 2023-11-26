import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const ManageUserRow = ({user}) => {
    const {name, email} = user
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
              Swal.fire({
                title: "Deleted!",
                text: `${name} has been demoted to User.`,
                icon: "success"
              });
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

export default ManageUserRow;