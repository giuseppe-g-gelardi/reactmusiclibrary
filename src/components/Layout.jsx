import React, { useState } from 'react'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import Switch from '@material-ui/core/Switch'
import { purple, pink } from '@material-ui/core/colors'




const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#282a36',
      width: '100%',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: 'flex'
    },
    title: {
      padding: theme.spacing(2)
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      background: '#44475a'
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1 // will take up all space horizontal to its right
    },
    avatar: {
      marginLeft: theme.spacing(2)
    },
  }
})



export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Music',
      icon: <SubjectOutlined color='secondary' />,
      path: '/music'
    },
    {
      text: 'Add Music',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/'
    },
  ]

 
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        className={classes.appbar}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is {format(new Date(), 'MMMM do, Y')}
          </Typography>
{/* theme toggle switch */}
            <Switch/>
{/* theme toggle switch */}


        </Toolbar>
      </AppBar>

   {/* side drawer */}
    <Drawer
      className={classes.drawer}
      variant='permanent'
      anchor='left'
      classes={{ paper: classes.drawerPaper }}
    >
      <div>
        <Typography variant='h5' className={classes.title}>
          Music
        </Typography>
      </div>


        {/* list / links */}
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null} 
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}
