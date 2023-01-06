import Link from 'next/link';

const LinkButton = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-3 px-12 rounded-full my-10 hover:scale-110 transition-all block max-w-max"
    >
      <span>{children}</span>
    </Link>
  );
};

export default LinkButton;
