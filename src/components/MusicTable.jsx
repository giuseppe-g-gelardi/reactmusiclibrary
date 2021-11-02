import React from 'react'
import { Table } from 'react-bootstrap'

export default function MusicTable({ songList }) {

  console.log(songList)
  // song title, album, artist, genre, and release date
 

  return (
    <>
      {songList.map((songs, index) => {
        return (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Song Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th> Genre</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{songs.title}</td>
                  <td>{songs.album}</td>
                  <td>{songs.artist}</td>
                  <td>{songs.genre}</td>
                  <td>{songs.releaseDate}</td>
              </tr>
            </tbody>
          </Table>
        )
      })}
    </>
  )
}


