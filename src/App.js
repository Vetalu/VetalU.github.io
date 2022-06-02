import './App.css';
import { Header } from './Header/header';
import { Introduce } from './Component/Introduce';
import {AboutMe} from './Component/AboutMe'
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <Routes>
        <Route path='/' element = {<Introduce />} />
        <Route path='About' element={<AboutMe/>} />
      </Routes>
    </div>
  );
}

export default App;
