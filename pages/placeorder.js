import Link from 'next/link';
import React, { useContext } from 'react';
import CheckoutWizard from '../components/CheckoutWizard';
import { Store } from '../utils/Store';
//import Image from 'next/image';

export default function PlaceOrderPage() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, shippingAddress, paymentMethod } = cart;

  return (
    <div>
      <CheckoutWizard activeStep={3} />
      <h1 className="text-sm mb-4 ml-5">Place Order</h1>
      {cartItems.length === 0 ? (
        <div className="text-xs">
          Bag is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div>
          <div>
            <div className="ml-5 border rounded-md mr-5 p-3 mb-4">
              <h2 className="text-xs font-bold mb-3">Shipping Address</h2>
              <h2 className="text-xs">{shippingAddress.fullName}</h2>
              <h2 className="text-xs">{shippingAddress.address}</h2>
              <h2 className="text-xs">
                {shippingAddress.city} | {shippingAddress.postalCode}
              </h2>
              <h2 className="text-xs">{shippingAddress.country}</h2>

              <div className='text-xs mt-2'>
                <Link href="/shipping" >Edit</Link>
              </div>
            </div>
            <div className='ml-5 border rounded-md mr-5 p-3 mb-4'>
              <h2 className="text-xs font-bold mb-3">Payment Method</h2>
              <div className=" text-xs">{paymentMethod}</div>
              <div className="text-xs mt-2">
                <Link href="/payment">Edit</Link>
              </div>
            </div>
            <div className="ml-5 border rounded-md mr-5 p-3">
              <h2 className="text-xs font-bold">Order Items</h2>
              <div className="">
                <div className="">
                  <div className="">
                    <h4 className="text-xs">item</h4>
                    <h4 className="text-xs">quantity</h4>
                    <h4 className="text-xs">price</h4>
                    <h4 className="text-xs">subtotal</h4>
                  </div>
                </div>
                {/* <div className="">
                  {cartItems.map((item) => (
                    <div key={item.id} className="">
                      <Link href={`/product/${item.slug}`}>
                        <a className="">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={400}
                            height={504}
                          ></Image>
                          {item.name}
                        </a>
                      </Link>
                    </div>
                    <div className=''>{item.quantity}</div>
                    <div className=''>{item.quantity}</div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
