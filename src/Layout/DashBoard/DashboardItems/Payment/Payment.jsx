
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51OEl6tDtrzCD47eSmP1QLWLlOimC39oPduE8hJ0UdHBNrz6efXl2qSHOwOqb1PRKD1Kl6LAZCf6laBov2vYtqD0V00YTABbzTD');

   

    return (
        <div>
             <div>
                
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>
        </div>
        </div>
    );
};

export default Payment;