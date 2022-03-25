import Link from "next/link";

const HelpCard = () => {
  return (
    <div className="item-element mr-4 bg-white w-10/12 h-96 hover:shadow-3xlg rounded-lg mt-20 liftOffAnimation p-5">
      <Link href="#">
        <a>
          <h4 className="text-gray-800 text-2xl">Shop one on one with a Specialist.
          Online or in store</h4>
          <img src='/assets/agent.jpeg' alt="products" className="w-fit" />
        </a>
      </Link>
    </div>
  );
};

export default HelpCard;
