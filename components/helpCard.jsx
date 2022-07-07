import Image from 'next/image';
import Link from 'next/link';

const HelpCard = () => {
  return (
    <div className="item-element mr-4 bg-black h-90 rounded-2xl mt-10 drop-shadow-sm hover:drop-shadow-lg mt-10  pt-5">
      <Link href="#">
        <a>
          <h4 className="text-gray-200  mt-2  mb-4 text-2xl">
            Shop one on one with a Virtual Specialist 
          </h4>
          <Image src='/assets/siri.webp' width={600} height={300} alt="products" className="object-contain " />
        </a>
      </Link>
    </div>
  );
};

export default HelpCard;
