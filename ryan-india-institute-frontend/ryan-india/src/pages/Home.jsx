import { Link } from 'react-router-dom'
import { badges, destinations, journey, trust, stakeholders } from '../data.js'

export default function Home() {
  return (<>
    <section className="hero"><div className="wrap hero-in">
      <div>
        <h1 className="serif">Learn Global.<br />Earn Global.</h1>
        <p className="lead">Study abroad guidance, test preparation, visa support, scholarships and education loans, with one team beside you from admission to arrival.</p>
        <div className="row"><Link className="btn" to="/contact">Book free counselling</Link><Link className="btn btn-ghost" to="/courses">Browse courses</Link></div>
      </div>
      <div className="medals" aria-label="What we offer">
        {badges.map(([a, b]) => <div className="medal" key={a + b}><strong>{a}</strong><span>{b}</span></div>)}
      </div>
    </div></section>

    <section className="wrap sec">
      <h2 className="serif">Study in top destinations</h2>
      <p className="sub">Ten regions, one counsellor who knows how to compare them for you.</p>
      <div className="flags">{destinations.map(d => <Link to="/destinations" key={d.id}><span>{d.flag}</span>{d.id}</Link>)}</div>
    </section>

    <section className="band"><div className="wrap sec">
      <h2 className="serif">Your global education journey, made simple</h2>
      <div className="steps">{journey.map(([t, s, items], i) => (
        <article key={t} className="step"><div className="num">{i + 1}</div><h3>{t}</h3><em>{s}</em>
          <ul>{items.map(x => <li key={x}>{x}</li>)}</ul></article>))}</div>
    </div></section>

    <section className="wrap sec two">
      <div><h2 className="serif">Why families trust us</h2><p className="sub">Clear costs, direct payments and support that does not stop at the offer letter.</p>
        <Link className="btn" to="/about">About us</Link></div>
      <ul className="trust">{trust.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}</ul>
    </section>

    <section className="wrap sec"><h2 className="serif">We empower every stakeholder</h2>
      <div className="chips">{stakeholders.map(s => <span key={s}>{s}</span>)}</div></section>

    <section className="cta"><div className="wrap row between">
      <h2 className="serif">Ready to plan your next step?</h2><Link className="btn" to="/contact">Talk to a counsellor</Link></div></section>
  </>)
}
