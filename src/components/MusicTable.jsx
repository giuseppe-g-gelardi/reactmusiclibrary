import React from 'react'
import { Table } from 'react-bootstrap'

export default function MusicTable({ songList }) {

  return (
    <>
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
            {songList.map((song, key) => {
            return (
              <tr key={key}>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.releaseDate}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}


