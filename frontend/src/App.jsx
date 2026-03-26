import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import Section from './components/Section'
import StandingsTable from './components/StandingsTable'
import UploadPage from './pages/UploadPage.jsx'
import Dashboard from './pages/Dashboard.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Banner title={"Baseball Predictor"}></Banner>
      <main>
        <Section title={"Select Stats:"}>
          <div className="choice-container">
          </div>            

            <button className='section-button'>Train Model</button>
            </Section>
        <Section title={"Model Settings:"} footer={<p>R2 Score</p>}>
          <p>Insert image</p>
        </Section>
        <Section title={"Results:"}>
          <StandingsTable></StandingsTable>
        </Section>
      </main> */}
    </>

  )
}

export default App
