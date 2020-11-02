import React from 'react'
import { Box, Paper } from '@material-ui/core'

export default SearchFilterWrapper

function SearchFilterWrapper ({ children, ...restProps }) {
  return (
    <Box component={Paper} elevation={10} p={4} {...restProps}>
      {children}
    </Box>
  )
}
