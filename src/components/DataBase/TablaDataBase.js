import { useState,useEffect} from "react";
import DataBase from './DataBase'
import './tabla.scss';


const TablaDataBase = () => {


const [datos,setDatos] = useState([]);

useEffect(()=>{
  setDatos(DataBase)
},[])



  return (
    <div className="container_tabla">
        <h2>DataBase</h2>
        <table>
            <thead>
                <tr>
                <th>nombre</th>
                <th>edad</th>
                <th>carrera</th>
                <th>hobbie</th>
                </tr>
            </thead>
            <tbody>
              {datos.map((datos,index)=>{
            return(
                <tr key={index}>
                    <td>{datos.nombre}</td>
                    <td>{datos.carrera}</td>
                    <td>{datos.edad}</td>
                    <td>{datos.hobbie}</td>

                </tr>
            )
        })} 

            </tbody>
        </table>
        

    </div>
  )
}

export default TablaDataBase