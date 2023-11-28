import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useCouponInfo from "../../../../../Hooks/useCouponInfo";
import CouponCard from "../../../../../Pages/Home/HomeComponents/Coupon/CouponCard";
import ManageCouponCard from "./ManageCouponCard";

const ManageCoupons = () => {
    const  [coupons, couponLoading] = useCouponInfo()
    const axiosSecure = useAxiosSecure()

    const handleCoupons = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.title.value
        const description = form.message.value
        const available = true
        const newCoupon = {name, description, available}
        axiosSecure.post('/coupons', newCoupon)
        .then(res=>{
            if(res.status == 200){
                Swal.fire({position: "top-end", icon: "success", title: "Coupon Published", showConfirmButton: false, timer: 1500});
                e.target.reset()
            }
        })
    }


    return (
       <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-col w-1/2 gap-10 justify-center items-start">
            <h1 className="text-white font-bold  text-center bg-[#00a9a5] p-6 rounded-full ">Make A Coupon</h1>
            <form onSubmit={handleCoupons} className='space-y-4'>
                <h1 className="text-red-500 font-bold text-lg">Write the percentage of discount in front of the coupon like this =10coupon</h1>
                <input name="title" type="text" className="border-b-2 border-black w-fit h-20" placeholder="Example '10coupon'" />
                <textarea name="message" placeholder="Describe the coupon" className="textarea textarea-bordered textarea-lg w-full max-w-lg" ></textarea>
                <button className='btnLandLord btn text-white'>Publish</button>
            </form>
            </div>

            <div className="md:grid grid-cols-3 max-w-6xl gap-6 space-y-5 md:space-y-0">
                {
                    coupons.map(coupon => <ManageCouponCard key={coupon._id} coupon={coupon}></ManageCouponCard>)
                }
            </div>

        </div>
    );
};

export default ManageCoupons;