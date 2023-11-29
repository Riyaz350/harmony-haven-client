import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useUserAcceptedAgreement from './useUserAcceptedAgreement';
import useCurrentUserInfo from './useCurrentUserInfo';

const useUserAgreement = () => {

    const {user} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [userData] =useUserAcceptedAgreement()
    const axiosPublic = useAxiosPublic()

    // const agreedId = userData?.acceptedAgreement
    const [agreement, setAgreement] =useState({})


    // const [userData, setUserData] =useState({})
    // const [userData, userLoading, refetch] =useCurrentUserInfo()
    // axiosSecure.get(`/users/${user?.email}`)
    // .then(res=>setUserData(res.data))



    if(userData?.acceptedAgreement){
        axiosSecure.get(`/agreements/${userData?.acceptedAgreement}`)
        .then(res=>setAgreement(res.data))
    }

        
        // const {data: agreement={}, isPending: agreementLoading, refetch} =useQuery({
        //     queryKey: [agreedId, 'agreement'],
        //     queryFn: async()=>{
        //         const res = await axiosSecure.get(`/agreements?id=${agreedId}`)

        //         return res.data
        //     }
        // })
        return [agreement]
    };
    

export default useUserAgreement;