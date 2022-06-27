import Link from "next/link";
import Image from "next/image";
import items from "../../utils/items";
import Item from "../../models/Item";
import db from "../../utils/db";

const ItemPage = (props) => {
  const {item} = props;
  
  
  if (!item) {
    return <div>Sorry item not found</div>;
  }
  return (
    <div className="mt-7 text-sm font-bold">
      <Link href="/">
        <a>back</a>
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
          <h1 className="text-center text-gray-500 mb-4">{item.product_name}</h1>
          <h4 className="font-bold pl-4 mb-1">{item.price}</h4>
          <h4 className="font-bold pl-4 ">Description:</h4>
          <h4 className="text-xs text-justify p-4">{item.description}</h4>
          <h4 className="pl-4 text-xs text-gray-400">{item.tagline}</h4>
          
        </div>
      <div className="mt-4 text-center">
     
        <Link href="#">
          <a><button className="mb-10 bg-slate-300 rounded-3xl  p-3 ml-28 text-xs ">
            ADD TO CART
          </button></a>
        </Link>
      </div>
    </div>
  );
};

export default ItemPage;

export async function getServerSideProps(context){
  const {params} = context;
  const {slug} = params

  await db.connect();
  const item = await Item.findOne({slug}).lean();
  await db.disconnect();
  return{
    props:{
      item: db.convertDocToObj(item),
    },
  }
};