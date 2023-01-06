import MainWrapper from '../components/MainWrapper';
import SubSection from '../components/SubSection';

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
        <p>Search all listings here:</p>
      </SubSection>
    </MainWrapper>
  );
};

export default Locations;
