import React from 'react';
import { useSelector } from 'react-redux';
import './home-page-styles.scss'
const HomePage = () =>{
  const {cityItems}= useSelector((state) => state.city);
  console.log("get state here", cityItems[0].title);
  return (
    <div className="foodJointPreview">
   { 
   cityItems
      .map((item,id) => (
  //        <CityFoodJoint key = {item.id} item = {item.items} />
        item.foodJoints
        .map((city,id) => (
          
            <div className="foodjoint">
            <h1>{city.name}</h1>
            <img className="homeImage" src = {city.imgUrl}/>
            </div>
        ))      
        ))}
    </div>
  );
};
  
  export default HomePage;