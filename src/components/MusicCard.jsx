import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import { blue, green, pink, yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (song) => {
      if (song.category === 'work') {
        return yellow[700]
      }
      if (song.category === 'money') {
        return green[500]
      }
      if (song.category === 'todos') {
        return pink[700]
      }
      return blue[500]
    }
  }
})

export default function MusicCard({ song, handleDelete }) {

  const classes = useStyles(song)

  return (
    <div>
      <Card elevation={3} className={classes.test}>
        <CardHeader 
          avatar={
            <Avatar className={classes.avatar}>
              {song.artist[0]}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(song.id)}>
              <DeleteOutline />
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
