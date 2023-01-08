import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

export default function Pagination({ data, subPage, setSubPage }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <button
        aria-label="previous page of locations"
        disabled={subPage === 1}
        onClick={() => setSubPage(subPage - 1)}
        className={`p-3 rounded-full  ${
          subPage === 1
            ? 'bg-gradient-to-r from-gray-400 to-gray-400'
            : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-110 transition-all'
        }`}
      >
        <IoChevronBack />
      </button>
      <p>
        Page {subPage} of {Math.ceil(data.length / 10)}
      </p>
      <button
        aria-label="next page of locations"
        disabled={subPage === Math.ceil(data.length / 10)} // subPage is 4, Math.ceil(45 / 10) = 5, but we don't want this page to be disabled just yet, we need to round up
        onClick={() => setSubPage(subPage + 1)}
        className={`p-3 rounded-full  ${
          subPage === Math.ceil(data.length / 10)
            ? 'bg-gradient-to-r from-gray-400 to-gray-400'
            : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-110 transition-all'
        }`}
      >
        <IoChevronForward />
      </button>
    </div>
  );
}
