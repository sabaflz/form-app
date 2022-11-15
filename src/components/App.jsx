import React , {useState} from "react";

function App() {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");

    function updateFName(event){
        const newFName = event.target.value;
        setFName(newFName);
    }

    function updateLName(event){
        const newLName = event.target.value;
        setLName(newLName);
    }

    // changing the color of the submit button to balck on mouse over

    const [color, setColor] = useState("");

    function changeColorToBlack(){
        setColor("black");
        document.querySelector("button").style.backgroundColor = color;
    }

    function changeColorToWhite(){
        setColor("white");
        document.querySelector("button").style.backgroundColor = color;
    }

  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input 
            name="fName"
            onChange={updateFName}
            placeholder="First Name"
            value={fName}
        />
        <input 
            name="lName"
            onChange={updateLName}
            placeholder="Last Name"
            value={lName}
        />
        <button 
            onMouseOver={changeColorToBlack}
            onMouseOut={changeColorToWhite}>Submit</button>
      </form>
    </div>
  );
}

export default App;
