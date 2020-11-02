import React from 'react'
import { Box } from '@material-ui/core'

export default ClearButtonWrapper

function ClearButtonWrapper ({ children, ...restProps }) {
  return (
    <Box p={1} mt={5} display='flex' justifyContent='center' {...restProps}>
      {children}
    </Box>
  )
}
