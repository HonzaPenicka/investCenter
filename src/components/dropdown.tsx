import { FunctionComponent, useCallback, useState } from 'react';

export const Dropdown: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    'Zkušenost s flipováním'
  );

  const toggle = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <input
        onClick={toggle}
        className="px-2 py-2 w-full outline-none border-green-300 border rounded-lg"
        placeholder={selectedOption}
        value={selectedOption}
        readOnly
      />

      {isOpen && (
        <ul className="absolute left-0 mt-2 z-30 w-48 bg-white border rounded-lg shadow-lg">
          <li
            className="px-4 py-2 hover:bg-gray-100"
            onClick={() => handleOptionClick('Ano')}
          >
            <button>Ano</button>
          </li>

          <li
            className="px-4 py-2 hover:bg-gray-100"
            onClick={() => handleOptionClick('Ne')}
          >
            <button>Ne</button>
          </li>
        </ul>
      )}
    </div>
  );
};
