import React , {useState} from "react";

function App() {

    const [fullName, setFullName] = useState(
        {
            fName: "",
            lName: ""
        }
    );

    function updateFullName(event){
        // const newValue = event.target.value;
        // const inputName = event.target.name;
        const {name, value} = event.target;

        setFullName(preValue =>{
            if (name === "fName"){
                return({
                    fName: value,
                    lName: preValue.lName
                });
            } else if (name === "lName"){
                return({
                    fName: preValue.fName,
                    lName: value
                });
            }
        })
    }

    // changing the color of the submit button to balck on mouse over

    const [isMousedOver, setMousedOver] = useState("");

    function changeColorToBlack(){
        setMousedOver(true);
    }

    function changeColorToWhite(){
        setMousedOver(false);
    }

    document.querySelector("button").style.backgroundColor = isMousedOver ? "black" : "white";

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
