import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Update/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;