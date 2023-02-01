import React, {useState} from "react";
import './App.css';
import CountModel from "./components/CountModel";

function App() {

  const [open, setOpen] = useState(false)
  const [number, setNumber] = useState(0)
  const [descr, setDescr] = useState('')
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  const nameWeight = "weight";
  const nameHeight = "height";



  const onChangeWeight = (val) => {
    setWeight(val)
  }

  const onChangeHeight = (val) => {
    setHeight(val)
  }

  const countFunc = () => {
    const countNumber = (weight)/(height*height/10000);
    setNumber(countNumber)
    if (countNumber < 18.5) {
      setDescr("Underweight")
    } 
    else if (countNumber> 18.5 && countNumber< 24.9) {
      setDescr("Normal weight")
    }
    else if (countNumber> 25 && countNumber< 29.9) {
      setDescr("Overweight")
    }
    else if (countNumber> 30) {
      setDescr("Obesity")
    }
    else {
      alert("Error in calculation! Try again!")
    }
    
    
    setOpen(true)
    window.scrollTo(0, 0); 
  }
  return (
    <div className="wrapper">
      {open && (
      <div className="info">
        <p> <b>BMI Categories</b>:
            <ul>
            <li> Underweight = less than<span>18,5</span></li>
            <li> Normal weight = <span>from 18.5 to 24.9</span></li>
            <li> Overweight = <span>from 25 to 29.9</span></li>
            <li> Obesity = BMI of <span>30</span> or greater </li>
            </ul>
          </p>
      </div>
     )}
      <h1>Body Mass Index (BMI)</h1>
      <h1 style={{color: "#4B0082"}}>{number}</h1>
      <h1 style={{color: "#800080"}}>{descr}</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
     <CountModel name={nameWeight} value={weight} setValue={onChangeWeight}/> 
     <CountModel name={nameHeight} value={height} setValue={onChangeHeight}/> 
     </div>
     <button onClick={() => {countFunc()}} className="btn-count">Go</button>
     
    </div>
  );
}

export default App;
