import { Triangle } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="#d148ef"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Spinner;
