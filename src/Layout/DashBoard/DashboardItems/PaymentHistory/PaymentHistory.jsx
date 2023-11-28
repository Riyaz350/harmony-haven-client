import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
        <div className="lg:min-h-screen">
        <h1 className="text-4xl text-center mt-10 text-white p-3 rounded-lg bg-[#00a9a5] w-fit mx-auto">Pending agreements</h1>

         
        <div className="overflow-x-auto max-w-7xl mx-auto my-5 ">
         <table className="table w-full">
            {/* head */}
            <thead>
                <tr className="text-xl">

                    <th></th>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Rent Paid</th>
                </tr>
            </thead>

            
            
            <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <th>{payment.transactionId}</th>
                            <th>{payment.date}</th>
                            <th>{payment.rent}</th>
                            
                        </tr>)}
                        
                    </tbody>

        </table>
        </div>    

    
       
        
        </div>
    </div>
    );
};

export default PaymentHistory;