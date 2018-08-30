import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const AllPlaylists = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={require('../Images/whale.jpg')} />
        <Card.Header>Whales</Card.Header>
        <Card.Description>
          Whale and Ocean Sounds
        </Card.Description>
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
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={require('../Images/pusheenheart.jpeg')} />
        <Card.Header>Mommy's Heart</Card.Header>
        <Card.Description>
        </Card.Description>
        Heartbeat sounds from 20 - 40 weeks
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

export default AllPlaylists
