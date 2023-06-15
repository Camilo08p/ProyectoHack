import React from 'react'
import './../assets/css/Home.css'
import Flecha from '../assets/img/flecha.png'


const Home = () => {
    
    return (
        <div>
            <div className='Titulo'>
                <h1>SIVIGILA</h1>
                <a className='Inicio' > Sistema de Salud Publica</a> 
            </div>
            <div>
                <h2>Enfermedad 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laborum labore, nisi ad, autem nobis enim minima assumenda incidunt reprehenderit obcaecati asperiores! Aperiam voluptatibus error reprehenderit explicabo eveniet adipisci non.</p>
                <img></img>
            </div>
            <div>
                <h2>Enfermedad 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laborum labore, nisi ad, autem nobis enim minima assumenda incidunt reprehenderit obcaecati asperiores! Aperiam voluptatibus error reprehenderit explicabo eveniet adipisci non.</p>
                <img></img>
            </div>
            <div>
                <h2>Enfermedad 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laborum labore, nisi ad, autem nobis enim minima assumenda incidunt reprehenderit obcaecati asperiores! Aperiam voluptatibus error reprehenderit explicabo eveniet adipisci non.</p>
                <img></img>
            </div>
            <div className='contendorMapa'>
                <img className='mapa' src='https://upload.wikimedia.org/wikipedia/commons/5/5a/Colombia%2C_administrative_divisions_-_es_-_colored_%28%2Bbox%29.svg'></img>
            </div>
            <a> <img className='flecha' src={Flecha}/></a>
        </div>
    )
}

export default Home
