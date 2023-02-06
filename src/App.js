//Tommi Salon alkometrikoodi
import { useState } from 'react';
import './App.css';
import Options from './alcometer';


//koodi laskee annetut arvot oikein viidennellä klikkauksella ja sen jälkeen joka kerralla, ei hajuakaan mikä sen aiheuttaa
function App() {

  const [weight, setWeight] = useState(0)
  const [time, setTime] = useState(0)
  const [liters, setLiters] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [grams, setGrams] = useState(0)
  const [burning, setBurning] = useState(0)
  const [left, setLeft] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  function calculateLiters(){
    setLiters(bottles * 0.33)
  }
  function calculateGrams(){
    setGrams(liters * 8 * 4.5)
  }
  function calculateBurning(){
    setBurning(weight / 10)
  }
  function calculateLeft(){
    setLeft(grams - (burning * time))
  }

  function calculateAlcohol(e) {
    e.preventDefault()

    calculateLiters()
    calculateGrams()
    calculateBurning()
    calculateLeft()
    
    

    if (gender === 'male'){
      setResult(left/(weight * 0.7))
      if(result < 0){
        setResult(0)
      }
    } 
    else{
      setResult(left/(weight * 0.6))
      if(result < 0){
        setResult(0)
      }
    }
    
    
  }

  return (
    <div>
      <form onSubmit={calculateAlcohol}>
        <h3>Laske alkoholimäärä</h3>
        <div>
          <label>Paino</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
          
        </div>
        <div>
          <label>Pullot</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
            <Options min={0} max={100}/>
          </select>
          
        </div>
        <div>
          <label>Aika</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
            <Options min={0} max={24}/>
          </select>
          
        </div>
        <div>
          <label>Sukupuoli</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Mies</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Nainen</label>
        </div>
        <div>
          <label>Tulos:</label><br></br>
          <output>{result.toFixed(3)}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;