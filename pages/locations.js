import MainWrapper from '../components/core/MainWrapper';
import SubSection from '../components/core/SubSection';
import LocationCard from '../components/locations/LocationCard';
import FilterBar from '../components/locations/FilterBar';

const Locations = () => {
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
        <p>
          Our habs are currently under construction, but you can preview what we
          have to offer in the future here:
        </p>
        <FilterBar />
        <div className="grid gap-5">
          {/* Use mockend to fetch data from your fake API and render a list of location cards */}
          <LocationCard text="location1" />
          <LocationCard text="location1" />
          <LocationCard text="location1" />
          <LocationCard text="location1" />
          <LocationCard text="location1" />
        </div>
      </SubSection>
    </MainWrapper>
  );
};

export default Locations;
