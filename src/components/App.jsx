import React , {useState} from "react";

function App() {

    const [fullName, setFullName] = useState(
        {
            fName: "",
            lName: ""
        }
    );

    function updateFullName(event){
        const newValue = event.target.value;
        const inputName = event.target.name;

        setFullName(preValue =>{
            if (inputName === "fName"){
                return({
                    fName: newValue,
                    lName: preValue.lName
                });
            } else if (inputName === "lName"){
                return({
                    fName: preValue.fName,
                    lName: newValue
                });
            }
        })
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
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
            name="fName"
            onChange={updateFullName}
            placeholder="First Name"
            value={fullName.fName}
        />
        <input 
            name="lName"
            onChange={updateFullName}
            placeholder="Last Name"
            value={fullName.lName}
        />
        <button 
            onMouseOver={changeColorToBlack}
            onMouseOut={changeColorToWhite}
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
