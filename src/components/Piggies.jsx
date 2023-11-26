import React, {useState} from 'react'
import Pig from './Pig'



function Piggies({hogs}) {

  
  const renderPigs = hogs.map((hog) => {
    return (
        <Pig 
        key={hog.name}
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        medal={hog[`highest medal achieved`]}
        />
      )
  });
  return <div>
    <div className="pigs-container">{renderPigs}</div>
  </div>
  

}

export default Piggies;


