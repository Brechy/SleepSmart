import React from 'react'

import MediaButtons from './MediaButtons.jsx'
import Playlist from './Playlist.jsx'
import ToyStats from './ToyStats.jsx'
import AllPlaylists from './AllPlaylists.jsx'

const DashboardGrid = () => (
  <div className='wrapper'>
    <div className='container parent'>
      <div className='item child'>
        <MediaButtons />
      </div>
      <div className='item child'>
        <p classname='playlist'>Now Playing</p>
        <Playlist />
      </div>
    </div>
    <div className='container parent'>
      <div className='item child'>
        <p classname='allplaylist'>All Available Playlists</p>
        <AllPlaylists />
      </div>
    </div>
    <div className='container parent'>
      <div className='item child'>
        <p classname='toystats'>Toy Stats</p>
        <ToyStats />
      </div>
    </div>
  </div>
)

export default DashboardGrid
