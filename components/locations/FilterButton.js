import { useState } from 'react';

import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

export default function FilterButton({ children }) {
  const [isActive, setActive] = useState(false);

  return (
    <button
      aria-pressed={isActive}
      onClick={() => setActive(!isActive)}
      className={`${isActive ? 'border-opacity-100' : 'border-opacity-20'}
			border-fuchsia-500 border-2 rounded-md px-6 py-2 hover:scale-110 transition-all flex items-center justify-center gap-2`}
    >
      {isActive ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      {children}
    </button>
  );
}
