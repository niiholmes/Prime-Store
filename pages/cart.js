import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import dynamic from 'next/dynamic';

function CartPage() {
  const router = useRouter;
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };
  return (
    <div className="my-5 mx-5">
      <Link className=" text-xs font-bold" href="/">
        <a className=" font-bold text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </a>
      </Link>
      <h1 className="mb-10 text-sm text-right mr-5 mt-5 ">Review your Bag</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-xs">
          Bag is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div>
            {cartItems.map((item) => (
              <div key={item.slug} className="">
                <Link href={`/product/${item.slug}`}>
                  <a className="">
                    <h1 className="text-sm mb-5 text-center">
                      {item.product_name}
                    </h1>

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={504}
                    ></Image>
                  </a>
                </Link>
                <div className="flex justify-evenly mt-5">
                  <h4 className=" text-sm f">
                    <select
                      value={item.quantity}
                      onChange={(e) => updateCartHandler(item, e.target.value)}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </h4>
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
          <div className="text-center">
            <a>
              <button
                onClick={() => router.push('login?redirect=/shipping')}
                className=" w-2/3 bg-yellow-500 rounded-xl  p-3  text-xs mt-10 "
              >
                CHECK OUT
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
