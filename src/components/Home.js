import { useState, useEffect } from "react";
import Players from "./Players";
import data from '../data'
// import '../App.css'

function Home() {
  
  const [filter, setFilter] = useState('bodyboard')





  return(
    
    <div style={{textAlign :'center'}}>
      <button  onClick={() => setFilter('bodyboard') }>
        Bodyboard
      </button>
      <button  onClick={() => setFilter('surf') }>
        Surf
      </button>
      <button  onClick={() => setFilter('waterski') }>
        WaterSki
      </button>
      {/* {} */}
      {data.filter(element => element.type === filter).map(el => {
        return <Players {...el} />
      })}

      
     

    </div>
  )
}

export default Home;
