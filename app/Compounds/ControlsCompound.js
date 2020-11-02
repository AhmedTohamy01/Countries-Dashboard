import React from "react"
import ControlsSectionWrapper from '../Components/Controls/ControlsSectionWrapper'
import FiltersWrapper from '../Components/Controls/FiltersWrapper'
import SearchFilterWrapper from '../Components/Controls/SearchFilterWrapper'

export default ControlsCompound

function ControlsCompound({ children }) {
  return (
    <>
      <ControlsSectionWrapper>
        <FiltersWrapper>
          <SearchFilterWrapper>
            
          </SearchFilterWrapper>
        </FiltersWrapper>
      </ControlsSectionWrapper>
      {children}
    </>
  )
}