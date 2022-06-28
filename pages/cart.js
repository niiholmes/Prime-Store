import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { Store } from '../utils/Store'
import { XCircleIcon } from '@heroicons/react/outline'

export default function CartPage() {
    const {state, dispatch} = useContext(Store);
    const {
        cart : {cartItems},
    } = state;

const removeItemHandler = (item) => {
    dispatch ({type: 'CART_REMOVE_ITEM', payload: item}); 
}
  return (
    <div>
      <h1 className='mb-4 text-xl'>shopping cart</h1>
      {
        cartItems.length === 0 ?
       ( <div>
            Cart is empty. <Link href = "/">Go shopping</Link>
        </div>) :
        (
            <div className='grid md:grid-cols-4 md:gap-5'>
                <div className='overflow-x-auto md:col-span-3'>
                    <table className='min-w-full'>
                        <thead className='border-b'>
                            <tr>
                                <th className='px-5 text-left'>Item</th>
                                <th className='px-5 right'>Quantity</th>
                                <th className='px-5 right'>Price</th>
                                <th className='px-5'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((item) => (
                                    <tr key={item.slug} className="border-b">
                                        <td>
                                            <Link href ={`/product/${item.slug}`}>
                                                <a className='flex items-center'>
                                                    <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={50}
                                                    height={50}
                                                    >
                                                    </Image>
                                                    &nbsp;
                                                    <h1 className='text-xs'>{item.product_name}</h1>
                                                </a>
                                                
                                            </Link>
                                        </td>
                                        <td className='p-5 text-right'>{item.quantity}</td>
                                        <td className='p-5 text-right'>${item.price}</td>
                                        <td className='p-5 text-center'>
                                            <button onClick={() => removeItemHandler(item)}>
                                                <XCircleIcon className="h-5 w-5"></XCircleIcon>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
      }
      
    </div> 
  )
}
 