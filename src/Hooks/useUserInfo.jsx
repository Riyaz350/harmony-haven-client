import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUserRole from "./useUserRole";

const useUserInfo = () => {
    const axiosSecure = useAxiosSecure()

    const {data:users =[], isPending:userLoading, refetch} =useQuery({
        queryKey:['user'],
        queryFn: async()=>{
            
                const res = await axiosSecure.get('/users')
                return res.data
        }
    })
    console.log(users)
    return [users, userLoading, refetch]
};

export default useUserInfo;