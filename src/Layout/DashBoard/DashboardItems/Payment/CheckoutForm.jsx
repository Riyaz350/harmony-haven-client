import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { AuthContext } from '../../../../Provider/AuthProvider';
import '../../../../App.css'


const CheckoutForm = () => {

    const [clientSecret, setClientSecret] = useState()
  const [transactionId, setTransactionId] =useState("")
  const [couponCode, setCouponCode] =useState('')
    const stripe = useStripe()
    const elements = useElements()


    const {user} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [rent, setRent] =useState(0)
    const [agreement, setAgreement] =useState({})
    const [userData, setUserData] =useState({})
    const [month, setMonth] =useState('january')
    // const [userData, userLoading, refetch] =useCurrentUserInfo()

    const handleMonth = e => {
        const val = e.target.value;
        setMonth(val);
    }

    useEffect(()=>{
        
        axiosSecure.get(`/users/${user?.email}`)
        .then(res=>setUserData(res.data))

        if(userData?.acceptedAgreement){
            axiosSecure.get(`/agreements/${userData?.acceptedAgreement}`)
            .then(res=>{
                setAgreement(res.data)
                setRent(res.data.rent)
            })
        }


    },[user?.email, axiosSecure, userData?.acceptedAgreement])

    useEffect(()=>{
        if(rent > 0){
         axiosSecure.post(`/create-payment-intent`, {price: rent})
       .then(res => {
         setClientSecret(res.data?.clientSecret)
       })
        }
       },[axiosSecure, rent])

       const handleSubmit = async(e) =>{
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
            data: new Date()  ,
            month
        }

          const res = await axiosSecure.post('/payments', payment)
          console.log('payment ', res)
        }
      }
    }

    const useCoupon = e =>{
        e.preventDefault()
        const discount = parseInt(couponCode)
        const newRent = rent*discount/100
        setRent(rent - newRent)
    }


    return (
        <div className="p-20">
            <select value={month} className=' text-xl rounded-lg my-10 md:text-2xl bg-[#00a9a5] text-white font-bold px-10' onChange={handleMonth}>
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

            {/* coupon stuff */}
            <h1>Amount To Be Paid: {rent}</h1>
            <form onSubmit={useCoupon}>
            <input onChange={e=>setCouponCode(e.target.value)} type="text" placeholder='Place Your Coupon here' />
            <button>Apply</button>
            </form>


        <form onSubmit={handleSubmit}>
            <CardElement
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
            <button className='btn btnLandLord rounded-md text-white lg:my-5' type="submit" disabled={!stripe || !clientSecret}>
            Pay
            </button>
            {transactionId ? <p className="text-3xl font-bold text-green-500">Rent Paid</p>: <p></p>}
        </form>
        </div>
    );
};

export default CheckoutForm;