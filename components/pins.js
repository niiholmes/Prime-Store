import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Pins({ img, item,}) {
  return (
    <>
      <div className=" my-5 mx-1 p-0 rounded-2xl  bg-white drop-shadow-sm  hover:drop-shadow-xl liftOffAnimation">
        <Link href="#">
          <a>
            <Image
              src={img}
              width={300}
              height={390}
              alt="categories"
              layout='responsive'
              className="object-cover rounded-2xl "
            />
          </a>
        </Link>
        <h4 className="text-left text-xs relative top-6 pl-2">{item}</h4>
      </div>
    </>
  );
}
