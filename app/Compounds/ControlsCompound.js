import React from "react"
import ControlsSectionWrapper from '../Components/Controls/ControlsSectionWrapper'
import FiltersWrapper from '../Components/Controls/FiltersWrapper'
import SearchFieldWrapper from '../Components/Controls/SearchFieldWrapper'
import SearchFilterWrapper from '../Components/Controls/SearchFilterWrapper'
import Text from "../Components/Controls/Text"

export default ControlsCompound

function ControlsCompound({ children }) {
  return (
    <>
      <ControlsSectionWrapper>
        <FiltersWrapper>
          <SearchFilterWrapper>
            <Text>Search Filter</Text>
            <SearchFieldWrapper>

            </SearchFieldWrapper>
          </SearchFilterWrapper>
        </FiltersWrapper>
      </ControlsSectionWrapper>
      {children}
    </>
  )
}