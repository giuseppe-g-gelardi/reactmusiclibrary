import React, { useState } from 'react'
// import React, { useState, useEffect, useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Avatar, ButtonGroup, IconButton, Typography } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import UpdateIcon from '@material-ui/icons/Update';
// import { Link } from 'react-router-dom'
// import { Routes, Route, useNavigate, Link } from 'react-router-dom'
// import MusicVideoIcon from '@material-ui/icons/MusicVideoOutlined';

// import EditSong from '../pages/EditSong'

import Popup from '../components/Popup'
import EditSongForm from './forms/EditSongForm'




export default function MusicCard(props) {

  // const navigate = useNavigate()
  const { song, handleDelete } = props

  const [openPopup, setOpenPopup] = useState(false)


  return (
    <div>
      <Card elevation={3}>
        <CardHeader 
          avatar={
            <Avatar style={{background: '#1E272C', color: '#425B67'}}>
              {song.artist[0]}
            </Avatar>
          }
          action={

            <ButtonGroup variant='contained'>

              <IconButton onClick={() => setOpenPopup(true)}>
                <UpdateIcon style={{color: '#89ddff'}}/>
              </IconButton>

              <IconButton onClick={() => handleDelete(song.id)}>
                <DeleteOutline style={{color: '#f07178'}}/>
              </IconButton>
              
            </ButtonGroup>

          } 
          title={song.title}
          subheader={song.artist}     
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            Album: {song.album} <br />
            Release Date: {song.releaseDate}
          </Typography>
        </CardContent>
      </Card>

      <Popup
        title="Edit song..."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EditSongForm song={song}/>
      </Popup>

    </div>
  )
}
             
//{/* <IconButton onClick={() => navigate('/music/edit/')} onClickCapture={() => console.log(song.id)}> */}
