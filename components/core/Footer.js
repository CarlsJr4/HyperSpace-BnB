import {
  IoRocket,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTwitter,
} from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className=" bg-gray-800 py-6">
      <div className="flex gap-7 mx-14 md:mx-40 md:flex-row md:gap-10 flex-col">
        <div>
          <div className="flex gap-2 items-center py-3">
            <IoRocket size="1.5rem" />
            <span className="logo">HyperSpace BnB</span>
          </div>
          <div className="md:px-8"></div>
          <p>175 Space St</p>
          <p>Spacetown, Space 12345</p>
          <p>+1 234 5678</p>
        </div>
        <div>
          <p className="py-3">Follow us:</p>
          <div className="flex gap-3">
            <IoLogoFacebook size="1.5rem" />
            <IoLogoInstagram size="1.5rem" />
            <IoLogoYoutube size="1.5rem" />
            <IoLogoTwitter size="1.5rem" />
          </div>
        </div>
        <div>
          <p>Available Destinations:</p>
          <p>Luna</p>
          <p>Mercury</p>
          <p>Mars</p>
          <p>Jupiter</p>
        </div>
        <div>
          <p>Illustrations provided by undraw.co</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
