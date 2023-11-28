import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCurrentUserInfo = () => {
    const axiosSecure = useAxiosSecure()
    const {user} =useContext(AuthContext)

    const {data:userData =[], isPending:userLoading, refetch} =useQuery({
        queryKey:['userData'],
        queryFn: async()=>{
            
                const res = await axiosSecure.get(`/users/${user.email}`)
                return res.data
        }
    })
    return [userData, userLoading, refetch]
};

export default useCurrentUserInfo;