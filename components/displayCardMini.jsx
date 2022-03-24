import Image from "next/image";
import Link from "next/link";

const DisplayCardMini = ({ img, item }) => {
  return (
    <div className="product-element mt-14 mr-4">
      <Link href="#">
        <a>
          <img src={img} alt="products" className="object-fill  h-fit  " />
          <h4 className="text-center text-xs p-2">{item}</h4>
        </a>
      </Link>
    </div>
  );
};

export default DisplayCardMini;
