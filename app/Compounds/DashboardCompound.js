import React, { useState } from 'react'
import { SearchTermContext } from '../Context/SearchTermContext'
import { CheckBoxFilterTermContext } from '../Context/CheckBoxFilterTermContext'
import { RegionFilterTermContext } from '../Context/RegionFilterTermContext'
import { PopulationFromContext } from '../Context/PopulationFromContext'
import { PopulationToContext } from '../Context/PopulationToContext'
import DisplayCompound from './DisplayCompound'
import ControlsCompound from './ControlsCompound'

export default DashboardCompound

function DashboardCompound ({ children }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [checkBoxFilterTerm, setCheckBoxFilterTerm] = useState('name')
  const [regionFilterTerm, setRegionFilterTerm] = useState('all')
  const [populationFrom, setPopulationFrom] = useState('')
  const [populationTo, setPopulationTo] = useState('')

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
