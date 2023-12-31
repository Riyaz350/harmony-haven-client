import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAgreements = () => {
    const {user} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: agreements=[], refetch: refetchAgreements, isLoading:loading} =useQuery({
        queryKey:['agreement'],
        queryFn: async()=>{
                const res = await axiosSecure.get(`/agreements?status=pending`)
                return res.data
        }
    })
    return [agreements, refetchAgreements, loading]
};

export default useAgreements;