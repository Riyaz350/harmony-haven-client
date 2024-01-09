import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { AuthContext } from '../../../../Provider/AuthProvider';
import '../../../../App.css'
import useCouponInfo from '../../../../Hooks/useCouponInfo';
import Swal from 'sweetalert2';
import { dateTime } from '../../../../Utility/utilities';
import useUserAgreement from '../../../../Hooks/useUserAgreement';


const CheckoutForm = () => {
    const {month} = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState()
    const toDate = new Date()

  const [transactionId, setTransactionId] =useState("")
  const [couponCode, setCouponCode] =useState('')
    const stripe = useStripe()
    const elements = useElements()
    const  [coupons, couponLoading] = useCouponInfo()
    const availableCoupons= coupons.filter(coupon => coupon?.available == true)
    const couponExist = availableCoupons.find(coupon => coupon.name == couponCode)


    const {user} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [rent, setRent] =useState(0)
    const [agreement] = useUserAgreement()
   

    useEffect(()=>{
        
        
                setRent(agreement.rent)

    },[agreement.rent])

    useEffect(()=>{
        if(rent > 0){
         axiosSecure.post(`/create-payment-intent`, {price: rent})
       .then(res => {
         setClientSecret(res.data?.clientSecret)
       })
        }
       },[axiosSecure, rent])

       const handleSubmit = async(e) =>{
        const submissionTime = dateTime(toDate)

        e.preventDefault()
        if(!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

    if(card == null){
        return
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }

      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous'
          }
        }
      }) 
      if(confirmError){
        console.log('confirm error', confirmError)
      }else{
        console.log('paymentIntent', paymentIntent)
        if(paymentIntent.status === 'succeeded'){
          console.log('transaction ID', paymentIntent.id)
          setTransactionId(paymentIntent.id)

          const payment = {
            email: user.email,
            rent: rent,
            transactionId: paymentIntent.id,
            date: submissionTime  ,
            month
        }

          const res = await axiosSecure.post('/payments', payment)
          if(res.status === 200){
            Swal.fire({position: "top-end", icon: "success", title: "Payment Successful", showConfirmButton: false, timer: 1500});
          }
        }
      }
    }

    const useCoupon = e =>{
        e.preventDefault()
        if(couponExist){

            const discount = parseInt(couponCode)
            const newRent = rent*discount/100
            setRent(rent - newRent)
        }else{
            Swal.fire({position: "top-end", icon: "error", title: "Invalid coupon", showConfirmButton: false, timer: 1500});
        }

    }


    return (
        <div className="p-20">
            

            {/* coupon stuff */}
            <h1 className='text-[#00a9a5] font-bold lg:text-3xl'>Amount To Be Paid: {rent}</h1>
            <form className=' space-y-5 border-2 rounded-lg md:flex flex-col lg:max-w-fit border-[#00a9a5]' onSubmit={useCoupon}>
            <input className='lg:text-2xl border-b-2  border-[#00a9a5]' onChange={e=>setCouponCode(e.target.value)} type="text" placeholder='Place Your Coupon here' />
            <button className='btn btnLandLord text-white'>Apply</button>
            </form>


        <form onSubmit={handleSubmit}>
            <CardElement
            className='max-w-xl mt-2 lg:mt-10'
            options={{
                style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                    color: '#aab7c4',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
                },
            }}
            />
            <button className='btn btnLandLord rounded-none text-white lg:my-5' type="submit" disabled={!stripe || !clientSecret}>
            Pay
            </button>
        </form>
        </div>
    );
};

export default CheckoutForm;