import React from 'react'
import { TextField } from '@material-ui/core'

export default SearchField

function SearchField ({ children, ...restProps }) {
  return (
    <TextField
      id='search'
      variant='outlined'
      label='Search here ...'
      size='small'
      margin='none'
      type='search'
      color='primary'
      autoComplete='off'
      {...restProps}
    />
  )
}
