import Link from 'next/link';

const StyledLink = ({ children, href }) => {
  return (
    <Link href={href} className="hover:underline">
      {children}
    </Link>
  );
};

export default StyledLink;
