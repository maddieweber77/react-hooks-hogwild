import react, {useState} from "react";

function Filter({hogs, handleSortedPigs, isSorted, handleSortedPigsWeight, isSortedWeight}) {
  
function sortHogs() {
    handleSortedPigs()
}

function sortHogsWeight() {
    handleSortedPigsWeight()
}


return(
    <div>
        {isSorted 
        ? <button onClick={sortHogs}>Sort Name Z to A</button> :
        <button onClick={sortHogs}>Sort Name A to Z</button>}
        
        {isSortedWeight 
        ? <button onClick={sortHogsWeight}>Filter Weight Low to High </button> 
        : <button onClick={sortHogsWeight}>Filter Weight High to Low </button>}
    </div>
)
}

export default Filter;