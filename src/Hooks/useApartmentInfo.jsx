import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useApartmentInfo = () => {
    const axiosPublic = useAxiosPublic()
    const {data: coupons=[], isPending: apartmentLoading, refetch} =useQuery({
        queryKey: [ 'apartments'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/apartments`)
            return res.data
        }
    })
    return [coupons, apartmentLoading, refetch]
};

export default useApartmentInfo;