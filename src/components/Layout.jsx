import React from 'react'
import { makeStyles } from '@material-ui/core'
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
      background: '#263238'
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      background: '#32424A',
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      // height: 72
    },
    date: {
      flexGrow: 1,
      color: '#fff'
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Music',
      icon: <SubjectOutlined color='primary' />,
      path: '/music'
    },
    {
      text: 'Add Music',
      icon: <AddCircleOutlineOutlined color='primary' />,
      path: '/'
    },
  ]

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed" 
        className={classes.appBar}
        color="primary"
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is {format(new Date(), 'MMMM do, Y')}
          </Typography>
              {/* theme toggle switch */}
              {/* <Switch /> no worky */}
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
