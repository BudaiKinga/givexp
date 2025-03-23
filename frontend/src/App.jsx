import { useState } from 'react'
import reactLogo from './assets/pistiek.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import { callTestEndpoint } from './backend/stuff'

function App() {
  const [ts, setTs] = useState(0)

  const onButtonClick = () => {
    callTestEndpoint().then(r =>{
      // handle error responses

      setTs(r)
    })
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onButtonClick}>
          backend response is: {ts}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
