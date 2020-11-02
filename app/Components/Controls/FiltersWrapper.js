import React from 'react'
import { Grid } from '@material-ui/core'

export default FiltersWrapper

function FiltersWrapper ({ children, ...restProps }) {
  return (
    <Grid container spacing={2} justify='center' {...restProps}>
      {children}
    </Grid>
  )
}
