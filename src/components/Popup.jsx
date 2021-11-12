import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import React from 'react'

export default function Popup(props) {

  const { title, children, openPopup, setOpenPopup } = props
  return (
    <div>
      <Dialog open={openPopup}>
        <DialogTitle>
          <div>title goes here</div>
        </DialogTitle>
        <DialogContent>
          <div>content goes here</div>
        </DialogContent>
      </Dialog>
      
    </div>
  )
}
