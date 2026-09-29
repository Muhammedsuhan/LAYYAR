import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  return (
    <main className="page-shell">
      <p className="eyebrow">LAYYR APPAREL</p>
      <h1>Personal protection, designed to disappear.</h1>
      <p className="intro">
        Premium everyday outerwear with discreet compatibility for removable NIJ Level IIIA soft armor panels.
      </p>
      <a className="cta" href="mailto:hello@layyrapparel.com">Join the launch list</a>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
