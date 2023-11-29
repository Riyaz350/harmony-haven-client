import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUserAcceptedAgreement = () => {
    const {user} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure()


    const {data: userData={}} =useQuery({
            queryKey: [user?.email,'userData'],
            queryFn: async()=>{
                const res = await axiosSecure.get(`/users/${user.email}`)
                
                return res.data
            }
        })
        return [userData]

};

export default useUserAcceptedAgreement;