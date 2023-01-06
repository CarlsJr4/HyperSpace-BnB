import Image from 'next/image';
import MainWrapper from '../components/MainWrapper';
import SubSection from '../components/SubSection';
import rocketSchematic from '../assets/images/rocketSchematic.svg';
import robot2 from '../assets/images/robot2.svg';

const Schematics = () => {
  return (
    <MainWrapper title="HyperSpaceBnB - Schematics">
      <SubSection heading="Kerbal IX HyperSpace Vessel">
        <p>
          Our reusable workhorse interplanetary transit vessel. Capable of
          interplanetary travel with maximum comfort and safety.
        </p>
        <p>
          Highly capable advanced AI practically flies the ship by itself (with
          human supervision).
        </p>
        <br />
        <p>Capacity: 10</p>
        <p>Max speed: ~20,000 kerbals/hour</p>
        <p>Fuel capacity: ~500 kergallons</p>
        <p>Max operating distance: ~5,000,000 kers</p>
        <p>Resistant to all types of kerbin radiation rays</p>
        <p>Five star safety rating</p>

        <div className="flex py-10">
          <Image
            src={rocketSchematic}
            width={400}
            alt="Diagram of the Kerbal XI HyperSpace Vessel"
          />
          <div className="hidden sm:block">
            <p className="schematic relative min-w-max">Emergency paracute</p>
            <p className="schematic relative mt-10">Explorer pod</p>
            <p className="schematic relative mt-60">Engineering bay</p>
            <p className="schematic relative mt-28">External fuel pylons</p>
            <p className="schematic relative mt-72">
              Heat resistant sub-light thrusters
            </p>
          </div>
        </div>
      </SubSection>
      <SubSection heading="Assistant v4.0">
        <p>
          Highly capable AI-powered butler. Can assist in any human task from
          cooking to making your bed every morning.
        </p>
        <br />
        <p>Power source: Kerbin-ion batteries + solar energy</p>
        <p>Battery life (batteries only): 3 weeks</p>
        <p>Recharge time: 2 hours</p>
        <p>Height: 4 meters</p>
        <br />
        <Image
          src={robot2}
          width={300}
          alt="Visual of the Assisant v4.0 robot butler"
        />
      </SubSection>
    </MainWrapper>
  );
};

export default Schematics;
