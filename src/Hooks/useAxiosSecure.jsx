import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials:true
})
const useAxiosSecure = () => {

    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error)=>{
        console.log(error)
        const status = error.response.status
        if(status == 401 || status == 403){
            // await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure



    // const {logOut} =useContext(AuthContext)
    // useEffect(()=>{
    //     axiosSecure.interceptors.response.use(res =>{
    //         return res;
    //     },error=>{
    //         console.log('error interceptor', error)
    //         if(error.response.status === 401 || error.response.status === 403){
    //             // logOut()
    //             // .then()
    //             // .catch()
    //         }
    //     })
    // },[logOut])
    // return axiosSecure
};

export default useAxiosSecure;