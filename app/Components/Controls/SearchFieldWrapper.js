import React from "react"
import { Box } from "@material-ui/core"

export default SearchFieldWrapper

function SearchFieldWrapper({ children, ...restProps }) {
  return (
    <Box p={2} {...restProps}>
      {children}
    </Box>
  )
}
