import MainWrapper from '../components/core/MainWrapper';
import SubSection from '../components/core/SubSection';
import LocationCard from '../components/locations/LocationCard';
import FilterBar from '../components/locations/FilterBar';
import Spinner from '../components/locations/Spinner';

import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

import { useState, useEffect } from 'react';

import Image from 'next/image';

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
    setEndIndex(10 * subPage);
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
      {/* Pagination */}
      <div className="flex items-center gap-4 mb-10">
        <button
          aria-label="previous page of locations"
          disabled={subPage === 1}
          onClick={() => setSubPage(subPage - 1)}
          className={`p-3 rounded-full  ${
            subPage === 1
              ? 'bg-gradient-to-r from-gray-400 to-gray-400'
              : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-110 transition-all'
          }`}
        >
          <IoChevronBack />
        </button>
        <p>
          Page {subPage} of {Math.floor(data.length / 10)}
        </p>
        <button
          aria-label="next page of locations"
          disabled={subPage === Math.floor(data.length / 10)}
          onClick={() => setSubPage(subPage + 1)}
          className={`p-3 rounded-full  ${
            subPage === Math.floor(data.length / 10)
              ? 'bg-gradient-to-r from-gray-400 to-gray-400'
              : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-110 transition-all'
          }`}
        >
          <IoChevronForward />
        </button>
      </div>
    </MainWrapper>
  );
};

export default Locations;
