import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { courses, destinations } from '../data.js'
const flag = c => destinations.find(d => d.id === c)?.flag
export default function Courses() {
  const { state } = useLocation()
  const [country, setCountry] = useState(state?.country || 'All')
  const [q, setQ] = useState('')
  const list = courses.filter(c => (country === 'All' || c.country === country) &&
    (c.title + c.uni).toLowerCase().includes(q.toLowerCase()))
  return (<>
    <section className="page-head"><div className="wrap"><h1 className="serif">Courses and universities</h1>
      <p className="lead">Sample listings shown. Ask us for the current list, fees and scholarship options.</p></div></section>
    <section className="wrap sec">
      <div className="filters">
        <input type="search" placeholder="Search course or university" aria-label="Search" value={q} onChange={e => setQ(e.target.value)} />
        <div className="chips" role="group" aria-label="Filter by country">
          {['All', ...destinations.map(d => d.id)].map(c => <button key={c} className={c === country ? 'on' : ''} onClick={() => setCountry(c)}>{c}</button>)}
        </div>
      </div>
      {list.length === 0 ? <p className="empty">No courses match. Clear the search or choose another country, or <Link to="/contact">ask us</Link> about it.</p> :
        <div className="grid">{list.map(c => (
          <article className="card" key={c.id}>
            {c.scholarship && <span className="tag">Scholarship available</span>}
            <h3 className="serif">{c.title}</h3><p className="uni">{c.uni}, {flag(c.country)} {c.country}</p>
            <dl><dt>Level</dt><dd>{c.level}</dd><dt>Duration</dt><dd>{c.duration}</dd><dt>Intake</dt><dd>{c.intake}</dd><dt>Tuition</dt><dd>{c.fee}</dd></dl>
            <Link className="btn btn-sm" to="/contact" state={{ course: `${c.title}, ${c.uni}` }}>Enquire about this course</Link>
          </article>))}</div>}
    </section>
  </>)
}
