import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAgreements = () => {
    const axiosSecure = useAxiosSecure()

    const {data: agreement ={}, isPending:agreementLoading} =useQuery({
        queryKey:['agreement'],
        queryFn: async()=>{
                const res = await axiosSecure.get('/agreements')
                return res.data
        }
    })
    return [agreement, agreementLoading]
};

export default useAgreements;