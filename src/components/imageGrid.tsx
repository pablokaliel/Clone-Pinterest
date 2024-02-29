import React from 'react';

interface Image {
  url: string;
  alt: string;
  description: string;
}

interface Props {
  images: Image[];
}

const ImageGrid: React.FC<Props> = ({ images }) => {
  return (
    <div style={{columns:5, display:'inline-block', textAlign:'center' }} className='my-4 '>
      {images.map((image, index) => (
        <div key={index} className="relative mb-4 ">
          <img src={image.url} alt={image.alt} className="w-full h-full rounded-md" loading='lazy' />
          
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;