import { useState } from "react";
const In=()=>{
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const divStyle = {
   color:'white',
    backgroundColor: isHovered ? 'aqua' : null,
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight: '80px',
    cursor: 'pointer',
    width:'700px'
  };
    return(
        <>
        <div style={divStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <h3>This is game is about various characters who having special power or special ability</h3>
        <h3>every card has one character with special power or value on it.</h3>
        <h3> player have to click on get card button which generate card</h3>
        <h3> player hae to click on get opponent card </h3>
        <h3>when both card show on screen ,click on play button</h3>
        <h3>after that game will fairly and randomly compare both power or values of cards </h3>
    <h3> when the player card has powerful than opponent card power or value then the player win , if not then player will loose</h3>
    </div>
        </>
    )
}

export default In;