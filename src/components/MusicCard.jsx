import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Avatar, ButtonGroup, IconButton, Typography } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import UpdateIcon from '@material-ui/icons/Update';
// import { Link } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'
import MusicVideoIcon from '@material-ui/icons/MusicVideoOutlined';

import EditSong from '../pages/EditSong'

export default function MusicCard({ song, handleDelete }) {
  const navigate = useNavigate()

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
          
          {/* i need to figure out how to pass the song id into here */}
          {/* it logs the correct id but wont pass the value into the component */}
              <IconButton onClick={() => navigate('/music/edit/')} onClickCapture={() => console.log(song.id)}>
                <UpdateIcon style={{color: '#89ddff'}}/>
                  <Routes>
                    <Route element={<EditSong songid={song.id} />} />
                  </Routes>
              </IconButton>
          {/* plz plz plzplz plz plzplz */}
          {/* plz plz plzplz plz plzplz */}

              <IconButton onClick={() => handleDelete(song.id)}>
                <DeleteOutline style={{color: '#f07178'}}/>
              </IconButton>

                  {/* this just logs the song id */}
              <IconButton onClick={() => console.log(song.id)}>
                <MusicVideoIcon style={{color: '#f5f5f5'}}/>
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

    </div>
  )
}
             