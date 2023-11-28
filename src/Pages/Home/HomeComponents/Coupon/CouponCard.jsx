import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from "react-icons/fa";
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const fadeinAnimate = {
    initial:{opacity: 0, scale:0.8},
    animate: {opacity:1, scale:1 } 
}

const CouponCard = ({coupon}) => {
    const {name, description} = coupon

    const handleCopy = () =>{
        let timerInterval;
        Swal.fire({
        title: "Coupon Code Copied",
        timer: 1000,
        icon: "success",
        timerProgressBar: true,
        
        willClose: () => {
        clearInterval(timerInterval);
  }
})
            
    }


    return (
        <motion.div  variants={fadeinAnimate} initial='initial' whileInView='animate'  transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}}  className="h-full flex flex-col w-3/4 rounded-xl bg-[#00a9a5] text-white p-2" >


            <div className=' text-3xl bg-[#0b5351] p-1 px-2 rounded-xl flex justify-between'>
            <h1>{name}</h1>
            <CopyToClipboard text={name}>
                <button onClick={handleCopy}><FaCopy /></button>
            </CopyToClipboard>
            </div>
            <h1 className='text-xl'>{description}</h1>
        </motion.div>
    );
};

export default CouponCard;