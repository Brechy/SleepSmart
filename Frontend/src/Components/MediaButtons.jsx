import React from 'react'
import { Button } from 'semantic-ui-react'

const MediaButtons = () => (
  <div className='mediabuttons'>
    <Button.Group vertical labeled icon>
      <Button color='green' icon='play' content='Play' />
      <Button color='red' icon='pause' content='Pause' />
      <Button color='blue' icon='shuffle' content='Shuffle' />
    </Button.Group>
  </div>
)

export default MediaButtons
