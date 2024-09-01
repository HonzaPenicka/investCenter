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
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
          <div className="bg-white rounded-lg shadow-lg px-4 py-8 w-full z-60 max-w-lg mx-4 grid">
            <button
              className="absolute right-8 top-8 text-3xl"
              onClick={toggle}
            >
              &#0215;
            </button>

            <div className="flex text-2xl justify-center text-green-300 line-through line-clamp-4">
              Flipování nemovitostí
            </div>

            <div className="flex flex-col gap-5 p-5">
              <input
                className="outline-none border-green-300 border p-2 rounded-lg"
                type="text"
                placeholder="Jméno a příjmení"
              />

              <input
                className="outline-none border-green-300 border p-2 rounded-lg"
                type="tel"
                name=""
                id=""
                placeholder="Telefonní číslo"
              />

              <input
                className="outline-none border-green-300 border p-2 rounded-lg"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />

              <input
                className="outline-none border-green-300 border p-2 rounded-lg"
                type="text"
                placeholder="Společnost"
              />

              <input
                className="outline-none border-green-300 border p-2 rounded-lg"
                type="text"
                placeholder="Kapitál"
              />

              <Dropdown />

              <div className="flex justify-center pt-4">
                <button className="uppercase font-bold bg-green-300 hover:bg-green-500 rounded-lg text-xl py-4 px-8">
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
