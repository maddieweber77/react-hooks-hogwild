import React, {useState} from "react";

function Pig({name, image, specialty, greased, weight, medal}) {

    //for details state
    const [isHidden, setIsHidden] = useState(true);
    
    //for hiding pig
    const [isHiddenPig, setIsHiddenPig] = useState(true);

    function handleClick() {
        setIsHidden(!isHidden)
        console.log(name, "clicked");
      }

      function handleHidePig() {
        setIsHiddenPig(!isHiddenPig)
      }



    return (
       <div id={name}
        key={name} className='hogs'
        style={{
            margin: "10px",
            padding: "10px",
      }}>
        <h3>{name}</h3>
        <button onClick={handleClick}>More Info</button>
        <button onClick={handleHidePig}>{isHiddenPig ? `Hide Pig` : `Show Pig`}</button>
        {isHiddenPig ? <img src={image} /> : null}
        {isHidden ? null : <div>
            <ul>
                <li>Specialty: {specialty}</li>
                <li>Greased: {greased ? 'Yes' : 'No'}</li>
                <li>Weight: {weight}</li>
                <li>Medal: {medal}</li>
            </ul>
        </div>
}

        </div>
    )

}

export default Pig;