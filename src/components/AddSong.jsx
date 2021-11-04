import React, { useState } from 'react'
import axios from 'axios'

export default function AddSong() {
  const [title, setTitle] = useState('')
  const [album, setAlbum] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')

  const newSongUri = 'http://localhost:3500/songs/new'

  const submit = async e => {
    let response;
    // e.preventDefault()
    let song = {
      title: title,
      album: album,
      artist: artist,
      genre: genre,
      releaseDate: releaseDate
    }
    try {
      response = await axios.post(newSongUri, song) 
    } catch (error) {
      console.log(error)
    }
    const content = response
    console.log(content)
    }

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
