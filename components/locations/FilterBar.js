import FilterButton from './FilterButton';

const FilterBar = ({ onChange, updateIncludedPlanets }) => {
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
          <div className="mb-2">Filters:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:max-w-max gap-4">
            <FilterButton
              updateIncludedPlanets={updateIncludedPlanets}
              planet="Luna"
            >
              Luna
            </FilterButton>
            <FilterButton
              updateIncludedPlanets={updateIncludedPlanets}
              planet="Mercury"
            >
              Mercury
            </FilterButton>
            <FilterButton
              updateIncludedPlanets={updateIncludedPlanets}
              planet="Mars"
            >
              Mars
            </FilterButton>
            <FilterButton
              updateIncludedPlanets={updateIncludedPlanets}
              planet="Jupiter"
            >
              Jupiter
            </FilterButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
