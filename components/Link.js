import Link from 'next/link';

const StyledLink = ({ children, href }) => {
  return (
    <Link href={href} className="text-blue-300 underline">
      {children}
    </Link>
  );
};

export default StyledLink;
