import Link from "next/link";
import Image from "next/image";
import items from "../../data/items";
import { useRouter } from "next/router";

const ItemPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const item = items.find((a) => a.slug === slug);
  if (!item) {
    return <div>Sorry item not found</div>;
  }
  return (
    <div className="mt-0">
      <Link href="/">
        <a>BACK</a>
      </Link>

      <div className="grid grid-cols-1 mt-14 rounded-bl-2xl  ">
        <div className="">
          <Image
            src={item.image}
            width={600}
            height={404}
            alt="products"
            className=""
          />
        </div>
       
      </div>

      <div className=" mt-7 font-medium ">
          <h4 className="text-center text-gray-500 mb-4">{item.product_name}</h4>
          <h4 className="font-bold pl-4 mb-1">{item.price}</h4>
          <h4 className="font-bold pl-4">Description:</h4>
          <h4 className="text-xs text-justify p-4">{item.description}</h4>
          <h4 className="pl-4 text-xs text-gray-400">{item.tagline}</h4>
          
        </div>
      <div className="mt-4 text-center">
     
        <Link href="#">
          <a><button className="mb-14 bg-slate-300 rounded-3xl  p-3 ml-28 text-xs ">
            ADD TO CART
          </button></a>
        </Link>
      </div>
    </div>
  );
};

export default ItemPage;
