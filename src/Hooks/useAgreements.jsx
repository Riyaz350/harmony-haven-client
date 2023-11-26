import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAgreements = () => {
    const axiosSecure = useAxiosSecure()

    const {data: agreements=[], refetch, isPending:agreementLoading} =useQuery({
        queryKey:['agreement'],
        queryFn: async()=>{
                const res = await axiosSecure.get(`/agreements?status=pending`)
                return res.data
        }
    })
    return [agreements, refetch, agreementLoading]
};

export default useAgreements;