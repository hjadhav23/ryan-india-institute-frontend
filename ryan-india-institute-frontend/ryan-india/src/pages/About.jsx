import { Link } from 'react-router-dom'
import { journey, trust, stakeholders } from '../data.js'
export default function About() {
  return (<>
    <section className="page-head"><div className="wrap"><h1 className="serif">About Ryan India Institute</h1>
      <p className="lead">We guide students to study in the USA, Canada, UK, Australia, UAE and beyond, and help with visas, education loans, scholarships, distance education and online learning.</p></div></section>
    <section className="wrap sec two">
      <div><h2 className="serif">What we do</h2>
        <p>Ryan India Institute is a career consulting and abroad studies partner. We help you choose a country, shortlist universities, prepare for entrance tests, apply, fund your studies and settle in.</p>
        <p>Colleges and universities can also work with us for institutional tie-ups, recruitment campuses and student placement support.</p></div>
      <ul className="trust">{trust.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}</ul>
    </section>
    <section className="band"><div className="wrap sec"><h2 className="serif">How we support you</h2>
      <div className="steps">{journey.map(([t, s, items], i) => <article key={t} className="step"><div className="num">{i + 1}</div><h3>{t}</h3><em>{s}</em><ul>{items.map(x => <li key={x}>{x}</li>)}</ul></article>)}</div></div></section>
    <section className="wrap sec"><h2 className="serif">Who we work with</h2><div className="chips">{stakeholders.map(s => <span key={s}>{s}</span>)}</div>
      <p><Link className="btn" to="/contact">Get in touch</Link></p></section>
  </>)
}
