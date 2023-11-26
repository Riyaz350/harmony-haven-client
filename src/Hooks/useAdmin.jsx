import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';

const useAdmin = () => {
    const axiosPublic = useAxiosPublic()
    const [userRole, setUserRole] =useState({})
    const {user} =useContext(AuthContext)
    useEffect(()=>{
    axiosPublic.get(`/users/${user?.email}`)
    .then(res=> setUserRole(res.data.role))
    })
    return [userRole]
};

export default useAdmin;