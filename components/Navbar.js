import StyledLink from './Link';
import { IoRocket } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav>
      <ul className="grid grid-cols-navbar gap-10 my-10 mx-20">
        <li>
          <StyledLink href="/">
            <div className="flex gap-2 items-center">
              <IoRocket size="1.5rem" />
              <span className="logo">HyperSpace BnB</span>
            </div>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="packages">Packages</StyledLink>
        </li>
        <li>
          <StyledLink href="schematics">Schematics</StyledLink>
        </li>
        <li>
          <StyledLink href="login">Login</StyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
