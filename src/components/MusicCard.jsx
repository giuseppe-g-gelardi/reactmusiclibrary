import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Avatar, ButtonGroup, IconButton, Typography } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import UpdateIcon from '@material-ui/icons/Update';
import { Link } from 'react-router-dom'

export default function MusicCard({ song, handleDelete, handleUpdate }) {


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
              <IconButton component={Link} to='/music/edit/' >
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

    </div>
  )
}
              // {/* onClick={() => handleUpdate(song.id)} */}
              // navigate('/music/edit')
