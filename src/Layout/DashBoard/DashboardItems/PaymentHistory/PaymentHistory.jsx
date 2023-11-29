import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [filtered, setFiltered] = useState([])
    const[monthName, setMonthName] = useState('')

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            setFiltered(res.data)
            return res.data;
        }
    })

    const handleSearch = e =>{
        e.preventDefault()
        if(monthName){
            const monthly = payments.filter(pay=>pay?.month == monthName.toLocaleLowerCase() )
            setFiltered(monthly)
            e.target.reset()

        }
    }
    return (
        <div>
        <div className="lg:min-h-screen">
        
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-4xl text-center mt-10 text-white p-3 rounded-lg bg-[#00a9a5] w-fit mx-auto">Pending agreements</h1>
            <form onSubmit={handleSearch} className=' space-y-5 border-2 rounded-lg md:flex flex-col max-w-fit border-[#00a9a5]'  >
            <input onChange={e=>{setMonthName(e.target.value)}} className='lg:text-2xl border-b-2 w-fit border-[#00a9a5]'  type="text" placeholder={monthName} />
            <button className='btn btnLandLord text-white'>Search</button>
            </form>
        </div>
         
        <div className="overflow-x-auto max-w-7xl mx-auto my-5 ">
         <table className="table w-full  static">
            {/* head */}
            <thead>
                <tr className="text-xl">
                    <th></th>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Months Rent Paid:</th>
                    <th>Rent Paid</th>
                </tr>
            </thead>

            
            
            <tbody>
                        {filtered.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <th>{payment.transactionId}</th>
                            <th>{payment.date}</th>
                            <th>{payment.month}</th>
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