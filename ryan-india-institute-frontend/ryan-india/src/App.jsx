import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { site } from './data.js'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Destinations from './pages/Destinations.jsx'
import Courses from './pages/Courses.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'

const nav = [['/', 'Home'], ['/about', 'About'], ['/destinations', 'Destinations'], ['/courses', 'Courses'], ['/contact', 'Contact']]

function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  return (<>
    <header className="bar"><div className="wrap bar-in">
      <Link to="/" className="brand" aria-label="Ryan India Institute home">
        <img src="./logo.png" alt="" /><span><b>RYAN</b><small>India Institute</small></span>
      </Link>
      <button className="burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(([to, t]) => <NavLink key={to} to={to} end={to === '/'}>{t}</NavLink>)}
        <Link to="/login" className="btn btn-sm">Log in</Link>
      </nav>
    </div></header>
    <main><Outlet /></main>
    <footer className="foot"><div className="wrap foot-in">
      <div><b className="serif">{site.name}</b><p>{site.tagline}</p></div>
      <div><h4>Explore</h4>{nav.map(([to, t]) => <Link key={to} to={to}>{t}</Link>)}</div>
      <div><h4>Contact</h4>{site.phones.map(p => <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>)}
        <a href={`mailto:${site.email}`}>{site.email}</a><a href={`https://${site.web}`}>{site.web}</a></div>
    </div><div className="wrap copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</div></footer>
  </>)
}

export default function App() {
  // HashRouter keeps GitHub Pages happy. Add protected routes (e.g. /dashboard) here when the backend is ready.
  return (<HashRouter><Routes><Route element={<Layout />}>
    <Route index element={<Home />} /><Route path="about" element={<About />} />
    <Route path="destinations" element={<Destinations />} /><Route path="courses" element={<Courses />} />
    <Route path="contact" element={<Contact />} /><Route path="login" element={<Login />} />
    <Route path="*" element={<div className="wrap sec"><h1>Page not found</h1><Link className="btn" to="/">Go to home</Link></div>} />
  </Route></Routes></HashRouter>)
}
