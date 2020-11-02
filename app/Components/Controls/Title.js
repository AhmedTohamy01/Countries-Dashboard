import React from 'react'
import { Typography, Box } from '@material-ui/core'

export default Title

function Title ({ children, ...restProps }) {
  return (
    <Box p={3} mb={2}>
      <Typography variant='h2' align='center' {...restProps}>
        {children}
      </Typography>
    </Box>
  )
}
