import { Link } from "react-router-dom";

// Princeton vs Mercer County housing, ACS 2020-2024 5-year. Figures come from
// the brief's ACS lines; place facts only from the Princeton and Mercer County
// Wikipedia articles. The town page has its own prose on the same numbers, so
// this block reads them as a side-by-side table instead.
const ROWS = [
  { label: "Population", pr: "30,756", mc: "385,864" },
  { label: "Median year a home was built", pr: "1965", mc: "1969" },
  { label: "Share built before 1980", pr: "64%", mc: "64%" },
  { label: "Share from 1939 or earlier", pr: "23%", mc: "18%" },
  { label: "Share from 2000 onward", pr: "19%", mc: "15%" },
  { label: "Homes occupied by owners", pr: "55%", mc: "62%" },
  { label: "Single-family detached", pr: "54%", mc: "48%" },
  { label: "Median number of rooms", pr: "6.3", mc: "5.7" },
];

const HousingNumbers = () => (
  <section className="py-16 md:py-24 bg-muted heavy-border-t">
    <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
      <div className="brutalist-section-eyebrow">By the Numbers</div>
      <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-6">
        Princeton-Area Housing, Side by Side
      </h2>
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-start">
        <div>
          <div className="bento-card overflow-x-auto">
            <table className="w-full font-body text-base md:text-lg">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="p-4 font-semibold text-sm uppercase tracking-[0.1em] text-muted-foreground">Measure</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-[0.1em] text-[#795B41]">Princeton</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-[0.1em] text-muted-foreground">Mercer County</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label} className="border-b border-border last:border-b-0">
                    <td className="p-4 text-foreground/85">{r.label}</td>
                    <td className="p-4 font-semibold text-foreground">{r.pr}</td>
                    <td className="p-4 text-muted-foreground">{r.mc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-sm text-muted-foreground mt-3">
            Source: U.S. Census Bureau, American Community Survey 2020-2024 5-year estimates, via censusreporter.org. Place facts: Wikipedia articles on Princeton and on Mercer County, New Jersey.
          </p>
        </div>

        <div className="font-body text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
          <p>
            Mercer County was carved out of Burlington, Hunterdon, and Middlesex counties in 1838 and named for General Hugh Mercer, who was mortally wounded at the Battle of Princeton in January 1777. Trenton is the county seat, and the county has only 12 municipalities, the fewest of any in New Jersey. Princeton is the home of Princeton University, founded in 1746 as the College of New Jersey, and of Drumthwacket, the governor's official residence.
          </p>
          <p>
            The table shows why so much of our work here is fitting new parts to old houses. Princeton and the county both have roughly two in three homes built before 1980, but Princeton leans further toward the oldest stock, and its homes run larger, with more rooms to keep up. A census figure can't diagnose any single house. What it does suggest is a likely mix: original doors and trim that have shifted over decades, painted surfaces old enough for the federal lead rule to matter, and, in the newer fifth of the stock, first-generation fixtures and caulk coming due.
          </p>
          <p>
            Princeton also has a hot-summer humid continental climate, and the county sits in hardiness zones 6b and 7a. Seasonal swings like that tend to show up as doors that bind in humid months and exterior wood that needs attention after winter, though every house behaves a little differently. For the details on individual towns, see{" "}
            <Link to="/service-areas/princeton" className="text-primary underline">Princeton</Link>,{" "}
            <Link to="/service-areas/lawrence-township" className="text-primary underline">Lawrence Township</Link>,{" "}
            <Link to="/service-areas/west-windsor" className="text-primary underline">West Windsor</Link>,{" "}
            <Link to="/service-areas/robbinsville" className="text-primary underline">Robbinsville</Link>, and{" "}
            <Link to="/service-areas/east-windsor" className="text-primary underline">East Windsor</Link>.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HousingNumbers;
