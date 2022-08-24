import Header from "./components/Header/Header";
import {BrowserRouter} from 'react-router-dom';
import Container from "./Container";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Container/>
      </BrowserRouter>

        
    </div>
  )
}

export default App