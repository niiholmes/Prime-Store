import React from 'react';
import Pins from '../components/pins';
import data from '../utils/data';

export default function PinLayout() {
  return (
    <div style={pin_container} className="grid grid-cols-2 w-screen m-0 p-0 ">
      {data.categories.map((category) => (
        <Pins
          img={category.img}
          item={category.item}
          key={category.id}
          size={category.size}
          width={category.width}
          height={category.height}
        />
      ))}
    </div>
  );
}

const pin_container = {
  gridAutoRows: '10px',
};
