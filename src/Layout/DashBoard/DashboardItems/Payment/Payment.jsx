
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = ({month}) => {
    const stripePromise = loadStripe('pk_test_51OEl6tDtrzCD47eSmP1QLWLlOimC39oPduE8hJ0UdHBNrz6efXl2qSHOwOqb1PRKD1Kl6LAZCf6laBov2vYtqD0V00YTABbzTD');

    return (
        <div>
             <div className="w-full">
                
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm month={month} ></CheckoutForm>
                    </Elements>
                </div>
        </div>
        </div>
    );
};

export default Payment;