import Image from "next/image";
import Link from "next/link";
import helper from "../public/assets/agent.jpeg"

const HelpCard = () => {
  return (
    <div className="item-element mr-4 bg-white w-10/12 h-96 hover:shadow-3xlg rounded-lg mt-10 liftOffAnimation py-5">
      <Link href="#">
        <a>
          <h4 className="text-gray-800 text-2xl">Shop one on one with a Specialist.
          Online or in store</h4>
          <Image src={helper}  alt="products" className="" />
        </a>
      </Link>
    </div>
  );
};

export default HelpCard;
