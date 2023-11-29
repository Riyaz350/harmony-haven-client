import { useContext, useState } from "react";
import Payment from "./Payment";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Pay = () => {
    const {month, setMonth} = useContext(AuthContext)
    const navigate = useNavigate()
    const [monthData, setMonthData] =useState('january')

    const handleMonth = e => {
        const val = e.target.value;
        setMonthData(val);
    }

    const handlePay = () =>{
        setMonth(monthData)
        navigate('/dashboard/payment')
    }

    
    return (
        <div>
            <select value={monthData} className=' text-xl rounded-lg my-10 md:text-2xl bg-[#00a9a5] text-white font-bold px-10' onChange={handleMonth}>
                <option value="january">january</option>
                <option value="february">february</option>
                <option value="march">march</option>
                <option value="april">april</option>
                <option value="may">may</option>
                <option value="june">june</option>
                <option value="july">july</option>
                <option value="august">august</option>
                <option value="september">september</option>
                <option value="october">october</option>
                <option value="november">november</option>
                <option value="december">december</option>

            </select>
            <button onClick={handlePay}>Pay</button>
            
        </div>
    );
};

export default Pay;