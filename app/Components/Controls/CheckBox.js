import React from "react"
import { Checkbox, FormControlLabel } from "@material-ui/core"

export default CheckBox

function CheckBox({ children, ...restProps }) {
  return (
    <FormControlLabel
      control={<Checkbox color="primary" {...restProps} />}
      labelPlacement="end"
      {...restProps}
    />
  )
}
