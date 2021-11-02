import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MusicTable from './components/MusicTable'
import Navbar from './components/Navbar'
// import SearchBar from './components/SearchBar'

export default function App() {
  const [songList, setSongList] = useState([])

  const api = 'http://www.devcodecampmusiclibrary.com/'

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
      <Navbar />
      <MusicTable songList={songList} />
      {/* <SearchBar /> */}
    </>
  )
}
