import { useState } from 'react'
import reactLogo from './assets/pistiek.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import callTestEndpoint from './backend/stuff'
import Fullsite from './components/Fullsite/Fullsite'

function App() {
  const [ts, setTs] = useState(0)

  const onButtonClick = () => {
    callTestEndpoint().then(r => {
      // handle error responses
      r.text().then(res => {
        setTs(res + '')

      })
    })
  }

  return (
    <>
      <Fullsite/>
    </>
  )
}

export default App
