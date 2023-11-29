import { useQuery } from '@tanstack/react-query';

import useAxiosPublic from './useAxiosPublic';

const useCouponInfo = () => {
    const axiosPublic = useAxiosPublic()
    const {data: coupons=[], isPending: couponLoading, refetch} =useQuery({
        queryKey: [ 'coupons'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/coupons`)
            return res.data
        }
    })
    return [coupons, couponLoading, refetch]
};

export default useCouponInfo;