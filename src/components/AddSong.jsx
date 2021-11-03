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

  const [title, setTitle] = useState('')
  const [album, setAlbum] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')

  const newSongUri = 'http://localhost:3500/songs/new'

  // const newSong = {    
  //   "title": "texas flood",
  //   "album": "texas flood",
  //   "artist": "src",
  //   "genre": "blues",
  //   "releaseDate": "60s?",
  // }

  const submit = async e => {
    let response;
    e.preventDefault()
    let song = {
      title: title,
      album: album,
      artist: artist,
      genre: genre,
      releaseDate: releaseDate
    }
    try {
      response = await axios.post(newSongUri, song) 
    } catch (e) {
      console.log(e)
    }
    const content = response
    console.log(content)
    }
    
    
  // const addNewSong = async () => {
  //   try {
  //     await axios.post(newSongUri, newSong).then(
  //       response => {
  //         // setNewSong(newSong)

  //         console.log(response)
  //       },
  //       err => {
  //         console.log(err)
  //       } 
  //     )

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  return (
    <div>
      <form onSubmit={submit}>

        <input 
          type='text'
          placeholder='title'
          onChange={e => setTitle(e.target.value)}
        />

        <input 
          type='text'
          placeholder='album'
          onChange={e => setAlbum(e.target.value)}
        />

        <input 
          type='text'
          placeholder='artist'
          onChange={e => setArtist(e.target.value)}
        />

        <input 
          type='text'
          placeholder='genre'
          onChange={e => setGenre(e.target.value)}
        />

        <input 
          type='text'
          placeholder='releaseDate'
          onChange={e => setReleaseDate(e.target.value)}
        />            

        

        <button type='submit'>Add New Song!</button>
      </form>
      </div>
  )
}

// {/* <button onClick={addNewSong}>add song</button> */}

// <input
// placeholder='song title'>
// </input>

// <input 
// placeholder='album name'>
// </input>

// <input 
// placeholder='artist'>
// </input>

// <input 
// placeholder='genre'>
// </input>

// <input 
// placeholder='release date'>
// </input>

// <button type='submit'>Add New Song!</button>
