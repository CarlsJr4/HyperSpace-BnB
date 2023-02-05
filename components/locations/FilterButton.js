import { useState } from 'react';

import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

export default function FilterButton({
  children,
  updateIncludedPlanets,
  planet,
}) {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
    updateIncludedPlanets(planet);
  }

  return (
    <button
      aria-pressed={isActive}
      onClick={() => handleClick()}
      className={`${isActive ? 'border-opacity-100' : 'border-opacity-20'}
			border-fuchsia-500 border-2 rounded-md px-6 py-2 hover:scale-110 transition-all flex items-center justify-start sm:justify-center gap-2`}
    >
      {isActive ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      {children}
    </button>
  );
}
