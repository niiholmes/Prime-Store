import Link from 'next/link';
import Image from 'next/image';
//import data from "../utils/data"

const DisplayCard = ({ product_name, slug, brief, tagline, image, price }) => {
  return (
    <div className=" ml-5 item-element mr-4 border bg-white  hover:drop-shadow-lg rounded-2xl mt-10 pt-5 ">
      <Link href={`/product/${slug}`}>
        <a>
          <h4 className="text-gray-400 text-xs">{product_name}</h4>
          <h4 className="font-bold mt-2 text-xl">{tagline}</h4>
          <h4 className="mt-1 text-xl font-light">{brief}</h4>
          <h4 className="text-xl font-light mb-7 ">${price}</h4>
          <Image
            src={image}
            width={200}
            height={210}
            alt="products"
            className="object-contain"
          />
        </a>
      </Link>
    </div>
  );
};

export default DisplayCard;
