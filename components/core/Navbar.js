import StyledLink from './Link';
import { IoRocket } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav>
      <ul className="grid grid-cols-1 sm:grid-cols-navbar gap-5 sm:gap-10 my-10 mx-5 md:mx-20">
        <li className="justify-self-start">
          <StyledLink href="/">
            <span className="flex gap-2">
              <IoRocket size="1.5rem" />
              <span className="logo">HyperSpace BnB</span>
            </span>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="locations">Locations</StyledLink>
        </li>
        <li>
          <StyledLink href="schematics">Schematics</StyledLink>
        </li>
        {/* <li>
          <StyledLink href="login">Login</StyledLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
