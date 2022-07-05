import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CheckoutWizard from '../components/CheckoutWizard';
import { Store } from '../utils/Store';

export default function PaymentPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      return toast.error('Payment method is required');
    }
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: selectedPaymentMethod });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      })
    );

    router.push('/placeorder');
  };



  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping');
    }
    setSelectedPaymentMethod(paymentMethod || ' ');
  }, [paymentMethod, router, shippingAddress.address]);
  return (
    <div>
      <CheckoutWizard activeStep={2} />
      <form
        className="mx-auto max-w-screen-md ml-5 mr-5"
        onSubmit={submitHandler}
      >
        <h1 className="mb-4 text-sm">Payment Method</h1>
        {['PayPal', 'Stripe', 'CashOnDelivery'].map((payment) => (
          <div key={payment} className="mb-4">
            <input
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0 ml-10"
              id={payment}
              type="radio"
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />
            <label className="p-2 text-xs font-bold" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        <div className="mb-4 flex justify-between">
          <button
            onClick={() => router.push('/shipping')}
            type="button"
            className="w-1/3 bg-blue-500 rounded-xl  p-3  text-xs mt-4 "
          >
            Back
          </button>
          <button className="w-1/3 bg-yellow-500 rounded-xl  p-3  text-xs mt-4 ">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
PaymentPage.auth =true;