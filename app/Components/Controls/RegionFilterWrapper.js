import React from "react"
import { Box, Paper } from "@material-ui/core"

export default RegionFilterWrapper

function RegionFilterWrapper({ children, ...restProps }) {
  return (
    <Box
      component={Paper}
      elevation={10}
      display="flex"
      flexDirection="column"
      p={4}
      {...restProps}
    >
      {children}
    </Box>
  )
}
