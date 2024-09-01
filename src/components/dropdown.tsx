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
        className="px-4 py-2 w-full outline-none border-green-300 border p-2 rounded-lg"
        placeholder={selectedOption}
      />

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <li className="px-4 py-2 hover:bg-gray-100">
            <button onClick={() => handleOptionClick('Ano')}>Ano</button>{' '}
          </li>

          <li className="px-4 py-2 hover:bg-gray-100">
            <button onClick={() => handleOptionClick('Ne')}>Ne</button>{' '}
          </li>
        </ul>
      )}
    </div>
  );
};
