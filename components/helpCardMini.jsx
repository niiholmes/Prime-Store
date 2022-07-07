import Link from "next/link";

const HelpCardMini = () => {
  return (<div className="mb-2">
  
    <div className="item-element mr-4 bg-white w-11/12 h-44 border rounded-2xl mt-10 drop-shadow-sm hover:drop-shadow-lg p-5">
      <Link href="#">
        <a>
        <h4 className="text-gray-800 text-2xl">Shop one on one with a Specialist.
          Online or in store</h4>
        </a>
      </Link>
    </div>
    <div className="item-element mr-4 bg-white w-11/12 h-44 rounded-2xl mt-10 drop-shadow-sm hover:drop-shadow-lg p-5">
      <Link href="#">
        <a>
        <h4 className="text-gray-800 text-2xl">Shop one on one with a Specialist.
          Online or in store</h4>
        </a>
      </Link>
    </div>
    </div>
  );
};

export default HelpCardMini;
