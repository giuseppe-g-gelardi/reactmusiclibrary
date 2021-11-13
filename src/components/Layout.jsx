import React from 'react'
import { makeStyles } from '@material-ui/core'
// import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
// import { useLocation, useNavigate } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import MuiSwitch from './controls/MuiSwitch'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      // background: '#263238'
    },
    title: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    appBar: {
      // background: 'inherit',
      // background: '#32424A',
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
    },
    date: {
      flexGrow: 1,
      // color: '#fff'
    },
    toolbar: theme.mixins.toolbar,
    // avatar: {
    //   marginLeft: theme.spacing(2)
    // }
  }
})

export default function Layout({ children, check, change }) {
  const classes = useStyles()
  // const location = useLocation()
  // const navigate = useNavigate()

  // const menuItems = [
  //   {
  //     text: 'My Music',
  //     icon: <SubjectOutlined color='primary' />,
  //     path: '/music'
  //   },
  //   {
  //     text: 'Add Music',
  //     icon: <AddCircleOutlineOutlined color='primary' />,
  //     path: '/'
  //   },
  // ]

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed" 
        className={classes.appBar}
        color="inherit"
      >
        <Toolbar>
          <Typography variant='h5' className={classes.title} >
            Welcome to the Music Library
          </Typography>
          <Typography 
          className={classes.date}
          >
            Today is {format(new Date(), 'MMMM do, Y')}
          </Typography>
         
              <MuiSwitch onChange={change} checked={check} />
        </Toolbar>
      </AppBar>
      <div className={classes.page}>
        <div className={classes.toolbar}>
        </div>
        {children}
      </div>
    </div>
  )
}
