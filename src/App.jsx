import { useState } from 'react' 
import './App.css'
import Header from './components/Header/Header'
import Products from './components/products/Products'

function App() {
  const [count, setCount] = useState(0)
  const [found, setFound] = useState(0)

  const click = (found) =>{
    const fnd = parseInt(setFound(found + 1))
    
    console.log(fnd)

  }
  return (
    <div className="App">
      <Header></Header>
      <button onClick={click}> Number</button>
      <p>found: {found}</p>
      <Products></Products>
    </div>
  )
}

export default App
