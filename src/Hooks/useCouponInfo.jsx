import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCouponInfo = () => {
    const axiosSecure = useAxiosSecure()
    const {data: coupons=[], isPending: couponLoading, refetch} =useQuery({
        queryKey: [ 'coupons'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/coupons`)
            return res.data
        }
    })
    return [coupons, couponLoading, refetch]
};

export default useCouponInfo;