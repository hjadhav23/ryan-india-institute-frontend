import { Link } from 'react-router-dom'
import { destinations } from '../data.js'
export default function Destinations() {
  return (<>
    <section className="page-head"><div className="wrap"><h1 className="serif">Study destinations</h1>
      <p className="lead">Pick a country to see typical intakes and popular fields, then browse its courses.</p></div></section>
    <section className="wrap sec"><div className="grid">{destinations.map(d => (
      <article className="card" key={d.id}><div className="flag">{d.flag}</div><h3 className="serif">{d.id}</h3><p>{d.note}</p>
        <dl><dt>Intakes</dt><dd>{d.intake}</dd><dt>Popular fields</dt><dd>{d.fields}</dd></dl>
        <Link to="/courses" state={{ country: d.id }}>View {d.id} courses</Link></article>))}</div></section>
  </>)
}
