import React from 'react'
import { Box } from '@material-ui/core'

export default DisplaySectionWrapper

function DisplaySectionWrapper ({ children, ...restProps }) {
  return (
    <Box p={4} {...restProps}>
      {children}
    </Box>
  )
}
