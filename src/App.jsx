import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MusicTable from './components/MusicTable'

export default function App() {
  const [songList, setSongList] = useState([])

  const api = 'http://www.devcodecampmusiclibrary.com/'
  // song title, album, artist, genre, and release date

  useEffect(() => {
    getSongs()
  }, [])

  const getSongs = async () => {
    try {
      axios.get(`${api}/api/music`).then(
        response => {
          setSongList(response.data)
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
    <>
      <h1>hello world</h1>
      <MusicTable songList={songList} />
    </>
  )
}