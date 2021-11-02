import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'

export default function MusicTable({ songList }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [songs, setSongs] = useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSongs(songList)
  }) // does not need dependency array?

  return (
    <div>
      <h2 id='inventory-heading'>music table</h2>
  
      <div id='inventory-filter' className='inventory'>
        <input
          type='text'
          placeholder='Filter songs...'
          onChange={e => {
            setSearchTerm(e.target.value)
          }}
        />
        <br />
        <div className='table'>
          <Table responsive striped bordered hover variant='light'>
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
              {songs
                // eslint-disable-next-line array-callback-return
                .filter(val => {
                  let searchString = ''
                  for (let value of Object.entries(val)) {
                    searchString += `${value}\t`
                  }
                  if (searchTerm === '') {
                    return val
                  } else if (
                    searchString
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val
                  }
                })
                .map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.title}</td>
                      <td>{val.album}</td>
                      <td>{val.artist}</td>
                      <td>{val.genre}</td>
                      <td>{val.releaseDate}</td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
