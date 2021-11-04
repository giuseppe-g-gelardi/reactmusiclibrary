import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import MusicCard from './MusicCard'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function MusicTable() {
  const [searchTerm, setSearchTerm] = useState('')
  // const [songs, setSongs] = useState([])
  const [songList, setSongList] = useState([])

  const classes = useStyles()

  // express api
  // const dbUri = 'http://localhost:3500/songs/'

  // dCC api
  // const api = 'http://www.devcodecampmusiclibrary.com/'
      // axios.get(`${api}/api/music`).then(


  //json server
  const dbUri = 'http://localhost:8000/songs'

  useEffect(() => {
    getSongs()
  }, [])

  const getSongs = async () => {
    try {
      await axios.get(`${dbUri}`).then(
        response => {
          setSongList(response.data)
        }, err => {console.log(err)})
    } catch (e) {console.log(e)}
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/songs/${id}`)
      getSongs()
    } catch (error) {
      console.log(error)
    }
    const newSongs = songList.filter(song => song.id !== id)
    setSongList(newSongs)
  }

  return (

      <Container>
           <TextField 
            label='Filter songs...'
            className={classes.field}
              onChange={e => {
                setSearchTerm(e.target.value)
              }}
            />
        <Grid container spacing={3}>
          {songList
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
          }).map(song => (
            <Grid item key={song.id} sx={12} md={6} lg={4}> 
              <MusicCard song={song} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
  )
}




// <div>
  
// <div id='table-filter' className='song-table'>

//   <TextField 
//   label='Filter songs...'
//   className={classes.field}
//     onChange={e => {
//       setSearchTerm(e.target.value)
//     }}
//   />

//   <br />
//   <div className='table'>
//     <Table responsive striped bordered hover variant='light'>
//       <thead>
//         <tr>
//           <th>Song Title</th>
//           <th>Album</th>
//           <th>Artist</th>
//           <th> Genre</th>
//           <th>Release Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {songList
//           // eslint-disable-next-line array-callback-return
//           .filter(val => {
//             let searchString = ''
//             for (let value of Object.entries(val)) {
//               searchString += `${value}\t`
//             }
//             if (searchTerm === '') {
//               return val
//             } else if (
//               searchString
//                 .toLowerCase()
//                 .includes(searchTerm.toLowerCase())
//             ) {
//               return val
//             }
//           })
//           .map((val, key) => {
//             return (
//               <tr key={key}>
//                 <td>{val.title}</td>
//                 <td>{val.album}</td>
//                 <td>{val.artist}</td>
//                 <td>{val.genre}</td>
//                 <td>{val.releaseDate}</td>
//                 <td>
//                   <button onClick={() => handleDelete(val.id)}>delete</button>
//                 </td>
//               </tr>
//             )
//           })}
//       </tbody>
//     </Table>
//   </div>
// </div>
// </div>
