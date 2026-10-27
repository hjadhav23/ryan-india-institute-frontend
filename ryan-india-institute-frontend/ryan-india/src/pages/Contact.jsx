import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data.js'
export default function Contact() {
  const { state } = useLocation()
  const [f, setF] = useState({ name: '', phone: '', email: '', interest: 'Study abroad', msg: state?.course ? `I would like to know more about ${state.course}.` : '' })
  const [sent, setSent] = useState(false)
  const set = k => e => setF({ ...f, [k]: e.target.value })
  // Frontend only: opens the visitor's email app. Replace with an API call when the backend is ready.
  const submit = e => {
    e.preventDefault()
    const body = `Name: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\nInterested in: ${f.interest}\n\n${f.msg}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Enquiry from ' + f.name)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (<>
    <section className="page-head"><div className="wrap"><h1 className="serif">Talk to a counsellor</h1>
      <p className="lead">Consultancy is free. Tell us what you are planning and we will call you back.</p></div></section>
    <section className="wrap sec two">
      <form className="form" onSubmit={submit}>
        <label>Full name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
        <label>Phone<input required type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" /></label>
        <label>Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
        <label>I am interested in<select value={f.interest} onChange={set('interest')}>
          {['Study abroad', 'Test preparation', 'Visa assistance', 'Education loan or scholarship', 'Career counselling', 'Institution partnership'].map(o => <option key={o}>{o}</option>)}</select></label>
        <label>Message<textarea rows="4" value={f.msg} onChange={set('msg')} /></label>
        <button className="btn">Send enquiry</button>
        {sent && <p className="ok" role="status">Your email app should open with the enquiry ready to send. You can also call us on {site.phones[0]}.</p>}
      </form>
      <aside className="trust"><li><b>Call</b>{site.phones.map(p => <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>)}</li>
        <li><b>Email</b><a href={`mailto:${site.email}`}>{site.email}</a></li><li><b>Website</b><a href={`https://${site.web}`}>{site.web}</a></li></aside>
    </section>
  </>)
}
