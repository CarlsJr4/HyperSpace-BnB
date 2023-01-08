const FilterBar = ({ onChange }) => {
  // Todo: Update dataset based on filters
  // Todo: Update pagination based on filters

  return (
    <>
      <div className="flex flex-col gap-6 mb-6">
        <div>
          <label htmlFor="listings">
            <span className="mr-2">Sort by:</span>
            <select
              name="listings"
              id="listings"
              className="text-black rounded-md p-1"
              onChange={e => onChange(e.target.value)}
            >
              <option value="ratingHighest" className="text-black">
                Rating (high to low)
              </option>
              <option value="ratingLowest" className="text-black">
                Rating (low to high)
              </option>
              <option value="priceLowest" className="text-black">
                Price (low to high)
              </option>
              <option value="priceHighest" className="text-black">
                Price (high to low)
              </option>
            </select>
          </label>
        </div>
        <div>
          <div>Filters:</div>
          <div className="flex gap-6">
            <button>Luna</button>
            <button>Mercury</button>
            <button>Mars</button>
            <button>Jupiter</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
