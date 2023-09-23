import './Nav.css'
import Routing from './Routing';
import In from './Instruction';
import { Link } from 'react-router-dom';
const NavBar=()=>{
    
    return(
        <>
        
        <nav>
            
           
 


            <a href="index.html"> <svg width="180" height="180" >
  <image href="logo1.png" height="200" width="150" /></svg> </a>

          
           

            <div >
                <ul id='N1'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/In">Instruction</Link></li>
                <li><Link to="/I">Collection</Link> </li>
                
                </ul>
                    
            </div>
                 <Routing/>  
        </nav>
        
        </>
    )
}
export default NavBar;