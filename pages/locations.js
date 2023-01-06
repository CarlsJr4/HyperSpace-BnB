import MainWrapper from '../components/core/MainWrapper';
import SubSection from '../components/core/SubSection';
import LocationCard from '../components/locations/LocationCard';
import FilterBar from '../components/locations/FilterBar';
import Spinner from '../components/locations/Spinner';

import { useState, useEffect } from 'react';

import Image from 'next/image';

const Locations = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://mockend.com/CarlsJr4/HyperSpace-BnB-mock/listings')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  let listings = data.map(
    ({
      celestialBody,
      habName,
      id,
      image,
      location,
      rate,
      description,
      freeBreakfast,
      indoorPool,
      petFriendly,
      vipLounge,
    }) => {
      return (
        <LocationCard
          key={id}
          title={habName}
          location={location}
          body={celestialBody}
          rate={rate}
          src={image}
          desc={description}
        />
      );
    }
  );

  return (
    <MainWrapper title="HyperSpaceBnB - Locations">
      <SubSection heading="The cosmos are at your fingertips">
        <p>
          Our resorts are currently located at Luna, Mercury, Mars, and Jupiter.
        </p>
        <p>
          Please note that commute time and habitats available will vary by
          planet (or moon).
        </p>
      </SubSection>
      <SubSection heading="Current listings">
        {/* <FilterBar /> */}
        <div className="grid gap-5">
          {isLoading ? (
            <p>Retrieving results...</p>
          ) : (
            <p>Discovered {data.length} listings:</p>
          )}
          <div className=" grid gap-8">
            {isLoading ? <Spinner /> : listings}
          </div>
        </div>
      </SubSection>
    </MainWrapper>
  );
};

export default Locations;
