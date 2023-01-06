import Image from 'next/image';
import LinkButton from '../core/LinkButton';
import { GiRingedPlanet } from 'react-icons/gi';

export default function LocationCard({
  key,
  title,
  location,
  body,
  rate,
  src,
  desc,
}) {
  return (
    <div key={key} className="bg-gray-800 p-4 rounded-md">
      <div className="grid grid-cols-listings gap-8">
        <Image
          src={src}
          alt="This is a randomly generated image"
          width="300"
          height="300"
          className="rounded-md"
        />
        <div className="flex flex-col gap-2">
          <p className="boldText text-2xl">{title}</p>
          <p className="boldText">{location}</p>
          <p className="flex items-center gap-1">
            <GiRingedPlanet size="1.5rem" />
            <span>{body}</span>
          </p>
          <p>${rate}/night</p>
          <p>{desc}</p>
          <LinkButton href="/">More info</LinkButton>
        </div>
      </div>
    </div>
  );
}
