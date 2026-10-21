import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const nama = "Sop";
  const a = {
    color: 'green',
    fontSize: '24px'
  }
  const N = 84
  const jam = 9
  return (
    <>
          <h2 style={a}> Kantin {nama} </h2>
          <p>Saldo awal kartu kantin: Rp {(N*1000).toLocaleString('id-ID')}</p>
          <p> {(jam) < 12 ? "Selamat Pagi" : "Selamat Siang"} </p>
          <button type="button" disabled>Bayar</button>
    </>
  )
}

export default App
