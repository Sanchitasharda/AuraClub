import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OurStory from './pages/OurStory'

function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurStory" element={<OurStory />} />
        
      </Routes>
    </Router>
  )
}

export default App
