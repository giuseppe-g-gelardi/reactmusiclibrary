import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Avatar, IconButton, Typography } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'

export default function MusicCard({ song, handleDelete }) {

  return (
    <div>
      <Card elevation={3}>
        <CardHeader 
          avatar={
            <Avatar>
              {song.artist[0]}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(song.id)}>
              <DeleteOutline style={{color: '#f07178'}}/>
            </IconButton>
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
