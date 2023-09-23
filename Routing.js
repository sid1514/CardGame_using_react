import { Route,Routes} from 'react-router-dom';
import Login from './Login';

import Game from './Game';
import In from './Instruction';
const Routing=()=>{
    return(
        <>
         
  <Routes>

<Route path="/Login" element={<Login/>}/> 
<Route path="/In" element={<In/>}/> 
<Route path="/Game" element={<Game/>}/>
 </Routes>
        </>
    )
}

export default Routing;