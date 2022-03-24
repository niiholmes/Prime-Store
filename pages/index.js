import Head from "next/head";
import DisplayCard from "../components/displayCard";
import DisplayCardMini from "../components/displayCardMini";
import products from "../data/products";




export default function Home() {
  return (
    <div>
      <Head>
        <title>Prime/Store</title>
      </Head>

      <h4 className="text-3xl text-slate-800 font-medium">
        Prime Store.{" "}
        <span className="text-gray-400">
          The best place to buy the things you love.
        </span>
      </h4>
      <div className=" product-slider">
        {products.map((product) => (
          <DisplayCardMini img={product.img} item={product.item} />
        ))}
      </div>

      <h6 className="text-2xl mt-12 text-slate-800 font-medium">
        The latest.
        <span className="text-gray-400">
          Take a look at what's new, right now.
        </span>
      </h6>
      {/* <div className=" grid grid-cols-5 gap-28 w-full overflow-x-auto">
      {
        items.map((item) => (
          <DisplayCard title ={item.title} brief={item.brief}/>
        ))
      }
      </div> */}
      
    </div>
  );
}
