import { useCallback, useState } from 'react';

import { Burger } from '@/icons/burger';

const Home = () => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  return (
    <main className="container flex-col px-4 mx-auto">
      <nav className="flex justify-end fixed items-center bg-white w-full py-4 right-0 max-w-full box-border px-4">
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

      <div className="container flex justify-center pt-20">
        <div className="grid gap-10 justify-center text-center">
          <h3 className="text-lg font-semibold p-2 border rounded-lg text-white bg-purple-300">
            Jiří Krupička & Jiří Krupička
          </h3>

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

          <div className="border rounded-lg border-purple-300 py-4 text-center flex-col">
            <table className="block justify-between gap-4 items-center text-center">
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
              <div className="bg-green-300 rounded-lg grid gap-4 p-8 text-left">
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

              <div className="bg-green-300 rounded-lg grid gap-4 p-8 text-left">
                <div className="text-2xl font-bold">Pro koho</div>

                <div>
                  Pro ty, kteří chtějí být bohatí za 2-3 roky, ne až za 20 let.
                </div>

                <div>
                  Díky našemu unikátnímu know-how dokážeme posunout investiční
                  horizont výrazně směrem k vašemu prospěchu.
                </div>
              </div>

              <div className="bg-green-300 rounded-lg grid gap-4 p-8 text-left">
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
                <div className="font-bold text-2xl">Garantujeme</div>
                <div className="text-start grid gap-5">
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

            <div className="bg-black text-white grid gap-5 p-8 rounded-lg text-pretty">
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

            <div className="grid  md:grid-cols-2 gap-5 text-left bg-orange-100 rounded-lg p-8">
              <div className="grid gap-5">
                <div className="text-4xl font-bold text-center">Jirka</div>

                <div className="flex-col gap-2">
                  <div className="font-semibold text-lg">Jiří Krupička</div>
                  <div className="flex gap-2">
                    <div>FB</div>
                    <div>IG</div>
                    <div>YT</div>
                  </div>
                </div>

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

              <div className="grid gap-5">
                <div className="text-4xl font-bold text-center">Jirka</div>

                <div className="flex-col gap-2">
                  <div className="font-semibold text-lg">Jiří Krupička</div>
                  <div className="flex gap-2">
                    <div>FB</div>
                    <div>IG</div>
                    <div>YT</div>
                  </div>
                </div>

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

            <div>
              <div className='text-4xl font-bold'>
                Máte zájem, ale předtím se ještě chcete na něco zeptat?
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
