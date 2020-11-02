import React from "react"
import { Box } from "@material-ui/core"

export default ControlsSectionWrapper

function ControlsSectionWrapper({ children, ...restProps }) {
  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      {...restProps}
    >
      {children}
    </Box>
  )
}
