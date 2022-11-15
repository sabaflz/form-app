import React , {useState} from "react";

function App() {

    const [contact, setContact] = useState(
        {
            fName: "",
            lName: ""
        }
    );

    function handleChange(event){
        // const newValue = event.target.value;
        // const inputName = event.target.name;
        const {name, value} = event.target;

        setContact(prevValue =>({
            ...prevValue,
            [name]: value
        }));
    }

    // changing the color of the submit button to balck on mouse over

    const [isMousedOver, setMousedOver] = useState(false);

    function changeColorToBlack(){
        setMousedOver(true);
    }

    function changeColorToWhite(){
        setMousedOver(false);
    }

    document.querySelector("button").style.backgroundColor = isMousedOver ? "black" : "white";

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input 
            name="fName"
            onChange={handleChange}
            placeholder="First Name"
            value={contact.fName}
        />
        <input 
            name="lName"
            onChange={handleChange}
            placeholder="Last Name"
            value={contact.lName}
        />
        <input 
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={contact.email}
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



// long version just as a reminder
// setContact(prevValue =>{
//     if (name === "fName"){
//         return({
//             fName: value,
//             lName: prevValue.lName,
//             email: prevValue.email
//         });
//     } else if (name === "lName"){
//         return({
//             fName: prevValue.fName,
//             lName: value,
//             email: prevValue.email
//         });
//     } else if (name === "email"){
//         return({
//             fName: prevValue.fName,
//             lName: prevValue.lName,
//             email: value
//         });
//     }
// })
