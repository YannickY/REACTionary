import React from "react";
import {useState} from "react";
import "./colors.css";
export default function() {
    document.body.style.backgroundColor = "#E1C391";

    
    

    const [userInput, getUserInput] = useState({
        fName: "",
        lName: ""
    });

    function input(event) {
        getUserInput({
            fName: event.target.value,
            lName: ""
        })
    }

    function input1(event) {
        getUserInput(function(prevInput) {
            return {
                fName: prevInput.fName,
                lName: event.target.value
            }
        })
       
    }

    function handleReset() {
        getUserInput({
            fName: "",
            lName: ""

        })
    }

    return (
        
        
        <div className="textcolor">
        <form  onClick={(event) => {
            event.preventDefault();
            
        }} >
            <input className="textcolor background" placeholder="First Name" value={userInput.fName} onChange={input}/>
            <input className="textcolor background" placeholder="Last Name" value={userInput.lName} onChange={input1} />
            <button className="textcolor background">Submit</button>
        </form>
        <h1>Hi, {userInput.fName} {userInput.lName}</h1>
        <button className="textcolor background" onClick={handleReset}>Reset Me</button>
        </div>

    )
}