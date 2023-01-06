import MainWrapper from '../components/MainWrapper';
import Link from '../components/Link';
import LinkButton from '../components/LinkButton';
import Card from '../components/Card';
import Image from 'next/image';
import SubSection from '../components/SubSection';

import plant from '../assets/images/plant.svg';
import rocket from '../assets/images/rocket.svg';
import robot from '../assets/images/robot.svg';
import astronaut from '../assets/images/astronaut.svg';
import location from '../assets/images/location.svg';

export default function Home() {
  return (
    <MainWrapper title="HyperSpace BnB - Home">
      <section className="grid grid-cols-1 xl:grid-cols-hero items-center justify-items-end gap-6">
        <div>
          <h1 className="text-6xl my-5">Your second home amongst the stars</h1>
          <p className="text-lg">
            We provide the best spacecation experience in the galaxy
          </p>
          <LinkButton href="locations">Explore our habs</LinkButton>
        </div>
        <div>
          <Image src={astronaut} width={900} alt="Astronaut in space" />
        </div>
      </section>
      <SubSection heading="Welcome to the 22nd century">
        <div className="flex flex-col lg:flex-row gap-8 my-12 items-center">
          <Image
            src={location}
            width={300}
            alt="Two people using a telescope to look at the night sky"
          />
          <div>
            <p>Humankind has evolved, so your vacations should too.</p>
            <br />
            <p>
              With the development of advanced sub-light propulsion systems,
              space tourism across the solar system is at an all time high.
            </p>
            <p>
              We developed HyperSpace BnB to ensure you have the best space
              vacation possible. We currently have habs located on Luna,
              Mercury, Mars, and Jupiter
            </p>
            <p>
              Book with us today and discover why so many people trust us to
              deliver a high class space-travel experience.
            </p>
          </div>
        </div>
      </SubSection>
      <SubSection heading="Why HyperSpace BnB?">
        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-end">
          <Card
            heading="100% solar power"
            text="All of our modular resorts rely on renewable energy and have zero
                carbon footprint."
            src={plant}
            imgSize={200}
            alt="Hands holding a plant"
          />
          <Card
            heading="Service robots"
            text="Our award-winning advanced service robots accomodate to your every need."
            src={robot}
            imgSize={300}
            alt="Woman charging a robot"
          />
          <Card
            heading="Autonomous transport"
            text="  Our autonomous hyperspace vessels will ensure a safe commute to
                your target destination and back."
            src={rocket}
            imgSize={200}
            alt="Rocket in space"
          />
        </div>
      </SubSection>
      <LinkButton href="locations">Reserve a hab today</LinkButton>
    </MainWrapper>
  );
}
