import useAgreements from "../../../../../Hooks/useAgreements";
import AgreementsRow from "./AgreementsRow";

const AgreementRequest = () => {
    const [agreements, , loading] =useAgreements()
    
    if(loading){
        return <><span className="loading w-1/6 mx-auto py-80 text-center block loading-spinner text-[#000000]"></span></>
    }
    return (
        <div>
            <div className="lg:min-h-screen">
            <h1 className="text-4xl text-center mt-10 text-white p-3 rounded-lg bg-[#000000] w-fit mx-auto">Pending agreements</h1>

             
            <div className="overflow-x-auto max-w-7xl mx-auto my-5 ">
             <table className="table w-full  static">
                {/* head */}
                <thead>
                    <tr className="text-xl">
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Floor No</th>
                        <th>Block Name</th>
                        <th>Room No</th>
                        <th>Rent</th>
                        <th>Request Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                
                
                <tbody >
                {
                agreements.map(agreement =><AgreementsRow key={agreement._id} agreement={agreement}  ></AgreementsRow>)
                }
                </tbody>

            </table>
            </div>    

        
           
            
            </div>
        </div>
    );
};

export default AgreementRequest;