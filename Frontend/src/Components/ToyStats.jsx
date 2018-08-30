//toggles for light, sensor, etc.
//visual rep of toy battery life
//visual rep of sensor movement detection (graph)

import React from 'react';
import { Progress } from 'semantic-ui-react';

const ToyStats = () => (
  <div className='toywrapper'>
    <div className='battery'>
      <Progress color="green" value="4" total="5" progress="percent" />
    </div>
    <div className='visual'>
      <img src={require('../Images/sleepypusheen.gif')} alt='sleepypusheen' className='image'/>
    </div>
  </div>
    );

export default ToyStats;
