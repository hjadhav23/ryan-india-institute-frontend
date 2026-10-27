import { useState } from 'react'
// UI only. Later: POST to your backend here, store the session, and redirect to a protected /dashboard route.
export default function Login() {
  const [mode, setMode] = useState('login')
  const [note, setNote] = useState('')
  const submit = e => { e.preventDefault(); setNote('Student accounts are coming soon. For now, please send us an enquiry and we will help you directly.') }
  return (
    <section className="wrap sec"><div className="auth">
      <div className="tabs" role="tablist">
        <button role="tab" aria-selected={mode === 'login'} className={mode === 'login' ? 'on' : ''} onClick={() => { setMode('login'); setNote('') }}>Log in</button>
        <button role="tab" aria-selected={mode === 'signup'} className={mode === 'signup' ? 'on' : ''} onClick={() => { setMode('signup'); setNote('') }}>Sign up</button>
      </div>
      <form className="form" onSubmit={submit}>
        {mode === 'signup' && <label>Full name<input required autoComplete="name" /></label>}
        <label>Email<input required type="email" autoComplete="email" /></label>
        {mode === 'signup' && <label>Phone<input required type="tel" autoComplete="tel" /></label>}
        <label>Password<input required type="password" minLength="8" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} /></label>
        <button className="btn">{mode === 'login' ? 'Log in' : 'Create account'}</button>
        {note && <p className="ok" role="status">{note}</p>}
      </form>
    </div></section>
  )
}
