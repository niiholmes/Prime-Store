import Head from "next/head";
import DisplayCard from "../components/displayCard";
import DisplayCardMini from "../components/displayCardMini";

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
      <DisplayCard />
      <DisplayCardMini />
    </div>
  );
}
