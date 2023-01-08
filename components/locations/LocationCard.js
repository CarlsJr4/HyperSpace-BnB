import Image from 'next/image';
import LinkButton from '../core/LinkButton';
import { GiRingedPlanet } from 'react-icons/gi';

// TODO: Pagination

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
    <div key={key} className="bg-[#25192e] p-4 rounded-md">
      <div className="grid grid-cols-1 lg:grid-cols-listings gap-8">
        <Image
          src={src}
          alt="This is a randomly generated image"
          width="300"
          height="300"
          className="rounded-md justify-self-center lg:justify-self:start"
        />
        <div className="flex flex-col gap-2">
          <p className="boldText text-2xl">{title}</p>
          <p className="boldText">{location}</p>
          <p
            className={`
							${body === 'Mars' ? 'bg-red-500' : ''}
							${body === 'Luna' ? 'bg-white' : ''}
							${body === 'Jupiter' ? 'bg-blue-500' : ''}
							${body === 'Mercury' ? 'bg-green-500' : ''}
              flex items-center gap-1 bg-opacity-20 px-5 py-2 rounded-lg max-w-max
            `}
          >
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
