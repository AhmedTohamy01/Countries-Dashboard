import React from 'react'
import { TextField } from '@material-ui/core'

export default FromField

function FromField ({ children, ...restProps }) {
  return (
    <TextField
      id='from'
      variant='outlined'
      label='From ex: 1000'
      size='small'
      margin='none'
      type='number'
      color='primary'
      autoComplete='off'
      {...restProps}
    />
  )
}
