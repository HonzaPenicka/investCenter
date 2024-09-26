import { useCallback, useState } from 'react';

import { ModalFormDialog } from '@/components/modal';
import { Burger } from '@/icons/burger';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const toggleModal = useCallback(() => {
    setIsModalOpen((state) => !state);
  }, []);

  const togglePopup = () => {
    setIsPopupOpen((prevState) => !prevState); // Přepíná stav popupu
  };

  const data = {
    title: 'Investorské centrum Jiřího Krupičky',
  };

  return (
    <main className="container flex-col px-4 mx-auto">
      {/* Mobile Menu */}
      <nav className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-20 flex justify-between items-center px-6 py-2">
        <div className="flex-col text-2xl justify-start text-green-300 gap-1">
          <span className="line-through line-clamp-4">Investorské centrum</span>
          <span className="list-none line-clamp-none">Jiřího Krupičky</span>
        </div>{' '}
        <div>
          <Burger onClick={toggle} className="cursor-pointer" />
        </div>
        {open && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-30">
            <div className="flex flex-col items-center gap-6 py-6 px-8 text-lg font-medium text-gray-700">
              <button
                className="hover:text-green-500 transition duration-200"
                onClick={toggleModal}
              >
                Chci domluvit službu
              </button>
              <button
                className="hover:text-green-500 transition duration-200"
                onClick={toggleModal}
              >
                Chci si domluvit schůzku
              </button>
              <button
                className="hover:text-green-500 transition duration-200"
                onClick={toggleModal}
              >
                Mentoring nemovitostí
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex justify-between items-center bg-white w-full py-2 px-10 shadow-md fixed top-0 left-0 z-20">
        <div className="flex-col text-2xl justify-start text-green-300 gap-1">
          <span className="line-through line-clamp-4">Investorské centrum</span>
          <span className="list-none line-clamp-none">Jiřího Krupičky</span>
        </div>

        <div className="flex gap-8 text-lg font-medium">
          <button
            className="hover:text-green-500 transition duration-200"
            onClick={toggleModal}
          >
            Chci domluvit službu
          </button>

          <button
            className="hover:text-green-500 transition duration-200"
            onClick={toggleModal}
          >
            Chci si domluvit schůzku
          </button>

          <button
            className="hover:text-green-500 transition duration-200"
            onClick={toggleModal}
          >
            Mentoring nemovitostí
          </button>
        </div>

        {isModalOpen && <ModalFormDialog />}
      </nav>

      <div className="container flex justify-center pt-32">
        <div className="grid gap-10 justify-center text-center">
          <div className="flex flex-col items-center justify-center text-center bg-white text-gray-800 relative">
            {/* Floating Box for Name */}
            <div className="bg-purple-600 text-white font-bold text-3xl rounded-full px-12 py-4 shadow-lg mb-10">
              Jiří Krupička
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mb-8">
              Učíme vás, jak dosáhnout finanční svobody prostřednictvím
              nemovitostí
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl font-light max-w-3xl mb-10">
              Naučte se, jak efektivně investovat a dosáhnout vysokých výnosů s
              našimi experty.
            </p>

            {/* Call to Action Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white uppercase font-bold py-4 px-12 rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl">
              Chci se naučit investovat
            </button>

            {/* Supporting Message */}
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-12 max-w-3xl">
              Vytvoříme s vámi progresivní portfolio pro{' '}
              <br className="hidden md:block" /> váš pohodlný život do 3 let
            </div>
          </div>

          <div className="text-2xl font-bold text-pretty">
            Výsledky TOP flipařů z mentoringu
          </div>

          <div className="border rounded-lg border-purple-300 py-4 text-center mx-4 lg:mx-20">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th>Účastník mentoringu</th>
                  <th>Částka</th>
                  <th>Časová investice</th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-purple-300 flex-col justify-between">
                  <td className="py-2">J.P.</td>
                  <td className="py-2">600 000 Kč</td>
                  <td className="py-2">1 měsíc</td>
                </tr>
                <tr>
                  <td className="py-2">M.R.</td>
                  <td className="py-2">300 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">V.S.</td>
                  <td className="py-2">880 000 Kč</td>
                  <td className="py-2">2 měsíce</td>
                </tr>
                <tr>
                  <td className="py-2">A.B.</td>
                  <td className="py-2">450 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">R.F.</td>
                  <td className="py-2">520 000 Kč</td>
                  <td className="py-2">2 měsíce</td>
                </tr>
                <tr>
                  <td className="py-2">P.N.</td>
                  <td className="py-2">120 000 Kč</td>
                  <td className="py-2">1 den</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">D.L.</td>
                  <td className="py-2">270 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr>
                  <td className="py-2">O.M.</td>
                  <td className="py-2">100 000 Kč</td>
                  <td className="py-2">5 měsíců</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">L.T.</td>
                  <td className="py-2">1 200 000 Kč</td>
                  <td className="py-2">1 měsíc</td>
                </tr>
                <tr>
                  <td className="py-2">K.V.</td>
                  <td className="py-2">750 000 Kč</td>
                  <td className="py-2">3 týdny</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">Z.B.</td>
                  <td className="py-2">870 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr>
                  <td className="py-2">E.D.</td>
                  <td className="py-2">1 050 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">T.C.</td>
                  <td className="py-2">620 000 Kč</td>
                  <td className="py-2">2 měsíce</td>
                </tr>
                <tr>
                  <td className="py-2">G.J.</td>
                  <td className="py-2">720 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">N.P.</td>
                  <td className="py-2">1 400 000 Kč</td>
                  <td className="py-2">4 dny</td>
                </tr>
                <tr>
                  <td className="py-2">R.K.</td>
                  <td className="py-2">480 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white rounded-lg shadow-lg flex flex-col gap-6 p-8 text-left">
                <div className="text-3xl font-bold text-green-600">
                  Co nabízíme
                </div>
                <p className="text-lg text-gray-700">
                  Intenzivní roční mentoring zaměřený na investice do
                  nemovitostí a jejich efektivní správu.
                </p>
                <p className="text-lg text-gray-700">
                  Skupinové mastermind setkání 4x ročně v Praze s našimi
                  investičními odborníky.
                </p>
                <p className="text-lg text-gray-700">
                  Kompletní vzdělání od základů až po pokročilé strategie,
                  včetně dodání konkrétních investičních příležitostí a
                  vyjednávání lepších podmínek.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg flex flex-col gap-6 p-8 text-left">
                <div className="text-3xl font-bold text-green-600">
                  Pro koho
                </div>
                <p className="text-lg text-gray-700">
                  Pro ambiciózní investory, kteří chtějí dosáhnout finanční
                  nezávislosti v horizontu 2-3 let.
                </p>
                <p className="text-lg text-gray-700">
                  Náš unikátní přístup vám pomůže zkrátit cestu k vašim
                  investičním cílům a dosáhnout nadprůměrných výsledků.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg flex flex-col gap-6 p-8 text-left">
                <div className="text-3xl font-bold text-green-600">
                  Cena a podmínky
                </div>
                <p className="text-lg text-gray-700">
                  Minimální vstupní kapitál je 1.000.000 Kč (bez možnosti
                  financování hypotékou).
                </p>
                <p className="text-lg text-gray-700">
                  Provize 10% z čistého zisku po odečtení všech nákladů
                  spojených s transakcí.
                </p>
                <p className="text-lg text-gray-700">
                  Roční poplatek za účast v programu a přístup ke všem
                  materiálům.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 py-8 rounded-lg shadow-lg">
              <div className="container mx-auto px-6">
                <div className="grid gap-12 text-left md:text-center">
                  {/* Section 1: Why Choose Us */}
                  <div>
                    <h2 className="font-extrabold text-3xl text-purple-700 mb-6 text-left md:text-center">
                      Proč si vybrat náš mentoring?
                    </h2>
                    <p className="text-lg text-gray-700">
                      Zajišťujeme vám přístup k exkluzivním investičním
                      příležitostem, které vám pomohou dosáhnout finanční
                      nezávislosti a dlouhodobého růstu.
                    </p>
                  </div>

                  {/* Section 2: How We Help You Succeed */}
                  <div>
                  <h2 className="font-extrabold text-3xl text-purple-700 mb-6 text-left md:text-center">
                  Jak vám pomůžeme uspět?
                    </h2>
                    <div className="text-lg text-gray-700 space-y-5">
                      <p>
                        Pravidelný přísun výhodných investičních příležitostí
                        (podíly, celkové nemovitosti) po dobu trvání mentoringu,
                        abyste vždy měli na výběr z nejlepších možností.
                      </p>
                      <p>
                        Profesionální koučink a podpora při vyjednávání lepších
                        podmínek nákupu nemovitostí kdekoli v ČR, abyste získali
                        nejlepší možný obchod.
                      </p>
                      <p>
                        Mastermind skupinová setkání 4x za rok v Praze, kde se
                        setkáte s dalšími úspěšnými investory, získáte cenné
                        kontakty a zpětnou vazbu.
                      </p>
                      <p>
                        Intenzivní školení o tom, jak získat investory a
                        efektivně naraisovat kapitál pro vaše projekty.
                      </p>
                    </div>
                  </div>

                  {/* Section 3: What You Gain */}
                  <div>
                  <h2 className="font-extrabold text-3xl text-purple-700 mb-6 text-left md:text-center">
                  Co od nás získáte?
                    </h2>
                    <div className="text-lg text-gray-700 space-y-5">
                      <p>
                        Detailní strategii a individuální plán, jak dosáhnout
                        vašich investičních cílů.
                      </p>
                      <p>
                        Přístup k našemu ověřenému know-how, praktickým
                        nástrojům a šablonám, které vám pomohou maximalizovat
                        návratnost investic.
                      </p>
                      <p>
                        Trvalou podporu a mentoring, který vám pomůže překonat
                        výzvy a dosáhnout úspěchu ve flipování nemovitostí.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-10 max-w-2xl text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
                  Jste připraveni investovat do nemovitostí a dosáhnout nových
                  výšin?
                </h2>

                <p className="text-lg text-gray-600 mb-10">
                  Přidejte se k nám a využijte příležitosti, která změní váš
                  život!
                </p>

                {/* CTA Button */}
                <button className="bg-green-500 text-white font-semibold uppercase py-4 px-12 rounded-md text-lg transition-transform transform hover:scale-105 hover:bg-green-600">
                  Chci mentoring
                </button>
              </div>
            </div>

            <div className="grid gap-8 lg:justify-center">
              <div className="text-5xl font-extrabold text-center text-gray-800">
                Témata workshopu a mentoringu
              </div>

              <div className="border rounded-xl shadow-lg grid lg:max-w-screen-xl text-left p-4 md:p-8 font-medium text-lg gap-16 bg-white">
                {/* First Column */}
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
                  <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-purple-600 text-left mb-4">
                  Proč investovat do flipování nemovitostí?
                    </div>
                    <div className="text-gray-700">
                      <p>
                        Objevte důvody, proč je flipování nemovitostí jednou z
                        nejziskovějších a nejdynamičtějších forem investování na
                        trhu.
                      </p>
                      <p className="mt-4">
                        Získejte hlubší porozumění trhu s nemovitostmi a naučte
                        se, jak efektivně využít své zdroje pro dosažení
                        finanční nezávislosti.
                      </p>
                      <p className="mt-4">
                        Proč je důležité mít správné nástroje a know-how k tomu,
                        abyste se stali úspěšným investorem?
                      </p>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-purple-600 text-left mb-4">
                  Jak dosáhnout úspěchu ve flipování nemovitostí?
                    </div>
                    <div className="text-gray-700">
                      <p>
                        Naučte se, jak analyzovat trh, vyhledávat a nakupovat
                        nemovitosti za správnou cenu a jak efektivně jednat při
                        koupi i prodeji.
                      </p>
                      <p className="mt-4">
                        Osvojte si strategie, které zajišťují maximální
                        návratnost investic, a to i na konkurenčních trzích.
                      </p>
                      <p className="mt-4">
                        Jak dodržovat etické standardy a legislativní požadavky
                        při flipování nemovitostí, abyste se vyhnuli rizikům a
                        právním problémům?
                      </p>
                    </div>
                  </div>

                  {/* Third Column */}
                  <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-purple-600 text-left mb-4">
                      Co vás čeká na workshopu?
                    </div>
                    <div className="text-gray-700">
                      <p>
                        Detailní školení o flipovacích strategiích od A do Z -
                        od výběru nemovitosti po finální prodej.
                      </p>
                      <p className="mt-4">
                        Praktické návody na ekonomiku flipování, včetně
                        rozpočtování, odhadů a správy nákladů.
                      </p>
                      <p className="mt-4">
                        Kompletní přehled o právních požadavcích a předpisech,
                        které je třeba dodržovat.
                      </p>
                      <p className="mt-4">
                        Etický kodex flipování nemovitostí - zásady a praktiky,
                        které vás odliší na trhu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left border rounded-lg p-8 lg:max-w-screen-md justify-self-center shadow-lg bg-white">
              <div className="grid gap-5">
                <div className="flex flex-col gap-2">
                  <div className="font-semibold text-xl">Jiří Krupička</div>
                  <div className="flex gap-4">
                    <div className="hover:text-purple-500 cursor-pointer">
                      FB
                    </div>
                    <div className="hover:text-purple-500 cursor-pointer">
                      IG
                    </div>
                    <div className="hover:text-purple-500 cursor-pointer">
                      YT
                    </div>
                  </div>
                </div>

                <div className="text-balance flex flex-col gap-4">
                  <div>
                    Jiří Krupička je uznávaný expert v oblasti investic do
                    nemovitostí s více než 6 lety zkušeností.
                  </div>

                  <div>
                    Společnost Krupička Invest, kterou Jiří založil, se zaměřuje
                    na strategický nákup a prodej nemovitostí po celé České
                    republice. Díky svému odbornému přístupu pomáhá klientům
                    maximalizovat návratnost investic a efektivně rozšiřovat
                    jejich portfolio.
                  </div>

                  <div>
                    Celková hodnota firem a nemovitostí pod vedením Jiřího
                    Krupičky přesahuje 200 milionů korun, což svědčí o jeho
                    úspěchu a důvěryhodnosti v oboru.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold">
                Máte zájem, ale předtím se ještě <br className='hidden lg:block'/> chcete na něco zeptat?
              </div>
            </div>

            <div className="grid gap-5 p-8 rounded-lg bg-white shadow-lg w-full lg:w-2/3 mx-auto">
              <input
                className="border-2 border-purple-300 rounded-lg py-2 px-4 outline-none focus:border-green-400 transition"
                type="text"
                placeholder="Jméno a příjmení"
              />
              <input
                className="border-2 border-purple-300 rounded-lg py-2 px-4 outline-none focus:border-green-400 transition"
                type="tel"
                placeholder="Telefonní číslo"
              />
              <input
                className="border-2 border-purple-300 rounded-lg py-2 px-4 outline-none focus:border-green-400 transition"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="border-2 border-purple-300 rounded-lg py-2 px-4 outline-none focus:border-green-400 transition"
                placeholder="Napište nám zprávu"
              ></textarea>
              <button className="w-full py-3 bg-green-400 text-white font-bold rounded-lg hover:bg-green-500 transition">
                Odeslat
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-2 text-left pb-5 pt-10">
        <div className="text-xl md:text-2xl font-semibold pb-2">
          Flipování nemovitostí s.r.o.
        </div>

        <div className="grid gap-2 md:grid-cols-2 lg:justify-around">
          <div className="grid gap-2">
            <a href="tel:+420111222333">
              <b>Telefon</b>:{' '}
              <span className="hover:underline-offset-4 hover:underline">
                +420 111 222 333
              </span>
            </a>

            <a
              className="hover:underline-offset-4 hover:underline"
              href="mailto:investicnicentrum@gmail.com"
            >
              <b>Email</b>:{' '}
              <span className="hover:underline-offset-4 hover:underline">
                investicnicentrum@gmail.com
              </span>
            </a>
          </div>

          <div className="grid gap-2 text-pretty md:justify-end">
            <div>
              <b>Adresa</b>: Rybná 716/24, 110 00 Praha 1
            </div>

            <div className="flex gap-5 md:gap-10">
              <div>
                <b>IČ</b>: 19773625
              </div>

              <div>
                <b>DIČ</b>: CZ19773625
              </div>
            </div>
          </div>
        </div>

        <div className="hover:underline-offset-4 hover:underline font-semibold text-center pt-5">
          Informační memorandum
        </div>

        <div className="text-xs text-center">
          Copyright © 2024 IVC — všechna práva vyhrazena.
        </div>
      </div>
    </main>
  );
};

export default Home;
