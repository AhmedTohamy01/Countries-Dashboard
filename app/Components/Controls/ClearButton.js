import React from 'react'
import { Button } from '@material-ui/core'

export default ClearButton

function ClearButton ({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}
