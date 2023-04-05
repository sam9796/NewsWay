import React,{useState} from 'react'
import News from './components/News'
import {Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import NewsState from './context/newsState.js'
import Navbar from './components/Navbar';
function App() {
  const pageSize=5
  const apiKey='5b51266fbf8b486f8a7792c15259e78f';
  const [progress,setProgress]=useState(0)
  return ( <div>
    <NewsState>
   <LoadingBar height={2} color='#f11946' progress={progress} />
   <Navbar/>
   <Routes>
   <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} category="general" country="in" key="general" pageSize={pageSize}/>}></Route>
   <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} category="entertainment" country="in" key="entertainment" businesspageSize={pageSize}/>}></Route>
   <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} category="business" country="in" key="business" pageSize={pageSize}/>}></Route>
   <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} category="science" country="in" key="science" pageSize={pageSize}/>}></Route>
   <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} category="technology" country="in" key="technology" pageSize={pageSize}/>}></Route>
   <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} category="sports" country="in" key="sports" pageSize={pageSize}/>}></Route>
   <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} category="health" country="in" key="health" pageSize={pageSize}/>}></Route>
   </Routes>
   </NewsState>
    </div>
  )
}

export default App


