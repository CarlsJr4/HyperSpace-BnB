import MainWrapper from '../components/core/MainWrapper';
import SubSection from '../components/core/SubSection';
import LocationCard from '../components/locations/LocationCard';
import FilterBar from '../components/locations/FilterBar';
import Pagination from '../components/locations/Pagination';

import { useState, useEffect } from 'react';

export async function getStaticProps() {
  const res = await fetch(
    'https://mockend.com/CarlsJr4/HyperSpace-BnB-mock/listings'
  );
  const dataListings = await res.json();

  return {
    props: { dataListings },
  };
}

const Locations = ({ dataListings }) => {
  const [subPage, setSubPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  useEffect(() => {
    setSubPage(1);
    setStartIndex(11 * (subPage - 1) - (subPage - 1));
    if (
      subPage === Math.ceil(dataListings.length / 10) ||
      dataListings.length <= 10
    ) {
      // Special case when remaining items are between multiples of 10 (i.e. displaying items 41-45 from prev page which was 30-40)
      setEndIndex(dataListings.length);
    } else {
      setEndIndex(10 * subPage);
    }
    window.scrollTo(0, 0);
  }, [dataListings.length, subPage]);

  let listings = dataListings
    .slice(startIndex, endIndex)
    .map(
      ({
        celestialBody,
        habName,
        id,
        image,
        location,
        rate,
        description,
        rating,
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
            rating={rating}
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
        <br />
        <p>
          Important note: Booking is currently unavailable due to the
          galaxy-wide pandemic, but you can still browse our options for when
          planetary borders re-open.
        </p>
      </SubSection>
      <SubSection heading="Current listings">
        <FilterBar />
        <div className="grid gap-5">
          <p>
            Showing {startIndex + 1}-{endIndex} of {dataListings.length} hab
            listings
          </p>
          <div className=" grid gap-8 min-h-screen">{listings}</div>
        </div>
      </SubSection>
      <Pagination
        subPage={subPage}
        data={dataListings}
        setSubPage={setSubPage}
      />
    </MainWrapper>
  );
};

export default Locations;
