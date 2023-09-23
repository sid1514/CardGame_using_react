import { Card, Icon, Image } from 'semantic-ui-react';

const DefaultCard=({name,power,spAttack,spAttack2})=>{
    return(
        <>
         <Card>
    <Image src='default.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{power}</Card.Meta>
      <Card.Description>
       {spAttack}
       {spAttack2}
      </Card.Description>
    </Card.Content>
   
  </Card>
        </>
    )
}
export default DefaultCard;