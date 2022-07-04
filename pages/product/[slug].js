import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import db from '../../utils/db';
import Product from '../../models/Product';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProductPage = (props) => {
  const {product} = props
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  if (!product) {
    return <div>Sorry product not found</div>;
  }

  const addToCartHandler = async () => {
    const oldItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = oldItem ? oldItem.quantity + 1 : 1;
    const {data} = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity){
      return toast.error('Sorry Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };

  return (
    <div className="mt-7 text-sm my-5 mx-5 font-bold">
      <Link href="/">
        <a>
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

      <div className="grid grid-cols-1  rounded-2xl my-5 mx-5 ">
        <div className="">
          <Image
            src={product.image}
            width={400}
            height={504}
            alt="products"
            className=""
          />
        </div>
      </div>

      <div className=" mt-7 font-medium ">
        <h1 className="text-center text-gray-500 mb-4">
          {product.product_name}
        </h1>
        <h4 className="font-bold pl-4 mb-1 font-mono text-yellow-600">
          ${product.price}
        </h4>
        <h4 className="font-bold pl-4 ">Description:</h4>
        <h4 className="text-xs text-justify p-4 text-gray-400">
          {product.description}
        </h4>
        <h4 className="pl-4 text-xs text-gray-400">{product.tagline}</h4>
      </div>
      <div className="my-14  w-full text-center">
        <Link href="#">
          <a>
            <button
              className=" w-2/3 bg-yellow-500 rounded-xl  p-3  text-xs "
              onClick={addToCartHandler}
            >
              ADD TO BAG
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;


export async function getServerSideProps(context){
  const {params} = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({slug}).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}