import React from "react"
import DisplayCompound from './DisplayCompound'
import ControlsCompound from "./ControlsCompound"

export default DashboardCompound

function DashboardCompound({ children }) {
  return (
    <>
    <ControlsCompound />
    <DisplayCompound />
    {children}  
    </>
  )
}