import './App.css';

import Routing from './Routing';
import In from './Instruction';
import { Link } from 'react-router-dom';
const Home=()=>{
    return(
        <>
         
  
    <div className='main'>
    <h1 id='t1'> MORTAL KOMBAT CARDS</h1>
   <span>  <Link to="/Login">Go to login</Link></span>
<br></br>
   <span> <Link to="/In">show Instruction</Link> </span>
        <Routing/>
    </div>
        </>
    )
}
export default Home;