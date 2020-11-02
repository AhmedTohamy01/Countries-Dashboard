import React from "react"
import CheckBox from '../Components/Controls/CheckBox'
import ControlsSectionWrapper from '../Components/Controls/ControlsSectionWrapper'
import FiltersWrapper from '../Components/Controls/FiltersWrapper'
import RegionFilterWrapper from '../Components/Controls/RegionFilterWrapper'
import SearchCheckBoxesWrapper from '../Components/Controls/SearchCheckBoxesWrapper'
import SearchField from '../Components/Controls/SearchField'
import SearchFieldWrapper from '../Components/Controls/SearchFieldWrapper'
import SearchFilterWrapper from '../Components/Controls/SearchFilterWrapper'
import Text from "../Components/Controls/Text"
import { Grid, Box } from "@material-ui/core"

export default ControlsCompound

function ControlsCompound({ children }) {
  return (
    <>
      <ControlsSectionWrapper>
        <FiltersWrapper>
          <Grid item>
            <SearchFilterWrapper>
              <Text>Search Filter</Text>
              <SearchFieldWrapper>
                <SearchField />
              </SearchFieldWrapper>
              <SearchCheckBoxesWrapper>
                <CheckBox id="name" label="Name" />
                <CheckBox id="capital" label="Capital" />
                <CheckBox id="langauge" label="Language" />
              </SearchCheckBoxesWrapper>
            </SearchFilterWrapper>
          </Grid>
          <Grid item>
            <RegionFilterWrapper></RegionFilterWrapper>
          </Grid>
        </FiltersWrapper>
      </ControlsSectionWrapper>
      {children}
    </>
  )
}