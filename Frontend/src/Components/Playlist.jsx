import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const PlayList = () => (
<Card.Group>
  <Card>
    <Card.Content>
      <Image floated='right' size='mini' src={require('../Images/BetteMidler.jpeg')} />
      <Card.Header>Baby Mine</Card.Header>
      <Card.Description>Bette Midler sleepy songs</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>
          Play
        </Button>
        <Button basic color='red'>
          Delete
        </Button>
      </div>
    </Card.Content>
  </Card>
</Card.Group>
)

export default PlayList
