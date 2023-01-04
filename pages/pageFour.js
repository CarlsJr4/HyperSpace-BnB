import SideBar from '../components/SideBar';
import StyledLink from '../components/StyledLink';

const PageFour = () => {
  return (
    <>
      <SideBar></SideBar>
      <div className="ml-20">
        <p>Hello World</p>
        <StyledLink href="/">Home</StyledLink>
      </div>
    </>
  );
};

export default PageFour;
