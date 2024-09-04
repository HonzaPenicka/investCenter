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
      <nav className="flex justify-end fixed lg:hidden items-center bg-white w-full py-4 right-0 max-w-full box-border px-4">
        <div>
          <Burger onClick={toggle} />
        </div>

        {open && (
          <div className="fixed mt-60 mx-auto z-10 gap-10 text-lg border-black font-semibold px-4 box-border py-6 rounded-lg bg-purple-300">
            <div className="flex justify-between gap-4 hover:bg-green-300 rounded-lg py-2 px-4">
              <button
                className="hover:underline underline-offset-4"
                onClick={toggleModal}
              >
                Chci domluvit službu
              </button>
              <span className="font-bold r-0">&rarr;</span>
            </div>

            <div className="flex justify-between gap-4 hover:bg-green-300 rounded-lg py-2 px-4">
              <button
                className="hover:underline underline-offset-4"
                onClick={toggleModal}
              >
                Chci si domluvit schůzku
              </button>
              <span className="font-bold">&rarr;</span>
            </div>

            <div className="flex justify-between gap-4 hover:bg-green-300 rounded-lg py-2 px-4 rounded-b-lg">
              <button
                className="hover:underline underline-offset-4"
                onClick={toggleModal}
              >
                Mentoring nemovitostí
              </button>
              <span className="font-bold">&rarr;</span>
            </div>
            {isModalOpen && <ModalFormDialog />}
          </div>
        )}
      </nav>

      <nav className="justify-between hidden lg:flex font-semibold text-xl items-center bg-red w-full py-8 right-0 max-w-full box-border px-4">
        <div className="flex-col text-2xl justify-start text-green-300 gap-1">
          <span className="line-through line-clamp-4">Investorské centrum</span>
          <span className="list-none line-clamp-none">Jiřího Krupičky</span>
        </div>

        <div className="flex justify-end gap-5 lg:gap-10">
          <button
            className="hover:underline underline-offset-4"
            onClick={toggleModal}
          >
            Chci domluvit službu
          </button>

          <button
            className="hover:underline underline-offset-4"
            onClick={toggleModal}
          >
            Chci si domluvit schůzku
          </button>

          <button
            className="hover:underline underline-offset-4"
            onClick={toggleModal}
          >
            Mentoring nemovitostí
          </button>
        </div>
        {isModalOpen && <ModalFormDialog />}
      </nav>

      <div className="container flex justify-center pt-20 lg:pt-0">
        <div className="grid gap-10 justify-center text-center">
          <div className="flex justify-center">
            <h3 className="text-2xl font-semibold p-4 px-20 lg:px-40 border rounded-lg text-white bg-purple-300">
              Jiří Krupička
            </h3>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-pretty">
            Učíme vás, jak dosáhnout finanční svobody prostřednictvím
            nemovitostí
          </h1>

          <h2 className="text-xl text-pretty">
            Naučte se, jak efektivně investovat a dosáhnout vysokých výnosů s
            našimi experty.
          </h2>

          <div>
            <button className="uppercase font-bold bg-green-300 hover:bg-green-500 rounded-lg text-xl py-4 px-8">
              Chci se naučit investovat
            </button>
          </div>

          <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-pretty">
            Vytvoříme s vámi progresivní portfolio pro
            <br className="hidden md:block" /> váš pohodlný život do 3 let
          </div>

          <div className="text-2xl font-bold text-pretty">
            Výsledky TOP flipařů z mentoringu
          </div>

          <div className="border rounded-lg border-purple-300 py-4 text-center grid md:mx-10 lg:mx-20">
            <table>
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
            <div className="text-4xl font-bold text-pretty">
              O mentoringu s Jiřím Krupičkou
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-green-300 rounded-lg flex flex-col gap-4 p-8 text-left">
                <div className="text-2xl font-bold">Co nabízíme</div>

                <div>
                  Intenzivní roční mentoring zaměřený na investice do
                  nemovitostí a jejich efektivní správu.
                </div>

                <div>
                  Skupinové mastermind setkání 4x ročně v Praze s našimi
                  investičními odborníky.
                </div>

                <div>
                  Kompletní vzdělání od základů až po pokročilé strategie,
                  včetně dodání konkrétních investičních příležitostí a
                  vyjednávání lepších podmínek.
                </div>
              </div>

              <div className="bg-green-300 rounded-lg flex flex-col gap-4 p-8 text-left">
                <div className="text-2xl font-bold">Pro koho</div>

                <div>
                  Pro ambiciózní investory, kteří chtějí dosáhnout finanční
                  nezávislosti v horizontu 2-3 let.
                </div>

                <div>
                  Náš unikátní přístup vám pomůže zkrátit cestu k vašim
                  investičním cílům a dosáhnout nadprůměrných výsledků.
                </div>
              </div>

              <div className="bg-green-300 rounded-lg flex flex-col gap-4 p-8 text-left">
                <div className="text-2xl font-bold">Cena a podmínky</div>

                <div>
                  Minimální vstupní kapitál je 1.000.000 Kč (bez možnosti
                  financování hypotékou).
                </div>

                <div>
                  Provize 10% z čistého zisku po odečtení všech nákladů
                  spojených s transakcí.
                </div>

                <div>
                  Roční poplatek za účast v programu a přístup ke všem
                  materiálům.
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-5">
                <div className="font-bold text-2xl text-center">
                  Proč si vybrat náš mentoring?
                </div>
                <div className="text-start md:text-center grid gap-5">
                  <div>
                    Zajišťujeme vám přístup k exkluzivním investičním
                    příležitostem, které vám pomohou dosáhnout finanční
                    nezávislosti a dlouhodobého růstu.
                  </div>

                  <div className="font-bold text-2xl text-center">
                    Jak vám pomůžeme uspět?
                  </div>
                  <div>
                    Pravidelný přísun výhodných investičních příležitostí
                    (podíly, celkové nemovitosti) po dobu trvání mentoringu,
                    abyste vždy měli na výběr z nejlepších možností.
                  </div>
                  <div>
                    Profesionální koučink a podpora při vyjednávání lepších
                    podmínek nákupu nemovitostí kdekoli v ČR, abyste získali
                    nejlepší možný obchod.
                  </div>
                  <div>
                    Mastermind skupinová setkání 4x za rok v Praze, kde se
                    setkáte s dalšími úspěšnými investory, získáte cenné
                    kontakty a zpětnou vazbu.
                  </div>
                  <div>
                    Intenzivní školení o tom, jak získat investory a efektivně
                    naraisovat kapitál pro vaše projekty.
                  </div>

                  <div className="font-bold text-2xl text-center">
                    Co od nás získáte?
                  </div>
                  <div>
                    Detailní strategii a individuální plán, jak dosáhnout vašich
                    investičních cílů.
                  </div>
                  <div>
                    Přístup k našemu ověřenému know-how, praktickým nástrojům a
                    šablonám, které vám pomohou maximalizovat návratnost
                    investic.
                  </div>
                  <div>
                    Trvalou podporu a mentoring, který vám pomůže překonat výzvy
                    a dosáhnout úspěchu ve flipování nemovitostí.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-black text-white grid gap-5 p-8 rounded-lg text-pretty md:w-fit">
                <div className="text-2xl font font-bold">
                  Jste připraveni investovat do nemovitostí a dosáhnout nových
                  výšin?
                  <br />
                  Přidejte se k nám a využijte příležitosti, která změní váš
                  život!
                </div>

                <div>
                  <button className="uppercase text-black bg-green-500 hover:bg-green-300 rounded-lg text-xl font-medium p-4">
                    chci mentoring
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:justify-center">
              <div className="text-4xl font font-bold">
                Témata workshopu a mentoringu
              </div>

              <div className="border-purple-300 border-4 rounded-lg grid md:grid-cols-3 lg:max-w-screen-2xl text-left p-8 font-semibold text-xl gap-10">
                <div className="grid gap-10">
                  <div className="text-3xl font-bold underline underline-offset-4 decoration-purple-400">
                    Proč investovat do flipování nemovitostí?
                  </div>
                  <div>
                    Objevte důvody, proč je flipování nemovitostí jednou z
                    nejziskovějších a nejdynamičtějších forem investování na
                    trhu.
                  </div>
                  <div>
                    Získejte hlubší porozumění trhu s nemovitostmi a naučte se,
                    jak efektivně využít své zdroje pro dosažení finanční
                    nezávislosti.
                  </div>
                  <div>
                    Proč je důležité mít správné nástroje a know-how k tomu,
                    abyste se stali úspěšným investorem?
                  </div>
                </div>

                <div className="grid gap-10">
                  <div className="text-3xl font-bold underline underline-offset-4 decoration-purple-400">
                    Jak dosáhnout úspěchu ve flipování nemovitostí?
                  </div>

                  <div>
                    Naučte se, jak analyzovat trh, vyhledávat a nakupovat
                    nemovitosti za správnou cenu a jak efektivně jednat při
                    koupi i prodeji.
                  </div>
                  <div>
                    Osvojte si strategie, které zajišťují maximální návratnost
                    investic, a to i na konkurenčních trzích.
                  </div>
                  <div>
                    Jak dodržovat etické standardy a legislativní požadavky při
                    flipování nemovitostí, abyste se vyhnuli rizikům a právním
                    problémům?
                  </div>
                </div>

                <div className="grid gap-10">
                  <div className="text-3xl font-bold underline underline-offset-4 decoration-purple-400">
                    Co vás čeká na workshopu?
                  </div>
                  <div>
                    Detailní školení o flipovacích strategiích od A do Z - od
                    výběru nemovitosti po finální prodej.
                  </div>
                  <div>
                    Praktické návody na ekonomiku flipování, včetně
                    rozpočtování, odhadů a správy nákladů.
                  </div>
                  <div>
                    Kompletní přehled o právních požadavcích a předpisech, které
                    je třeba dodržovat.
                  </div>
                  <div>
                    Etický kodex flipování nemovitostí - zásady a praktiky,
                    které vás odliší na trhu.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left bg-orange-100 rounded-lg p-8 lg:max-w-screen-sm justify-self-center">
              <div className="grid gap-5">
                <div className="flex-col gap-2">
                  <div className="font-semibold text-xl">Jiří Krupička</div>
                  <div className="flex gap-2">
                    <div>FB</div>
                    <div>IG</div>
                    <div>YT</div>
                  </div>
                </div>

                <div className="text-balance flex flex-col gap-2">
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
                Máte zájem, ale předtím se ještě chcete na něco zeptat?
              </div>
            </div>

            <div className="border grid lg:flex lg:flex-col rounded-lg border-green-300 md:mx-auto my-4 md:my-8 md:w-96 xl:w-[32rem]">
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

                <textarea
                  className="outline-none border-green-300 border p-2 rounded-lg"
                  name=""
                  id=""
                  placeholder="Napište nám zprávu."
                />

                <div>
                  <button className="uppercase font-bold bg-green-300 hover:bg-green-500 rounded-lg text-xl py-4 px-8">
                    odeslat
                  </button>
                </div>
              </div>
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
