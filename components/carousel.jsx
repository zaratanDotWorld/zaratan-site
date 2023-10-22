import Image from 'next/image';

import { Carousel } from 'react-bootstrap';

export default function ({ images }) {
  return (
    <Carousel fade interval={3600} controls={false} indicators={false}>
      {
        images.map((imageUrl, i) =>
        <Carousel.Item key={i} style={{position:"relative", height:"800px"}}>
        <Image
              fill
              src={imageUrl}
              alt={imageUrl}
              style={{ objectFit: "contain" }}
              />
          </Carousel.Item>
        )
      }
    </Carousel>
  )
}
