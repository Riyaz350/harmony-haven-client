import axios from "axios";

const axiosPublic = axios.create({
    // baseURL:'http://localhost:5000'
    baseURL:''
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;