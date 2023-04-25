import React from 'react'
import { useLocation } from 'react-router-dom';
import MyNavBar from '../components/nav_bar/nav_bar';

interface UniversityData{
  title: string;
  location: string;
  image: string;
  description: string;
}

export default function UniverdityInformation() {
  const {state} = useLocation()
  const title = state.title
  const location = state.location
  const image = state.image
  const description = state.description
  return (
    <>
    <MyNavBar/>
      <div className='detail-wrapper'>
        <div className='detail-header'>
          <img src={image} alt="" />
          <h3><strong>{title}</strong></h3>
        </div>
        <h4>{location}</h4>
        <p>{description}</p>
      </div>
    </>
  )
}
