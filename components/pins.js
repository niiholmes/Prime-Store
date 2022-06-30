import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Pins({ img, dimensions, item, size, width, height }) {
  return (
    <>
      <div
        className="my-8  mx-2 p-0 rounded-2xl bg-slate-400 hover:shadow-3xlg liftOffAnimation"
        style={{ ...styles[size] }}
      >
        <Link href="#">
          <a>
            <Image
              src={img}
              width={width}
              height={height}
              alt="categories"
              className=""
            />
          </a>
        </Link>
        <h4 className="text-center text-xs z-10 m-0 ">{item}</h4>
    
      </div>
      </>
  );
}

const styles = {
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
};
