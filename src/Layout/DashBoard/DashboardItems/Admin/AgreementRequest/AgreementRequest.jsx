import useAgreements from "../../../../../Hooks/useAgreements";

const AgreementRequest = () => {
    const [agreement] =useAgreements()
    console.log(agreement)
    return (
        <div>
            
        </div>
    );
};

export default AgreementRequest;