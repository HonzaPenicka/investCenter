import { useCallback, useState } from 'react';

import { Burger } from '@/icons/burger';

const Home = () => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  return (
    <main className="container flex-col px-4 mx-auto">
      <nav className="flex justify-end fixed lg:hidden items-center bg-white w-full py-4 right-0 max-w-full box-border px-4">
        <div>
          <Burger onClick={toggle} />
        </div>

        {open && (
          <div className="fixed mt-60 mx-auto z-10 gap-10 text-lg border-black font-semibold px-4 box-border py-6 rounded-lg bg-purple-300">
            <div className="flex justify-between gap-4 hover:bg-green-300 rounded-lg py-2 px-4">
              <span className="hover:underline underline-offset-4">
                Chci domluvit službu
              </span>
              <span className="font-bold r-0">&rarr;</span>
            </div>

            <div className="flex justify-between gap-4 hover:bg-green-300 rounded-lg py-2 px-4">
              <span className="hover:underline underline-offset-4">
                Chci si domluvit schůzku
              </span>
              <span className="font-bold">&rarr;</span>
            </div>

            <div className="flex justify-between gap-4 hover:bg-green-300 rounded-lg py-2 px-4 rounded-b-lg">
              <span className="hover:underline underline-offset-4">
                Mentoring nemovitostí
              </span>
              <span className="font-bold">&rarr;</span>
            </div>
          </div>
        )}
      </nav>

      <nav className="justify-between hidden lg:flex font-semibold text-xl items-center bg-red w-full py-8 right-0 max-w-full box-border px-4">
        <div className="flex text-2xl justify-start text-green-300 line-through line-clamp-4">
          Flipování nemovitostí
        </div>

        <div className="flex justify-end gap-5 lg:gap-10">
          <span className="hover:underline underline-offset-4">
            Chci domluvit službu
          </span>

          <span className="hover:underline underline-offset-4">
            Chci si domluvit schůzku
          </span>

          <span className="hover:underline underline-offset-4">
            Mentoring nemovitostí
          </span>
        </div>
      </nav>

      <div className="container flex justify-center pt-20 lg:pt-0">
        <div className="grid gap-10 justify-center text-center">
          <div className="grid md:flex md:justify-center">
            <h3 className="text-xl font-semibold p-4 md:px-20 lg:px-40 border rounded-lg text-white bg-purple-300">
              Jiří Krupička & Jiří Krupička
            </h3>
          </div>

          <h1 className="text-6xl font-bold text-pretty">
            Mentoring flipování nemovitostí
          </h1>

          <h2 className="text-xl text-pretty">
            Zhodnoťte svůj kapitál v nemovitostech o{' '}
            <b>desítky % a více ročně</b>.
          </h2>

          <div>
            <button className="uppercase font-bold bg-green-300 hover:bg-green-500 rounded-lg text-xl py-4 px-8">
              chci mentoring
            </button>
          </div>

          <div className="text-4xl font-bold text-pretty">
            Vytvoříme s vámi progresivní portfolio pro váš pohodlný život do 3
            let
          </div>

          <div className="text-2xl font-bold text-pretty">
            Výsledky TOP 16 flipařů z mentoringu
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
                  <td className="py-2">H.K.</td>
                  <td className="py-2">500 000 Kč</td>
                  <td className="py-2">1 měsíc</td>
                </tr>
                <tr>
                  <td className="py-2">L.K.</td>
                  <td className="py-2">250 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">T.N.</td>
                  <td className="py-2">920 000 Kč</td>
                  <td className="py-2">2 měsíce</td>
                </tr>
                <tr>
                  <td className="py-2">P.M.</td>
                  <td className="py-2">380 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">K.H.</td>
                  <td className="py-2">540 000 Kč</td>
                  <td className="py-2">2 měsíce</td>
                </tr>
                <tr>
                  <td className="py-2">D.H.</td>
                  <td className="py-2">90 000 Kč</td>
                  <td className="py-2">1 den</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">L.K.</td>
                  <td className="py-2">221 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr>
                  <td className="py-2">V.J.</td>
                  <td className="py-2">75 000 Kč</td>
                  <td className="py-2">5 měsíců</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">A.T.</td>
                  <td className="py-2">1 000 000 Kč</td>
                  <td className="py-2">1 měsíc</td>
                </tr>
                <tr>
                  <td className="py-2">S.D.</td>
                  <td className="py-2">700 000 Kč</td>
                  <td className="py-2">3 týdny</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">F.H.</td>
                  <td className="py-2">950 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr>
                  <td className="py-2">F.K.</td>
                  <td className="py-2">969 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">J.S.</td>
                  <td className="py-2">500 000 Kč</td>
                  <td className="py-2">2 měsíce</td>
                </tr>
                <tr>
                  <td className="py-2">J.C.</td>
                  <td className="py-2">700 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
                <tr className="bg-purple-300">
                  <td className="py-2">D.H.</td>
                  <td className="py-2">1 550 000 Kč</td>
                  <td className="py-2">4 dny</td>
                </tr>
                <tr>
                  <td className="py-2">M.T.</td>
                  <td className="py-2">418 000 Kč</td>
                  <td className="py-2">3 měsíce</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-10">
            <div className="text-4xl font-bold text-pretty">
              O mentoringu s Jiřím a Jiřím
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-green-300 rounded-lg flex flex-col gap-4 p-8 text-left">
                <div className="text-2xl font-bold">Co nabízíme</div>

                <div>Roční mentoring na téma flipování nemovitostí.</div>

                <div>
                  Mastermind skupinové setkání 4x za rok v Praze s Maximem a
                  Jiřím
                </div>

                <div>
                  Kompletní know-how od A do Z, dodání nemovitostí k výkupu,
                  koučink na vyjednání snížení ceny, a mnoho dalšího.
                </div>
              </div>

              <div className="bg-green-300 rounded-lg flex flex-col gap-4 p-8 text-left">
                <div className="text-2xl font-bold">Pro koho</div>

                <div>
                  Pro ty, kteří chtějí být bohatí za 2-3 roky, ne až za 20 let.
                </div>

                <div>
                  Díky našemu unikátnímu know-how dokážeme posunout investiční
                  horizont výrazně směrem k vašemu prospěchu.
                </div>
              </div>

              <div className="bg-green-300 rounded-lg flex flex-col gap-4 p-8 text-left">
                <div className="text-2xl font-bold">Cena a podmínky</div>

                <div>
                  Min. kapitál 1.000.000 Kč cash (nelze financovat hypotékou).
                </div>

                <div>
                  10% z budoucího zisku po odečtení nákladů z transakce.
                </div>

                <div>Platí se roční poplatek za mentoring.</div>
              </div>
            </div>

            <div>
              <div className="grid gap-5">
                <div className="font-bold text-2xl text-center">
                  Garantujeme
                </div>
                <div className="text-start md:text-center grid gap-5">
                  <div>
                    Dodání investičních nemovitostí k výkupu (podíly, celky) –
                    po celou dobu spolupráce
                  </div>
                  <div className="font-bold text-2xl text-center">Koučink</div>
                  <div>
                    Vyjednání snížení kupní ceny po telefonu s Jiřím (jakákoliv
                    lokalita, jakákoliv nemovitost)
                  </div>
                  <div>
                    Formou mastermind skupinových setkání 4x za rok v Praze
                  </div>
                  <div>Jak získat investory a naraisovat kapitál</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-black text-white grid gap-5 p-8 rounded-lg text-pretty md:w-fit">
                <div className="text-2xl font font-bold">
                  Jste investor, který se nebojí nasadit holínky?
                  <br />
                  Skvělé!
                </div>

                <div>
                  <button className="uppercase text-black bg-green-500 hover:bg-green-300 rounded-lg text-xl font-medium p-4">
                    chci mentoring
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="text-4xl font font-bold">
                Témata workshopu a mentoringu
              </div>

              <div className="border-purple-300 border-4 rounded-lg grid md:grid-cols-3 text-left p-8 font-semibold text-xl gap-10 lg:text-justify">
                <div className="grid gap-10 underline underline-offset-4 decoration-purple-400">
                  <div>Flipovací strategie od A do Z</div>

                  <div>Ekonomika flipování</div>

                  <div>Legislativa</div>

                  <div>Etický kodex flipování</div>
                </div>

                <div className="grid gap-10 underline underline-offset-4 decoration-purple-400">
                  <div>Flipovací strategie od A do Z</div>

                  <div>Ekonomika flipování</div>

                  <div>Legislativa</div>

                  <div>Etický kodex flipování</div>
                </div>

                <div className="grid gap-10 underline underline-offset-4 decoration-purple-400">
                  <div>Flipovací strategie od A do Z</div>

                  <div>Ekonomika flipování</div>

                  <div>Legislativa</div>

                  <div>Etický kodex flipování</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 text-left bg-orange-100 rounded-lg p-8">
              <div className="grid gap-5">
                <div className="flex-col gap-2">
                  <div className="font-semibold text-xl">Jiří Krupička</div>
                  <div className="flex gap-2">
                    <div>FB</div>
                    <div>IG</div>
                    <div>YT</div>
                  </div>
                </div>

                <div className="text-balance flex flex-col gap-5">
                  <div>
                    Jiří je realitní investor a tvůrce podcastu Jiří Krupička
                    Show. Má za sebou přes 12 let zkušeností v realitách na
                    různých pozicích. Je uznávaný profesionál v oblasti real
                    estate, COLD callingu a motivace.
                  </div>

                  <div>
                    Jiří založil společnost Krupička Invest, ve které se
                    specializuje na nákup a prodej na nemovitostí v Česku.
                  </div>

                  <div>
                    Hodnota firem a nemovitostí Jiříe je přes 200 milionů korun.
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="flex-col gap-2">
                  <div className="font-semibold text-xl">Jiří Krupička</div>
                  <div className="flex gap-2">
                    <div>FB</div>
                    <div>IG</div>
                    <div>YT</div>
                  </div>
                </div>

                <div className="text-balance flex flex-col gap-5">
                  <div>
                    Jiří je realitní investor a tvůrce podcastu Jiří Krupička
                    Show. Má za sebou přes 12 let zkušeností v realitách na
                    různých pozicích. Je uznávaný profesionál v oblasti real
                    estate, COLD callingu a motivace.
                  </div>

                  <div>
                    Jiří založil společnost Krupička Invest, ve které se
                    specializuje na nákup a prodej na nemovitostí v Česku.
                  </div>

                  <div>
                    Hodnota firem a nemovitostí Jiříe je přes 200 milionů korun.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold">
                Máte zájem, ale předtím se ještě chcete na něco zeptat?
              </div>
            </div>

            <div className="border grid lg:flex lg:flex-col rounded-lg border-green-300 md:mx-20 lg:mx-80">
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
