import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainWrapper = ({ title, metaDesc = 'Built with Next.js', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mx-40">{children}</main>
      <Footer />
    </>
  );
};

export default MainWrapper;
