import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const Payment = () => {
    const {user} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [rent, setRent] =useState(0)
    const [agreement, setAgreement] =useState({})
    const [userData, setUserData] =useState({})
    // const [userData, userLoading, refetch] =useCurrentUserInfo()

    useEffect(()=>{
        axiosSecure.get(`/users/${user?.email}`)
        .then(res=>setUserData(res.data))

        if(userData?.acceptedAgreement){
            axiosSecure.get(`/agreements/${userData?.acceptedAgreement}`)
            .then(res=>{
                setAgreement(res.data)
                setRent(res.data.rent)
            })
        }


    },[user?.email, axiosSecure, userData?.acceptedAgreement])

    return (
        <div>
            <h1>pay</h1>
        </div>
    );
};

export default Payment;