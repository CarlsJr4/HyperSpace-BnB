import Image from 'next/image';

export default function LocationCard({ src, imgSize, alt, heading, text }) {
  return (
    <div className="max-w-sm">
      <Image src={src} width={imgSize} alt={alt} />
      <p className="text-lg font-headings my-4">{heading}</p>
      <p>{text}</p>
    </div>
  );
}
