import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials:true
})
const useAxiosSecure = () => {
    const {logOut} =useContext(AuthContext)
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res =>{
            return res;
        },error=>{
            console.log('error interceptor', error)
            if(error.response.status === 401 || error.response.status === 403){
                // logOut()
                // .then()
                // .catch()
            }
        })
    },[logOut])
    return axiosSecure
};

export default useAxiosSecure;