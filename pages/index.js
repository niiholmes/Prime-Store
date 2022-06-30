import Head from 'next/head';
import DisplayCard from '../components/displayCard';
// import DisplayCardMini from '../components/displayCardMini';
import data from '../utils/data';
import HelpCard from '../components/helpCard';
import HelpCardMini from '../components/helpCardMini';
import QuickLinks from '../components/quickLinks';
import PinLayout from '../components/pinLayout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prime/Store</title>
      </Head>

      <h4 className="text-3xl ml-2 mt-14 text-slate-800 font-medium">
        Prime Store.{' '}
        <span className="text-gray-400">
          The best place to buy the things you love.
        </span>
      </h4>
      <div className="">
        {/* {data.categories.map((category) => (
          <DisplayCardMini
            img={category.img}
            item={category.item}
            key={category.id}
          />
        ))} */}
        <PinLayout/>
      </div>

      <h6 className="text-2xl mt-10 text-slate-800 font-medium">
        The latest.
        <span className="text-gray-400">
          Take a look at what is new, right now.
        </span>
      </h6>
      {
        <div className="item-slider">
          {data.products.map((product) => (
            <DisplayCard
              key={product.id}
              slug={product.slug}
              product_name={product.product_name}
              brief={product.brief}
              price={product.price}
              image={product.image}
              tagline={product.tagline}
            />
          ))}
        </div>
      }
      
      <h6 className="text-2xl mt-10 text-slate-800 font-medium">
        Help is here.
        <span className="text-gray-400">Whenever and however you need it.</span>
      </h6>
      <div className="grid grid-cols-2 item-slider ">
        <HelpCard />
        <HelpCardMini />
      </div>

      <h6 className="text-2xl mt-4 text-slate-800 font-medium tablet:mt-12">
        Quick Links
      </h6>
      <div className="product-slider">
        <QuickLinks />
      </div>
    </div>
  );
}

// export async function getServerSideProps(){
//   await db.connect();
//   const items = await Item.find({}).lean();
//   await db.disconnect();
//   return{
//     props:{
//       items: items.map(db.convertDocToObj),
//     }
//   }
// }
