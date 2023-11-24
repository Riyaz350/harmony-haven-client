import Subtitle from '../../../../Hooks/SubTitle'
import useCouponInfo from '../../../../Hooks/useCouponInfo';
import CouponCard from './CouponCard';

const Coupon = () => {

    const coupons = useCouponInfo() 


    return (
        <div className='max-w-7xl mx-auto flex flex-col items-center'>
            <Subtitle  title='Coupons' subTitle='For Members Only'></Subtitle>
            <img src="https://i.ibb.co/JFPYHdG/Animation-1700815315423.gif" alt="" />


        <div className='flex flex-col justify-center items-center lg:grid grid-cols-3 gap-3'>
            {
                coupons[0].map(coupon => <CouponCard key={coupon.id} coupon={coupon}></CouponCard>)
            }
        </div>

        </div>
    );
};

export default Coupon;