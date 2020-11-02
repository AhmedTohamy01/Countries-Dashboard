import React from "react"
import { Box } from "@material-ui/core"

export default FromFieldWrapper

function FromFieldWrapper({ children, ...restProps }) {
  return (
    <Box p={1} {...restProps}>
      {children}
    </Box>
  )
}
