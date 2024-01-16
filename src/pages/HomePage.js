import React from 'react'
import Layout from '../components/Layout/Layout'
import gateImage from './images/gate.png';
import jeeImage from './images/jee.png';
import neetImage from './images/neet.png';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';
const HomePage = () => {
  return (
    <Layout>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={gateImage} className="d-block w-100" style={{ height: '300px' }} alt="gate image" />
      </div>
      <div className="carousel-item">
        <img src={jeeImage} className="d-block w-100" style={{ height: '300px' }} alt="jee image" />
      </div>
      <div className="carousel-item">
        <img src={neetImage} className="d-block w-100" style={{ height: '300px' }} alt="neet image" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
 <div>
 <NavLink to='/exams' style={{ float: 'right' }}>See All</NavLink>
  <div style={{textAlign : 'center'}}>
  <h2>Recommended exams</h2>
  <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams/1' btn='view details'></Card>
  <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams/2' btn='view details'></Card>
  <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams/3' btn='view details'></Card>
  </div>
  </div>
  <div>
 <NavLink to='/exams' style={{ float: 'right' }}>See All</NavLink>
  <div style={{textAlign : 'center'}}>
  <h2>Recent exams</h2>
  <div>
  <button className='filter' style={{color: 'white',backgroundColor: 'blue'}}>All</button>
  <button className='filter'>JEE</button>
  <button className='filter'>NEET</button>
  <button className='filter'>GATE</button>
  </div>
  <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams/4' btn='view details' exam_desc='hey buddy' eligibility='' imp_details=''></Card>
  <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams/5' btn='view details' exam_desc='hey buddy' eligibility='' imp_details=''></Card>
  <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams/6' btn='view details' exam_desc='hey buddy' eligibility='' imp_details=''></Card>
  </div>
  </div>
</Layout>
  )
}
export default HomePage;