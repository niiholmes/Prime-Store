import Link from "next/link";

const DisplayCard = ({ product_name, brief, tagline, image, price }) => {
  return (
    <div className="item-element mr-4 bg-white w-10/12 h-46 hover:shadow-3xlg rounded-lg mt-10 liftOffAnimation p-5">
      <Link href="#">
        <a>
          <h4 className="text-gray-400 text-xs">{product_name}</h4>
          <h4 className="font-bold mt-2 text-xl">{tagline}</h4>
          <h4 className="mt-1 text-xl font-light">{brief}</h4>
          <h4 className="text-xl font-light">{price}</h4>
          <img src={image} alt="products" className="object-fill p-0 " />
        </a>
      </Link>
    </div>
  );
};

export default DisplayCard;
