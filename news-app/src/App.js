import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from "react";
import Dashboard from './Components/Dashboard';
import LineChart from './Components/LineChart';
import PieChart from './Components/PieChart';

function App() {
  let pageSize = 9
  // Declare useState for progress bar
  const [progress, setProgress] = useState(0)

  return (
    <div className='container-fluid'>
    {/* Router package to redirect to pages  */}
    <BrowserRouter>
    {/* Navigation component */}
    <Navbar />
    {/* Horizontal loading bar */}
    <LoadingBar height={3}
        color='#FFFFFF'
        progress={progress}/>
      <div>
        <Routes>
          {/* Routes for navigation bar */}
          <Route exact path="/" element={<Content setProgress={setProgress} key="home" pageSize={pageSize} category="general" country="in"/>} />
          <Route exact path="/science" element={<Content setProgress={setProgress} key="science" pageSize={pageSize} category="science" country="in"/>} />
          <Route exact path="/business" element={<Content setProgress={setProgress} key="business" pageSize={pageSize} category="business" country="in"/>} />
          <Route exact path="/health" element={<Content setProgress={setProgress} key="health" pageSize={pageSize} category="health" country="in"/>} />
          <Route exact path="/sports" element={<Content setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" country="in"/>} />
          <Route exact path="/entertainment" element={<Content setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" country="in"/>} />
          <Route exact path="/global" element={<Content setProgress={setProgress} key="global" pageSize={pageSize} category="general" country="us"/>} />
          <Route exact path="/dashboard" element={<Dashboard setProgress={setProgress} key="dashboard" charttype="chart-category" />} />
          <Route exact path="/chart-category" element={<Dashboard setProgress={setProgress} key="chart-category" charttype="chart-category" />} />
          <Route exact path="/chart-country" element={<LineChart setProgress={setProgress} key="chart-country" charttype="chart-country" />} />
          <Route exact path="/chart-source" element={<PieChart setProgress={setProgress} key="chart-source" charttype="chart-source" />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App;
