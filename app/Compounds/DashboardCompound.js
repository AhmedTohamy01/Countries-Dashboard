import React, { useState } from "react"
import DisplayCompound from "./DisplayCompound"
import ControlsCompound from "./ControlsCompound"
import { SearchTermContext } from "../Context/SearchTermContext"
import { CheckBoxFilterTermContext } from "../Context/CheckBoxFilterTermContext"
import { RegionFilterTermContext } from "../Context/RegionFilterTermContext"
import { PopulationFromContext } from "../Context/PopulationFromContext"
import { PopulationToContext } from "../Context/PopulationToContext"

export default DashboardCompound

function DashboardCompound({ children }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [checkBoxFilterTerm, setCheckBoxFilterTerm] = useState("name")
  const [regionFilterTerm, setRegionFilterTerm] = useState("all")

  return (
    <>
      <SearchTermContext.Provider value={[searchTerm, setSearchTerm]}>
        <CheckBoxFilterTermContext.Provider
          value={[checkBoxFilterTerm, setCheckBoxFilterTerm]}
        >
          <RegionFilterTermContext.Provider
            value={[regionFilterTerm, setRegionFilterTerm]}
          >
            <PopulationFromContext.Provider
              value={[populationFrom, setPopulationFrom]}
            >
              <PopulationToContext.Provider
                value={[populationTo, setPopulationTo]}
              >
                <ControlsCompound />
                <DisplayCompound />
                {children}
              </PopulationToContext.Provider>
            </PopulationFromContext.Provider>
          </RegionFilterTermContext.Provider>
        </CheckBoxFilterTermContext.Provider>
      </SearchTermContext.Provider>
    </>
  )
}
