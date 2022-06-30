import Link from "next/link";
import Image from "next/image";
import data from "../../utils/data"
import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../../utils/Store";

const ProductPage = () => {
  const {state, dispatch} = useContext(Store);
  // const router = useRouter();
  const {query} = useRouter();
  const {slug} = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Sorry product not found</div>;
  }


const addToCartHandler = () => {
  const oldItem = state.cart.cartItems.find((x) => x.slug === product.slug);
  const quantity = oldItem ? oldItem.quantity +1 : 1;
  dispatch({type: 'CART_ADD_ITEM', payload: { ...product, quantity}});
  // router.push('/cart');

}

  return (
    <div className="mt-7 text-sm font-bold">
      <Link href="/">
        <a>back</a>
      </Link>

      <div className="grid grid-cols-1 mt-14 rounded-bl-2xl  ">
        <div className="">
          <Image
            src={product.image}
            width={600}
            height={404}
            alt="products"
            className=""
          />
        </div>
       
      </div>

      <div className=" mt-7 font-medium ">
          <h1 className="text-center text-gray-500 mb-4">{product.product_name}</h1>
          <h4 className="font-bold pl-4 mb-1">{product.price}</h4>
          <h4 className="font-bold pl-4 ">Description:</h4>
          <h4 className="text-xs text-justify p-4">{product.description}</h4>
          <h4 className="pl-4 text-xs text-gray-400">{product.tagline}</h4>
          
        </div>
      <div className="mt-4 text-center">
     
        <Link href="#">
          <a><button className="mb-10 bg-slate-300 rounded-3xl  p-3 ml-28 text-xs " onClick={addToCartHandler}>
            ADD TO CART
          </button></a>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;

