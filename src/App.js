import "./App.css";
import React, {useState} from 'react';
// import Confetti from 'react-confetti'

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    
    e.preventDefault();

    if (weight===0 || height===0){
      alert("Please enter a valid height and weight")
    }
    else{
      let bmi = (weight/(height*height))
      setBmi(bmi.toFixed(1))

      if (bmi<18.5){
        setMessage("You are under-weight")
      }
      else if( bmi>=18.5 && bmi<25 ){
        setMessage("You are healthy")
      }
      else{
        setMessage("You are over-weight")
      }
    }
  }

  let imgSrc;

  if (bmi<1){
    imgSrc = null
  } else{
    if(bmi<18.5){
        imgSrc = require("../src/assets/underweight.png")
    }
    else if(bmi>=18.5 && bmi<25 ){
      imgSrc = require("../src/assets/healthy.png")
    }
    else{
      imgSrc = require("../src/assets/overweight.png")
    }
  }

  let reload = () =>{
    window.location.reload()
  }

  return (
    <div className="app">
    {/* { setMessage("You are healthy") && <Confetti />} */}

      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label> Weight (kgs) </label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e)=> setWeight(e.target.value)}
            />
          </div>
          <div>
            <label> Height (mts) </label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e)=> setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>

          <div className="center">
            <h3> Your BMI is: {bmi}</h3>
            <p> {message} </p>
          </div>

          <div className="image-conatiner center">
            <img src={imgSrc} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
