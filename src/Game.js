import './Game.css';
import { useState } from 'react';
import CharCard from './CharCard';
import DefaultCard from './DefaultCard';
import Routing from './Routing';
const Game=()=>{
    let [name,setName]=useState();
    let [power,setPower]=useState();
    let [spattack,setAttack1]=useState();
    let [spattack2,setAttack2]=useState();
    let [cards,setCards]=useState([{name:'subzero',power:10000,spattack:2000,spattack2:4000,pic:'subzero.jpg'},{name:'scorpion',power:15000,spattack:2400,spattack2:3000,pic:'scorpion.jpg'},{name:'Raiden',power:18000,spattack:5400,spattack2:8000,pic:'raiden.jpg'}])
    const [Index, setIndex] = useState(-1);
    const [Index2, setIndex2] = useState(-1);
    const [yourCardClicked, setYourCardClicked] = useState(false);
   
  const handlePlay = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setIndex(randomIndex);
    setYourCardClicked(true)
  };
  const handlePlay2 = () => {
    
    const randomIndex2=Math.floor(Math.random() * cards.length);
    setIndex2(randomIndex2);
    setYourCardClicked(true)
  };

  const start=()=>{
    let randomPower = Math.random() < 0.5 ? "power" : "spattack";
    if(cards[Index][randomPower].power>cards[Index2][randomPower]){
      console.log(cards[Index][randomPower])
      console.log(cards[Index2][randomPower])
      alert("you win");
    }else{
      console.log(cards[Index][randomPower])
      console.log(cards[Index2][randomPower])
      alert("you loose");
    }
  }
    return (
      <>
      <Routing/>
      <div className='G'>  
       <div className='p1'>
         
          {
          // Index !== -1 && <CharCard {...cards[Index]} />
           yourCardClicked ? (
            <CharCard {...cards[Index]} />
          ) : (
            <DefaultCard />
          )
          }
       </div>
      
       <span id='vs'><h1> VS </h1></span>
        <div className='p2'>
          {
             yourCardClicked ? (
              <CharCard {...cards[Index2]} />
            ) : (
              <DefaultCard />
            )
          }
       </div>
      </div>
      <div className='B'>
        <button onClick={handlePlay}> get your card</button>
        <button onClick={handlePlay2}> get your opponent card</button>
        <br></br>
        <br></br>
       <button onClick={start}> play </button>
      </div>
     
      </>
    );
}
export default Game;