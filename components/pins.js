import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Pins({ img, item, width, height}) {
  return (
    <>
      <div className=" mt-5 mx-1 p-0 rounded-2xl  drop-shadow-sm  hover:drop-shadow-xl ">
        <Link href="#">
          <a>
            <Image
              src={img}
              width={width}
              height={height}
              alt="categories"
              layout='responsive'
              className="object-cover rounded-2xl "
            />
          </a>
        </Link>
        <h4 className="text-left text-xs relative top-1 pl-2">{item}</h4>
      </div>
    </>
  );
}
