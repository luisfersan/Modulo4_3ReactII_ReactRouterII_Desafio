import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Pokemones from './components/Pokemones'
import PokemonDetail from './components/PokemonDetail'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemones"
          element={<Pokemones />}
        />
        <Route
          path="/pokemones/:name"
          element={<PokemonDetail />}
        />
      </Routes>
    </Router>
  )
}

export default App
