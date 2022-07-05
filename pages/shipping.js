import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CheckoutWizard from '../components/CheckoutWizard';
import { Store } from '../utils/Store';

export default function ShippingPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country, location },
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      })
    );

    router.push('/payment');
  };

  return (
    <div>
      <CheckoutWizard activeStep={1} />
      <form
        className="mx-auto max-w-screen-md ml-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xsm">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName" className="text-xs font-bold">
            Name
          </label>
          <input
            className="w-full border mr-5 text-xs h-10 "
            id="fullName"
            autoFocus
            {...register('fullName', {
              required: 'please enter full name',
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="text-xs font-bold">
            Address
          </label>
          <input
            className="w-full border mr-5 text-xs h-10 "
            id="address"
            autoFocus
            {...register('address', {
              required: 'please enter your address',
              minLength: {
                value: 3,
                message: 'address is not more than 2 chars',
              },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="text-xs font-bold">
            City
          </label>
          <input
            className="w-full border mr-5 text-xs h-10 "
            id="city"
            autoFocus
            {...register('city', {
              required: 'please enter your city',
            })}
          />
          {errors.city && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="text-xs font-bold">
            Postal code
          </label>
          <input
            className="w-full border mr-5 text-xs h-10 "
            id="postalCode"
            autoFocus
            {...register('postalCode', {
              required: 'please enter your postal code',
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="text-xs font-bold">
            Country
          </label>
          <input
            className="w-full border mr-5 text-xs h-10 "
            id="country"
            autoFocus
            {...register('country', {
              required: 'please enter your country',
            })}
          />
          {errors.country && (
            <div className="text-red-500">{errors.country.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className=" w-full bg-yellow-500 rounded-xl  p-3  text-xs mt-4 ">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

ShippingPage.auth = true;
