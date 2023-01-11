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
  const [initialData, setInitialData] = useState(data);
  const [paginationData, setpaginationData] = useState(initialData); // Second set of data so pagination can adapt based on filters
  const [includedPlanets, setIncludedPlanets] = useState([]);

  function onSelectChange(filterValue) {
    switch (filterValue) {
      case 'ratingHighest':
        setInitialData(sortBy('rating', 'descending'));
        break;
      case 'ratingLowest':
        setInitialData(sortBy('rating', 'ascending'));
        break;
      case 'priceLowest':
        setInitialData(sortBy('rate', 'ascending'));
        break;
      case 'priceHighest':
        setInitialData(sortBy('rate', 'descending'));
        break;
    }
  }

  function updateIncludedPlanets(planet) {
    if (includedPlanets.includes(planet)) {
      const newincludedPlanets = [...includedPlanets];
      const planetIndex = newincludedPlanets.indexOf(planet);
      newincludedPlanets.splice(planetIndex, 1);
      setIncludedPlanets(newincludedPlanets);
    } else {
      const newincludedPlanets = [...includedPlanets];
      newincludedPlanets.push(planet);
      setIncludedPlanets(newincludedPlanets);
    }
    setSubPage(1);
  }

  function sortBy(parameter, order) {
    const filteredArray = [...initialData];
    setSubPage(1);

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
    // Incase the user refreshes on page sub page 2 for example
    setSubPage(1);
  }, []);

  useEffect(() => {
    const updatedPaginationData = initialData.filter(item => {
      if (includedPlanets.length === 0) {
        // Default case: return everything if no filters applied
        return item.celestialBody.length > 0;
      } else {
        return includedPlanets.includes(item.celestialBody);
      }
    });
    setpaginationData(updatedPaginationData);
    setStartIndex(11 * (subPage - 1) - (subPage - 1));
    if (
      subPage === Math.ceil(paginationData.length / 10) ||
      initialData.length <= 10
    ) {
      // Special case when remaining items are between multiples of 10 (i.e. displaying items 41-45 from prev page which was 30-40)
      setEndIndex(paginationData.length);
    } else {
      setEndIndex(10 * subPage);
    }
  }, [subPage, includedPlanets, initialData, paginationData.length]);

  let listings = initialData
    .filter(item => {
      if (includedPlanets.length === 0) {
        // Default case: return everything if no filters applied
        return item.celestialBody.length > 0;
      } else {
        return includedPlanets.includes(item.celestialBody);
      }
    })
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
        <FilterBar
          onChange={onSelectChange}
          updateIncludedPlanets={updateIncludedPlanets}
        />
        <div className="grid gap-5">
          <p>
            Showing {startIndex + 1}-{endIndex} of {paginationData.length} hab
            listings
          </p>
          <div className=" grid gap-8 min-h-screen">{listings}</div>
        </div>
      </SubSection>
      <Pagination
        subPage={subPage}
        data={paginationData}
        setSubPage={setSubPage}
      />
    </MainWrapper>
  );
};

export default Locations;
