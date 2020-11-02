import React, { useState } from "react"
import DisplayCompound from "./DisplayCompound"
import ControlsCompound from "./ControlsCompound"
import { SearchTermContext } from "../Context/SearchTermContext"

export default DashboardCompound

function DashboardCompound({ children }) {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
      <SearchTermContext.Provider value={[searchTerm, setSearchTerm]}>
        <ControlsCompound />
        <DisplayCompound />
        {children}
      </SearchTermContext.Provider>
    </>
  )
}
