import Image from "next/image";
import Link from "next/link";

const DisplayCardMini = ({ img, item }) => {
  return (
    <div className="product-element mt-10 mr-4">
      <Link href="#">
        <a>
          <Image src={img} width={390} height={264} alt="products" className="object-fill  " />
          <h4 className="text-center text-xs mb-7 ">{item}</h4>
        </a>
      </Link>
    </div>
  );
};

export default DisplayCardMini;
