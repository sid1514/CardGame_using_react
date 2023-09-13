import App from "./App";
import { Card, Icon, Image } from 'semantic-ui-react';

const CharCard=(props)=>{
    return(
        <>
         <Card>
    <Image src={props.pic} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.power}</Card.Meta>
      <Card.Description>
       {props.spAttack}
       {props.spAttack2}
      </Card.Description>
    </Card.Content>
   
  </Card>
        </>
    )
}
export default CharCard;