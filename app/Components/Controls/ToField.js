import React from 'react'
import { TextField } from '@material-ui/core'

export default ToField

function ToField ({ children, ...restProps }) {
  return (
    <TextField
      id='to'
      variant='outlined'
      label='To ex: 1000000'
      size='small'
      margin='none'
      type='number'
      color='primary'
      autoComplete='off'
      {...restProps}
    />
  )
}
