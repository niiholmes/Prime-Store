import Head from "next/head";
import DisplayCard from "../components/displayCard";
import DisplayCardMini from "../components/displayCardMini";
import products from "../data/products";
import items from "../data/items";
import HelpCard from "../components/helpCard";
import HelpCardMini from "../components/helpCardMini";
import QuickLinks from "../components/quickLinks";

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

      <h6 className="text-2xl mt-4 text-slate-800 font-medium">
        The latest.
        <span className="text-gray-400">
          Take a look at what's new, right now.
        </span>
      </h6>
      {
        <div className="item-slider">
          {items.map((item) => (
            <DisplayCard
              product_name={item.product_name}
              brief={item.brief}
              price={item.price}
              image={item.image}
              tagline={item.tagline}
            />
          ))}
        </div>
      }
      <h6 className="text-2xl mt-4 text-slate-800 font-medium">
        Help is here.
        <span className="text-gray-400">
          Whenever and however you need it.
        </span>
      </h6>
      <div className="grid grid-cols-2 item-slider">
      <HelpCard/>
      <HelpCardMini/>
      </div>

      <h6 className="text-2xl mt-4 text-slate-800 font-medium">
        Quick Links
      </h6>
      <div className="product-slider">
      <QuickLinks/>
      </div>
      
    </div>
  );
}
