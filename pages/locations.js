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
  const data = await res.json();
  // Initial data sort by rating descending
  data.sort((a, b) => {
    if (a['rating'] < b['rating']) {
      return 1;
    }
    if (a['rating'] > b['rating']) {
      return -1;
    }
    return 0;
  });

  return {
    props: { data },
  };
}

const Locations = ({ data }) => {
  const [subPage, setSubPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [filteredData, setFilteredData] = useState(data);

  function onSelectChange(filterValue) {
    switch (filterValue) {
      case 'ratingHighest':
        setFilteredData(dataFilter('rating', 'descending'));
        break;
      case 'ratingLowest':
        setFilteredData(dataFilter('rating', 'ascending'));
        break;
      case 'priceLowest':
        setFilteredData(dataFilter('rate', 'ascending'));
        break;
      case 'priceHighest':
        setFilteredData(dataFilter('rate', 'descending'));
        break;
    }
  }

  function dataFilter(parameter, order) {
    const filteredArray = [...filteredData];
    setSubPage(1);
    window.scrollTo(0, 0);

    if (order === 'descending') {
      filteredArray.sort((a, b) => {
        if (a[parameter] < b[parameter]) {
          return 1;
        }
        if (a[parameter] > b[parameter]) {
          return -1;
        }
        return 0;
      });
      return filteredArray;
    } else {
      filteredArray.sort((a, b) => {
        if (a[parameter] < b[parameter]) {
          return -1;
        }
        if (a[parameter] > b[parameter]) {
          return 1;
        }
        return 0;
      });
      return filteredArray;
    }
  }

  useEffect(() => {
    setSubPage(1);
  }, []);

  useEffect(() => {
    setStartIndex(11 * (subPage - 1) - (subPage - 1));
    if (
      subPage === Math.ceil(filteredData.length / 10) ||
      filteredData.length <= 10
    ) {
      // Special case when remaining items are between multiples of 10 (i.e. displaying items 41-45 from prev page which was 30-40)
      setEndIndex(filteredData.length);
    } else {
      setEndIndex(10 * subPage);
    }
    window.scrollTo(0, 0);
  }, [subPage, filteredData.length]);

  let listings = filteredData
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
        <FilterBar onChange={onSelectChange} />
        <div className="grid gap-5">
          <p>
            Showing {startIndex + 1}-{endIndex} of {filteredData.length} hab
            listings
          </p>
          <div className=" grid gap-8 min-h-screen">{listings}</div>
        </div>
      </SubSection>
      <Pagination
        subPage={subPage}
        data={filteredData}
        setSubPage={setSubPage}
      />
    </MainWrapper>
  );
};

export default Locations;
