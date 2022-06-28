import Link from "next/link";
import Image from "next/image";
//import data from "../utils/data"

const DisplayCard = ({ product_name,slug, brief, tagline, image, price }) => {

  return (
    <div className="item-element mr-4 bg-white w-10/12 h-45 hover:shadow-3xlg rounded-lg mt-10 liftOffAnimation pt-5">
      <Link href={`/product/${slug}`}>
        <a>
          <h4 className="text-gray-400 text-xs">{product_name}</h4>
          <h4 className="font-bold mt-2 text-xl">{tagline}</h4>
          <h4 className="mt-1 text-xl font-light">{brief}</h4>
          <h4 className="text-xl font-light pb-10">{price}</h4>
          <Image src={image} width={600} height={404} alt="products" className="" />
        </a>
      </Link>
    </div>
  ); 
};

export default DisplayCard;
