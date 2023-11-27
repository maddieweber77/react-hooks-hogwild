import React, { useState, useEffect } from 'react';
import Pig from './Pig';
import Filter from './Filter';

function Piggies({ hogs }) {
  const [isSorted, setIsSorted] = useState(true);
  const [isSortedWeight, setIsSortedWeight] = useState(true);
  const [sortedHogs, setSortedHogs] = useState(hogs);

  
 
  function handleSortedPigs() {
    let newSortedHogs = [...hogs];
    console.log("hi")
    isSorted ?  newSortedHogs.sort((a, b) => a.name.localeCompare(b.name))
    :  newSortedHogs.sort((b, a) => a.name.localeCompare(b.name));
    setSortedHogs(newSortedHogs); // Update the state with the sorted array
  }

  function handleSortedPigsWeight() {
    let newSortedHogs = [...hogs];
    setIsSortedWeight(!isSortedWeight)
    isSortedWeight ? newSortedHogs.sort((a, b) => a.weight - b.weight)
    : newSortedHogs.sort((b, a) => a.weight - b.weight)
    setSortedHogs(newSortedHogs); // Update the state with the sorted array
  }
  

  

  return (
    <div>
      <Filter
        handleSortedPigs={handleSortedPigs}
        handleSortedPigsWeight={handleSortedPigsWeight}
        isSorted={isSorted}
        isSortedWeight={isSortedWeight}
      />
      <div className="pigs-container">
        {sortedHogs.map((hog) => (
          <Pig
            key={hog.name}
            name={hog.name}
            image={hog.image}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medal={hog['highest medal achieved']}
          />
        ))}
      </div>
    </div>
  );
}

export default Piggies;
