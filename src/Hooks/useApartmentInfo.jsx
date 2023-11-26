import { useEffect } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useApartmentInfo = (e) => {
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