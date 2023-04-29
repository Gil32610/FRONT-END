import './App.css';

//aproveitando a estrutura
import { Outlet } from 'react-router-dom';

//navegar entre as paginas
import NavBar from './components/NavBar';
 
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='Content'>
        <Outlet />
      </div>  
    </div>
  ) 
}

export default App;
