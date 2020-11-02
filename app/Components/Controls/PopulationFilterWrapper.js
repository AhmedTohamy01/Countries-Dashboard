import React from "react"
import { Box, Paper } from "@material-ui/core"

export default PopulationFilterWrapper

function PopulationFilterWrapper({ children, ...restProps }) {
  return (
    <Box component={Paper} elevation={10} p={5} {...restProps}>
      {children}
    </Box>
  )
}
