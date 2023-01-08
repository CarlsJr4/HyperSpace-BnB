import MainWrapper from '../components/core/MainWrapper';
import SubSection from '../components/core/SubSection';
import LocationCard from '../components/locations/LocationCard';
import FilterBar from '../components/locations/FilterBar';
import Spinner from '../components/locations/Spinner';
import Pagination from '../components/locations/Pagination';

import { useState, useEffect } from 'react';

const Locations = () => {
  const [data, setData] = useState([]);
  const [subPage, setSubPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  useEffect(() => {
    setLoading(true);
    setSubPage(1);
    fetch('https://mockend.com/CarlsJr4/HyperSpace-BnB-mock/listings')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setStartIndex(11 * (subPage - 1) - (subPage - 1));
    if (subPage === Math.ceil(data.length / 10) || data.length <= 10) {
      // Special case when remaining items are between multiples of 10 (i.e. displaying items 41-45 from prev page which was 30-40)
      setEndIndex(data.length);
    } else {
      setEndIndex(10 * subPage);
    }
    window.scrollTo(0, 0);
  }, [subPage]);

  let listings = data
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
            <p>
              Showing {startIndex + 1}-{endIndex} of {data.length} hab listings
            </p>
          )}
          <div className=" grid gap-8 min-h-screen">
            {isLoading ? <Spinner /> : listings}
          </div>
        </div>
      </SubSection>
      <Pagination subPage={subPage} data={data} setSubPage={setSubPage} />
    </MainWrapper>
  );
};

export default Locations;
