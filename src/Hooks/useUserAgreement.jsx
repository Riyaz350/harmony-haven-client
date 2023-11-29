import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUserAgreement = () => {

    const {user} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    // const [agreement, setAgreement] =useState({})
    // const [userData, setUserData] =useState({})
    // const [userData, userLoading, refetch] =useCurrentUserInfo()

    // axiosSecure.get(`/users/${user?.email}`)
    // .then(res=>setUserData(res.data))

    // if(userData?.acceptedAgreement){
    //     axiosSecure.get(`/agreements/${userData?.acceptedAgreement}`)
    //     .then(res=>setAgreement(res.data))
    // }

        const {data: userData={}} =useQuery({
            queryKey: [user?.email,'apartments'],
            queryFn: async()=>{
                const res = await axiosSecure.get(`/users/${user.email}`)
                
                return res.data
            }
        })
        const {data: agreement={}, isPending: agreementLoading, refetch} =useQuery({
            queryKey: [userData?.acceptedAgreement, 'apartments'],
            queryFn: async()=>{
                const res = await axiosSecure.get(`/agreements/${userData.acceptedAgreement}`)

                return res.data
            }
        })
        return [agreement, agreementLoading, refetch]
    };
    

export default useUserAgreement;