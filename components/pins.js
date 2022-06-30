import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Pins({ img, item, size, width, height }) {
  return (
    <>
      <div
        className="my-4  mx-2 p-0 rounded-2xl bg-slate-400 hover:shadow-3xlg liftOffAnimation"
        style={{ ...styles[size] }}
      >
        <Link href="#">
          <a>
            <Image
              src={img}
              width={width}
              height={height}
              alt="products"
              className="object-fill  "
            />
          </a>
        </Link>
        <h4 className="text-center text-xs mb-7 ">{item}</h4>
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
