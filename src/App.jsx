import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MusicTable from './components/MusicTable'
import Navbar from './components/Navbar'
import AddSong from './components/AddSong'

export default function App() {

  const [songList, setSongList] = useState([])
  const dbUri = 'http://localhost:3500/songs/'
  // const api = 'http://www.devcodecampmusiclibrary.com/'

  useEffect(() => {
    getSongs()
  }, [])

  // TODO implement put to edit
  // TODO delete to.. well, delete
  const getSongs = async () => {
    try {
      // axios.get(`${api}/api/music`).then(
      axios.get(`${dbUri}`).then(
        response => {
          setSongList(response.data)
          // console.log(response)
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
      <Navbar />
      <AddSong />
      <MusicTable songList={songList} />
    </>
    
  )
}



