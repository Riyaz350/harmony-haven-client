import Swal from 'sweetalert2';
import '../../../../../App.css'
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import useCouponInfo from '../../../../../Hooks/useCouponInfo';
const ManageCouponCard = ({coupon}) => {
    const [,,refetch] = useCouponInfo()
    const {_id, name, description, available} =coupon
    const axiosSecure = useAxiosSecure()

    const handleAvailability = () =>{
        const data = !available
        axiosSecure.patch( `/coupons/${_id}`, {data})
        .then(res =>{
            if(res.data.modifiedCount>0){
                Swal.fire({position: "top-end", icon: "success", title: "Availability Changed", showConfirmButton: false, timer: 1500});
                refetch()
            }
        })
    }
    
    return (


        <>
            <tr className="border-2 border-black  rounded-lg ">
            <th>{name}</th>
            <th>{description}</th>
            <th>{available? 'Available': 'Unavailable'}</th>
            <th>{available? 
                <button onClick={handleAvailability} className='btn btnLandLord text-white'>Make Unavailable</button>  :
                <button onClick={handleAvailability} className='btn btnLandLord text-white'>Make Available</button>  
            }</th>
            </tr></>







        // <div  className="h-full flex flex-col justify-between items-center lg:w-3/4   rounded-xl bg-[#00a9a5] text-white p-2" >


        //     <div className=' text-3xl bg-[#0b5351] p-1 px-2 rounded-xl flex justify-between'>
        //     <h1>{name}</h1>
        //     </div>
        //     <h1 className='text-xl'>{description}</h1>
        //     <h1 className='text-xl bg-white text-[#00a9a5] w-fit p-2 rounded-lg mt-2'>{available? 'available' : 'notAvailable'}</h1>

        //     <div>
            //     {available? 
            //     <button onClick={handleAvailability} className='btn btnLandLord text-white'>Make Unavailable</button>  :
            //     <button onClick={handleAvailability} className='btn btnLandLord text-white'>Make Available</button>  
            // }
        //     </div>
        // </div>
    );
};

export default ManageCouponCard;