import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUserRole = () => {
    const axiosPublic = useAxiosPublic()
    const {user} =useContext(AuthContext)

    const {data: userRole=[], isPending: roleLoading, refetch} =useQuery({
        queryKey: [user?.email, 'userRole'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res.data.role
        }
    })


    // useEffect(()=>{
    // axiosPublic.get(`/users/${user?.email}`)
    // .then(res=> setUserRole(res.data.role))
    // })
    return [userRole, roleLoading, refetch]
};

export default useUserRole;