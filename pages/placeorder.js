import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CheckoutWizard from '../components/CheckoutWizard';
import { Store } from '../utils/Store';
import {getError} from '../utils/error';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function PlaceOrderPage() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  const router = useRouter();
  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
  }, [paymentMethod, router]);

  const [loading, setLoading] = useState(false);
  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/orders', {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch({ type: 'CART_CLEAR_ITEMS' });
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      );
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };
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

              <div className="text-xs mt-2">
                <Link href="/shipping">Edit</Link>
              </div>
            </div>
            <div className="ml-5 border rounded-md mr-5 p-3 mb-4">
              <h2 className="text-xs font-bold mb-3">Payment Method</h2>
              <div className=" text-xs">{paymentMethod}</div>
              <div className="text-xs mt-2">
                <Link href="/payment">Edit</Link>
              </div>
            </div>
            <div className="ml-5 border rounded-md mr-5 p-3">
              <h2 className="text-xs font-bold mb-3">Ordered Items</h2>
              {cartItems.map((item) => (
                <div key={item._id} className="">
                  <Link href={`/produc/${item.slug}`}>
                    <a className="">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={504}
                      ></Image>
                    </a>
                  </Link>
                  <div className="text-xs font-mono">
                    {' '}
                    Quantity:{item.quantity}
                  </div>
                  <div className="text-xs"> Price: ${item.price}</div>
                  <div className="text-xs">
                    Subtotal: ${item.quantity * item.price}
                  </div>
                  <div className="text-xs">
                    <Link href="/cart">Edit</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <h2 className="">Order Summary</h2>
              <ul>
                <li>
                  <div className="">
                    <div className="">Items</div>
                    <div className="">${itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="">
                    <div className="">Tax</div>
                    <div className="">${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="">
                    <div className="">Total</div>
                    <div className="">${totalPrice}</div>
                  </div>
                </li>
                <li>
                  <button
                    className=""
                    disable={loading}
                    onClick={placeOrderHandler}
                  >
                    {loading ? 'Loading...' : 'Place Order'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

PlaceOrderPage.auth = true;
