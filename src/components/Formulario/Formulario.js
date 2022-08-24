import {useState} from 'react';
import './formulario.scss';

const Formulario = () => {

    const[nombre,setNombre]= useState('');
    const[apellido,setApellido]=useState('');
    const [ email, setEmail] = useState('');
    const [load,setLoad] = useState(false);



    const entradaNombre = (e) => {setNombre(e.target.value)}
    const entradaApellido = (e) => {setApellido(e.target.value)}
    const entradaEmail = (e) => {setEmail(e.target.value)};



const enviar = (e) => {
e.preventDefault();
setLoad(true);
setTimeout(()=>{
    setLoad(false)
},4000)
}






  return (
    <div className='container_formulario'>
        <form className='formulario'>
            <label>Nombre</label>
            <input onChange={entradaNombre} type="text" placeholder='Ingrese nombre'/>
            <label>Apellido</label>
            <input onChange={entradaApellido} type="text" placeholder='Ingrese apellido'/>
            <label>Correo Electronico</label>
            <input onChange={entradaEmail} type="email" placeholder='Ingrese email'/>
            <input onClick={enviar} type="submit" value="Enviar" className='btn'/>
        </form>

        {load ? <div className='datos_salida'>
            <h2>Datos ingresados</h2>
            <h3>Nombre: {nombre}</h3>
            <h3>Apellido: {apellido}</h3>
            <p>Correo Electronico: {email}</p>
        </div> : <h4>Esperando datos.......</h4> }

    </div>
  )
}

export default Formulario