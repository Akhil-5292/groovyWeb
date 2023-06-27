import Navbar from './component/Navbar'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './component/Signup';
import Home from './component/Home';
import Login from './component/Login';
import Products from './component/Products';
import Product from './component/Product';

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     {/* <Home/> */}
     <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Product/>}/>
     </Routes>
    </div>
  );
}

export default App;
