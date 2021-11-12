import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core'
import Controls from './controls/Controls'
import { Close } from '@material-ui/icons';


// ! might delete later // this pushes the dialog to the top of the screen
// TODO edit styles to match theme better
const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5)
  },
  DialogTitle: {
    paddingRight: '0px'
  },
  text: {
    color: '#bd93f9',
  }
}))

export default function Popup(props) {

  const { title, children, openPopup, setOpenPopup } = props
  const classes = useStyles()

  return (
      <Dialog open={openPopup} maxWidth='md' classes={{ paper: classes.dialogWrapper }}>
        <DialogTitle className={classes.DialogTitle}>
          <div style={{display: 'flex'}}>
            <Typography variant='h6' component='div' className={classes.text} style={{flexGrow: 1}}>
              {title}
            </Typography>
            <Controls.ActionButton
              color='secondary'
              onClick={() => {setOpenPopup(false)}}
            >
              <Close />
            </Controls.ActionButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
      </Dialog>
  )
}
