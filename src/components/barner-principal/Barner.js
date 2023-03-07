import image1 from './image1.jpeg';
import './barner.css';

function Barner (){
    return(
        <div className='barner'>
            <header>
                <h1>ÚNETE A NUESTROS BOOTCAMPS GRATUITOS</h1>
                <p>RECIBE CAPACITACIÓN PARA DESARROLLAR UNA SOLUCIÓN COMPLETA DE SOFTWARE.</p>
                <button>Registrarse</button>
            </header>
            <img src={image1} alt='Imagen 1' className='imagen1'/>
        </div>
    )
}

export default Barner;