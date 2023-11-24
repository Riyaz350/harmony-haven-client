import useApartmentInfo from "../../Hooks/useApartmentInfo";
import ApartmentCard from './ApartmentCard'

const Apartment = () => {

    const apartments = useApartmentInfo()
    console.log(apartments[0][1])

    
    
    return (
        <div>

            <div className="flex flex-col gap-10 py-28">
                {
                    apartments[0].map(apartment => <ApartmentCard key={apartment.id} apartment={apartment}></ApartmentCard> )
                }
            </div>
            
        </div>
    );
};

export default Apartment;