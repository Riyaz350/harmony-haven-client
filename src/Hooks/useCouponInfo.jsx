import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCouponInfo = () => {
    const axiosPublic = useAxiosPublic()
    const {data: coupons=[], isPending: couponLoading} =useQuery({
        queryKey: [ 'coupons'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`Coupons.json`)
            return res.data
        }
    })
    return [coupons, couponLoading]
};

export default useCouponInfo;