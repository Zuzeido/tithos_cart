import React from 'react'
import logo from "./logo.jpeg";

function Inicio() {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
            <h2><a href="/cafeteria" target="_blank" rel="noreferrer">Nuestra Cafeteria</a></h2> 
            <div className='underline-text' />
            <h2>Nuestra Taberna</h2>
            <div className='underline-text' />
            <h2><a href="http://asadordesalamanca.com/" target="_blank" rel="noreferrer">Casa Salamanca</a></h2>
            <div className='underline-text' />
        </div>
    </section>
    </main>
  )
}

export default Inicio