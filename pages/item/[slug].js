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

      <div className="grid grid-cols-1 mt-14">
        <div className="">
          <Image
            src={item.image}
            width={600}
            height={404}
            alt="products"
            className=""
          />
        </div>
        <div>
          <h4>{item.product_name}</h4>
          <h4>{item.id}</h4>
          <h4>{item.tagline}</h4>
          
        </div>
      </div>

      <div className="mt-4 text-center">
      <h4>Price: {item.price}</h4>
        <Link href="#">
          <a><button className="bg-slate-400 rounded-2xl  p-2 text-center text-sm">
            ADD TO CART
          </button></a>
        </Link>
      </div>
    </div>
  );
};

export default ItemPage;
