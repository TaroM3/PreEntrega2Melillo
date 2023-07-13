import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/navbar/Navbar'
import ItemListContainer from './pages/itemList/ItemListContainer'
import ItemDetailContainer from './pages/itemDetail/ItemDetailContainer'
import CartContainer from './pages/cart/CartContainer'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Navbar />}>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryName' element={<ItemListContainer />}/>
          <Route path='/itemDetail/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart/1' element={<CartContainer />}/>
          <Route path="*" element={<h1>404 - Not found</h1>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
