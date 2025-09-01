import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WhatWeDid from './pages/WhatWeDid'
import FuturePlans from './pages/FuturePlans'
import Platforms from './pages/Platforms'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-did" element={<WhatWeDid />} />
          <Route path="/future-plans" element={<FuturePlans />} />
          <Route path="/platforms" element={<Platforms />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
