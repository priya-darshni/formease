import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import PageNotFound from './pages/PageNotFound';
import Result from './pages/Result';
import Layout from './components/Layout/Layout';
import Exams from './pages/Exams';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/about' element={<About></About>}></Route>
       <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
       <Route path='/faq' element={<FAQ></FAQ>}></Route>
       <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
       <Route path='/result' element={<Result></Result>}></Route> 
       <Route path='/exams' element={<Exams></Exams>}></Route> 
     </Routes>
   
  );
}

export default App;
