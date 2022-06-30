import Image from 'next/image';
import Link from 'next/link';
import {  useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

export default function CartPage() {
  const router = useRouter
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  return (
    <div className='my-5 mx-5'>
      <Link className=" text-xs font-bold" href="/">
        <a className=" font-bold text-xs">back to shopping</a>
      </Link>
      <h1 className="mb-10 text-sm text-right mr-5 mt-5 ">Review your Bag</h1>
      {cartItems.length === 0 ? (
        <div className='text-center text-xs'>
          Bag is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div>
            {cartItems.map((item) => (
              <div key={item.slug} className="">
                <Link href={`/product/${item.slug}`}>
                  <a className="">
                    <h1 className="text-sm mb-5 text-center">{item.product_name}</h1>

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={504}
                    ></Image>
                  </a>
                </Link>
                <div className="flex justify-evenly mt-5">
                  <h4 className=" text-sm f"> {item.quantity}</h4>
                  <h4 className=" text-sm ">$ {item.price}</h4>
                  <h4
                    className=" mr-5  text-sm font-bold mb-7 "
                    onClick={() => removeItemHandler(item)}
                  >
                    Remove item
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            Subtotal({cartItems.reduce((a, c) => a + c.quantity, 0)}) : ${' '}
            {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
          </div>
          <div className='text-center'>
          <a><button 
          onClick ={() => router.push('/shipping')}className=" w-2/3 bg-yellow-500 rounded-xl  p-3  text-xs mt-10 " >
            CHECK OUT
          </button></a>
          </div>
        </div>
      )}
    </div>
  );
}
