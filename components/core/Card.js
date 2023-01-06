import Image from 'next/image';

const Card = ({ heading, text, src, alt = 'Card image', imgSize }) => {
  return (
    <div className="max-w-sm">
      <Image src={src} width={imgSize} alt={alt} />
      <p className="text-lg font-headings my-4">{heading}</p>
      <p>{text}</p>
    </div>
  );
};

export default Card;
