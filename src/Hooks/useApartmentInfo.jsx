import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useApartmentInfo = () => {
    const axiosPublic = useAxiosPublic()
    const {data: apartments=[], isPending: apartmentLoading, refetch} =useQuery({
        queryKey: [ 'apartments'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/apartments`)
            return res.data
        }
    })
    return [apartments, apartmentLoading, refetch]
};

export default useApartmentInfo;