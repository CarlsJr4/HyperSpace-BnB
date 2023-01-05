import StyledLink from './Link';
import { IoRocket } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav>
      <ul className="grid grid-cols-navbar gap-10 my-10 mx-20">
        <li className="flex gap-2 items-center">
          <IoRocket size="1.5rem" />
          HyperSpace BnB
        </li>
        <li>Packages</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
