import Image from 'next/image';

import { Carousel } from 'react-bootstrap';

export default function ({ images }) {
  return (
    <Carousel fade interval={3600} controls={false} indicators={false}>
      {
        images.map((imageUri, i) =>
          <Carousel.Item key={i}>
            <Image
              className="rounded border border-3"
              src={imageUri}
              alt={imageUri}
              width={316}
              height={560}
              style={{ margin: "auto", display: "block" }}
            />
          </Carousel.Item>
        )
      }
    </Carousel>
  )
}
