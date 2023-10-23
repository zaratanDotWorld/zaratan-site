// import { useState } from 'react';

import Image from 'next/image';

import { Carousel } from 'react-bootstrap';

export default function ({ images, height, alt }) {
  // const [index, setIndex] = useState(0);

  return (
    <Carousel
      fade
      interval={2400}
      variant="dark"
      indicators={false}
      // controls={false}
      // activeIndex={index}
      // onClick={() => setIndex((index + 1) % images.length)}
    >
      {
        images.map((imageUrl, i) =>
        <Carousel.Item
          key={i}
          style={{position:"relative", height:`${height}px`}}
        >
          <Image
            fill
            src={imageUrl}
            alt={alt}
            style={{objectFit:"contain"}}
          />
          </Carousel.Item>
        )
      }
    </Carousel>
  )
}
