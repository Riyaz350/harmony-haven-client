import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserInfo = () => {
    const axiosSecure = useAxiosSecure()

    const {data: user ={}, isPending:userLoading} =useQuery({
        queryKey:['user'],
        queryFn: async()=>{
                const res = await axiosSecure.get('/users')
                return res.data
        }
    })
    return [user, userLoading]
};

export default useUserInfo;