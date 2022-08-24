import './style.scss'
import { Routes,Route } from "react-router-dom";
import TablaDataBase from './components/DataBase/TablaDataBase';
import Formulario from './components/Formulario/Formulario';



const Container = () => {



  return (
    <main className="main">
    <Routes>
    <Route path='/tabla' element={<TablaDataBase/>}/>
    <Route path='/formulario' element={<Formulario/>}/>
    </Routes>

    </main>


    
  )
}

export default Container