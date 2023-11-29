import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useApartmentInfo = (current, apartmentsPerPage) => {
    const axiosPublic = useAxiosPublic()
    const {data: apartments=[], isPending: apartmentLoading, refetch} =useQuery({
        queryKey: [current, apartmentsPerPage, 'apartments'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/apartments?page=${current}&size=${apartmentsPerPage}`)
            return res.data
        }
    })
    return [apartments, apartmentLoading, refetch]
};

export default useApartmentInfo;