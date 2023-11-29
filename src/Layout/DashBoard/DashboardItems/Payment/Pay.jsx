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
  

            {/* {agreementLoading && <span className="loading loading-spinner loading-lg"></span>} */}
                <div className="my-10 lg:grid grid-cols-2 gap-10 space-y-5 lg:space-y-0">
    
                    <div><div className="card static w-3/4 lg:w-full mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Email</h2>
                            <p className="text-xl md:text-2xl lg:text-4xl">{email}</p>
                        </div>
                    </div></div>



                    <div><div className="card static w-3/4 lg:w-full  mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Floor</h2>
                            <p className="text-xl md:text-2xl lg:text-4xl">{floorNo? floorNo: 'none'}</p>
                        </div>
                    </div></div>

                    <div><div className="card static w-3/4 lg:w-full  mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Block</h2>
                            <p className="text-xl md:text-2xl lg:text-4xl">{blockName}</p>
                        </div>
                    </div></div>

                    <div><div className="card static w-3/4 lg:w-full mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Apartments No</h2>
                            <p className="text-xl md:text-2xl lg:text-4xl">{apartmentNo}</p>
                        </div>
                    </div></div>
                    <div><div className="card static w-3/4 lg:w-full mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Rent</h2>
                            <p className="text-xl md:text-2xl lg:text-4xl">${rent}</p>
                        </div>
                    </div></div>

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