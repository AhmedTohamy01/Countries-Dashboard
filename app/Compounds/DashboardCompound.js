import React, { useState } from "react"
import DisplayCompound from "./DisplayCompound"
import ControlsCompound from "./ControlsCompound"
import { SearchTermContext } from "../Context/SearchTermContext"
import { CheckBoxFilterTermContext } from "../Context/CheckBoxFilterTermContext"

export default DashboardCompound

function DashboardCompound({ children }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [checkBoxFilterTerm, setCheckBoxFilterTerm] = useState("name")

  return (
    <>
      <SearchTermContext.Provider value={[searchTerm, setSearchTerm]}>
        <CheckBoxFilterTermContext.Provider
          value={[checkBoxFilterTerm, setCheckBoxFilterTerm]}
        >
          <ControlsCompound />
          <DisplayCompound />
          {children}
        </CheckBoxFilterTermContext.Provider>
      </SearchTermContext.Provider>
    </>
  )
}
