import Image from 'next/image';
import { GiRingedPlanet } from 'react-icons/gi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function LocationCard({
  title,
  location,
  body,
  rate,
  src,
  desc,
  rating,
}) {
  return (
    <div className="bg-[#25192e] p-4 rounded-md">
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
          <div className="flex py-2">
            {Array.from({ length: rating }, (_, i) => (
              <AiFillStar key={`${title}-filledStar-${i}`} />
            ))}
            {Array.from({ length: 5 - rating }, (_, i) => (
              <AiOutlineStar key={`${title}-unfilledStar-${i}`} />
            ))}
          </div>
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
        </div>
      </div>
    </div>
  );
}
