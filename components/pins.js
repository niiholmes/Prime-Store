import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Pins({ img, item, size, width, height }) {
  return (
    <>
      <div
        className=" my-4 mx-2 p-0 rounded-2xl bg-white drop-shadow-sm  hover:drop-shadow-xl liftOffAnimation"
        style={{ ...styles[size] }}
      >
        <Link href="#">
          <a>
            <Image
              src={img}
              width={width}
              height={height}
              alt="categories"
              className="object-contain"
            />
          </a>
        </Link>
        <h4 className="text-center text-xs relative bottom-4 z-10  ">{item}</h4>
    
      </div>
      </>
  );
}

const styles = {
  small: {
    gridRowEnd: 'span 8',
  },
  medium: {
    gridRowEnd: 'span 10',
  },
  large: {
    gridRowEnd: 'span 12',
  },
};
