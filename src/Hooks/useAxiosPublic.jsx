import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://b8a12-server-side-riyaz350.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;