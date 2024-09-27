import { FunctionComponent, useCallback, useState } from 'react';
import { Dropdown } from './dropdown';

export const ModalFormDialog: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50 transition-none">
          <div className="relative bg-white rounded-lg shadow-lg px-4 py-8 w-full z-60 max-w-lg mx-4 grid">
            <button
              className="absolute right-4 top-4 text-3xl"
              onClick={toggle}
            >
              &#0215;
            </button>
            <div className="flex-col text-2xl justify-start text-green-300 gap-1">
              <span className="line-through line-clamp-4">
                Investorské centrum
              </span>
              <span className="list-none line-clamp-none">Jiřího Krupičky</span>
            </div>
            <div className="flex flex-col gap-5 py-8">
              <input
                className="outline-none border-green-300 border p-2 rounded-lg focus:border-purple-300"
                type="text"
                placeholder="Jméno a příjmení"
              />

              <input
                className="outline-none border-green-300 border p-2 rounded-lg focus:border-purple-300"
                type="tel"
                name=""
                id=""
                placeholder="Telefonní číslo"
              />

              <input
                className="outline-none border-green-300 border p-2 rounded-lg focus:border-purple-300"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />

              <input
                className="outline-none border-green-300 border p-2 rounded-lg focus:border-purple-300"
                type="text"
                placeholder="Společnost"
              />

              <input
                className="outline-none border-green-300 border p-2 rounded-lg focus:border-purple-300"
                type="text"
                placeholder="Kapitál"
              />

              <Dropdown />

              <div className="flex justify-center pt-4">
                <button className="bg-green-500 hover:bg-green-600 text-white uppercase font-bold py-4 px-12 rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl">
                  chci mentoring
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
