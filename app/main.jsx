import React from 'react'
import createReactClass from 'create-react-class'
import withStyles from '@material-ui/styles/withStyles'
import DashboardCompound from './Compounds/DashboardCompound'

module.exports = withStyles(styles)(createReactClass({
  displayName: 'Main',

  render () {
    const { classes } = this.props
    return (
      <>
        <DashboardCompound />
      </>
    )
  }
}))

function styles () {
  return {
    container: {
      padding: 36
    },

    header: {
      fontWeight: 'bold',
      width: 'max-content',
      minWidth: 150
    }
  }
}
