import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAgreements = () => {
    const axiosSecure = useAxiosSecure()

    const {data: agreements=[], isPending:agreementLoading, refetch} =useQuery({
        queryKey:['agreement'],
        queryFn: async()=>{
                const res = await axiosSecure.get('/agreements')
                return res.data
        }
    })
    return [agreements, agreementLoading, refetch]
};

export default useAgreements;