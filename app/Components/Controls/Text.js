import React from "react"
import { Typography } from "@material-ui/core"

export default Text

function Text({ children, ...restProps }) {
  return (
    <Typography variant="h5" {...restProps}>
      {children}
    </Typography>
  )
}
