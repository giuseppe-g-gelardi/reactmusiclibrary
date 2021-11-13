import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Controls from './controls/Controls'

const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    // drawer: {
    //   width: drawerWidth,
    // },
    // drawerPaper: {
    //   width: drawerWidth,
    // },
    // active: {
    //   // background: '#263238'
    // },
    title: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    // appBar: {
    //   // background: 'inherit',
    //   // background: '#32424A',
    //   // width: `calc(100% - ${drawerWidth}px)`,
    //   // marginLeft: drawerWidth,
    // },
    date: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
  }
})

export default function Layout(props) {
  const classes = useStyles()

  const { children, check, change } = props


  function HideOnScroll(props) {
    const { children, window } = props;
  
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
   
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>

      <AppBar
        position="fixed" 
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
         
              <Controls.MuiSwitch onChange={change} checked={check} />
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <div className={classes.page}>
        <div className={classes.toolbar}>
        </div>
        {children}
      </div>
    </div>
  )
}
