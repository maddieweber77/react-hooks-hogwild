import React, { useState, useEffect } from 'react';
import Pig from './Pig';
import Filter from './Filter';

function Piggies({ hogs }) {
  const [isSorted, setIsSorted] = useState(true);
  const [isSortedWeight, setIsSortedWeight] = useState(true);
  const [sortedHogs, setSortedHogs] = useState(hogs);

  useEffect(() => {
    handleSorting();
  }, [isSorted, isSortedWeight]);

  function handleSorting() {
    let newSortedHogs;

    if (isSorted) {
      //this runs even if nothing is clicked
      console.log("hi")
      newSortedHogs = hogs.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else {
      newSortedHogs = hogs.slice().sort((b, a) => a.name.localeCompare(b.name));
    }

    if (isSortedWeight) {
      //this runs even if nothing is clicked - so this is default sort because it's second
      console.log("hi again")
      newSortedHogs.sort((a, b) => a.weight - b.weight);
    } else {
      newSortedHogs.sort((b, a) => a.weight - b.weight);
    }

    setSortedHogs(newSortedHogs);
  }

  return (
    <div>
      <Filter
        handleSortedPigs={() => setIsSorted(!isSorted)}
        isSorted={isSorted}
        handleSortedPigsWeight={() => setIsSortedWeight(!isSortedWeight)}
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
