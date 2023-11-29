import { useContext, useState } from "react";
import Payment from "./Payment";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useUserAgreement from "../../../../Hooks/useUserAgreement";
import '../../../../App.css'
import SubTitle from '../../../../Hooks/SubTitle'


const Pay = () => {
    const [agreement] = useUserAgreement()
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

    const {acceptedTime, apartmentId, apartmentNo, blockName, email, floorNo, name, rent, room, status, submissionTime} = agreement
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <SubTitle title='Payment'></SubTitle>
                <div>
  

                <div className="my-10 lg:grid grid-cols-2 gap-10  flex flex-col  items-center  text-[#00a9a5]">
 

                    <div className="text-xl md:text-5xl  items-center justify-center gap-2">
                    <h1 className="font-bold">Email: </h1>
                    <input className="w-3/4 lg:w-full h-fit border-2 md:border-4 border-[#00a9a5] rounded-lg" type="text" readOnly value={email} />

                    </div>
                    <div className="text-xl md:text-5xl items-center justify-center gap-2">
                    <h1 className="font-bold">Floor: </h1>
                    <input className="w-3/4 lg:w-full h-fit border-2 md:border-4 border-[#00a9a5] rounded-lg" type="text" readOnly value={floorNo} />

                    </div>
                    <div className="text-xl md:text-5xl  items-center justify-center gap-2">
                    <h1 className="font-bold">Block: </h1>
                    <input className="w-3/4 lg:w-full h-fit border-2 md:border-4 border-[#00a9a5] rounded-lg" type="text" readOnly value={blockName} />

                    </div>
                    <div className="text-xl md:text-5xl items-center justify-center gap-2">
                    <h1 className="font-bold">Apartments No: </h1>
                    <input className="w-3/4 lg:w-full h-fit border-2 md:border-4 border-[#00a9a5] rounded-lg" type="text" readOnly value={apartmentNo} />
                    </div>

                    <div className="text-xl md:text-5xl  items-center justify-center gap-2">
                    <h1 className="font-bold">Rent: </h1>
                    <input className="w-3/4 lg:w-full h-fit border-2 md:border-4 border-[#00a9a5] rounded-lg" type="text" readOnly value={apartmentNo} />

                    </div>


                </div>
            </div>
    


           <div className="flex flex-col text-center">
           <select value={monthData} className=' text-xl rounded-lg my-10 md:text-2xl bg-[#00a9a5] text-white font-bold px-10 lg:w-1/5 h-[50px] md:h-[100px] mx-auto' onChange={handleMonth}>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>

            </select>
            <button className="btn text-white btnLandLord w-fit mx-auto" onClick={handlePay}>Pay</button>
           </div>
            
        </div>
        </div>
    );
};

export default Pay;