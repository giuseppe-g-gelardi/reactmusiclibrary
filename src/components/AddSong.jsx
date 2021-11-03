import React, { useState } from 'react'
import axios from 'axios'


export default function AddSong() {

  // const [newSong, setNewSong] = useState({})

  // const [newSong, setNewSong] = useState({
  //   title: '',
  //   album: '',
  //   artist: '',
  //   genre: '',
  //   releaseDate: ''
  // })

  const newSongUri = 'http://localhost:3500/songs/new'

  const newSong = {    
    "title": "texas flood",
    "album": "texas flood",
    "artist": "src",
    "genre": "blues",
    "releaseDate": "60s?",
  }

  const addNewSong = async () => {
    try {
      await axios.post(newSongUri, newSong).then(
        response => {
          // setNewSong(newSong)

          console.log(response)
        },
        err => {
          console.log(err)
        } 
      )

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <form>
        <button onClick={addNewSong}>add song</button>

        <input
          placeholder='song title'>
        </input>

        <input 
          placeholder='album name'>
        </input>

        <input 
          placeholder='artist'>
        </input>

        <input 
          placeholder='genre'>
        </input>

        <input 
          placeholder='release date'>
        </input>

        <button type='submit'>Add New Song!</button>
      </form>
      </div>
  )
}

