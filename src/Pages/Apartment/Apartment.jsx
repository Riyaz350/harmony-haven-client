import useApartmentInfo from "../../Hooks/useApartmentInfo";
import ApartmentCard from './ApartmentCard'

const Apartment = () => {

    const [apartments, refetch] = useApartmentInfo()

    
    return (
        <div>

            <div className="flex flex-col gap-10 py-28">
                {
                    apartments.map(apartment => <ApartmentCard key={apartment.id} apartment={apartment} refetch></ApartmentCard> )
                }
            </div>
            
        </div>
    );
};

export default Apartment;