import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from "react-icons/fa";
import Swal from 'sweetalert2';


const CouponCard = ({coupon}) => {
    const {couponCode, description} = coupon

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
        <div  className="flex flex-col w-3/4 rounded-xl bg-[#00a9a5] text-white p-2" >


            <div className='text-3xl bg-[#0b5351] p-1 px-2 rounded-xl flex justify-between'>
            <h1>{couponCode}</h1>
            <CopyToClipboard text={couponCode}>
                <button onClick={handleCopy}><FaCopy /></button>
            </CopyToClipboard>
            </div>
            <h1 className='text-xl'>{description}</h1>
        </div>
    );
};

export default CouponCard;