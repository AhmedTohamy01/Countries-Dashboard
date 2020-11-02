import React, { useState, useContext } from "react"
import CheckBox from "../Components/Controls/CheckBox"
import ControlsSectionWrapper from "../Components/Controls/ControlsSectionWrapper"
import FiltersWrapper from "../Components/Controls/FiltersWrapper"
import RegionFilterWrapper from "../Components/Controls/RegionFilterWrapper"
import SearchCheckBoxesWrapper from "../Components/Controls/SearchCheckBoxesWrapper"
import SearchField from "../Components/Controls/SearchField"
import SearchFieldWrapper from "../Components/Controls/SearchFieldWrapper"
import SearchFilterWrapper from "../Components/Controls/SearchFilterWrapper"
import Text from "../Components/Controls/Text"
import Title from "../Components/Controls/Title"
import { Grid, Box } from "@material-ui/core"
import PopulationFilterWrapper from "../Components/Controls/PopulationFilterWrapper"
import FromFieldWrapper from "../Components/Controls/FromFieldWrapper"
import FromField from "../Components/Controls/FromField"
import ToFieldWrapper from "../Components/Controls/ToFieldWrapper"
import ToField from "../Components/Controls/ToField"
import ClearButtonWrapper from "../Components/Controls/ClearButtonWrapper"
import ClearButton from "../Components/Controls/ClearButton"
import { SearchTermContext } from "../Context/SearchTermContext"
import { CheckBoxFilterTermContext } from "../Context/CheckBoxFilterTermContext"

export default ControlsCompound

function ControlsCompound({ children }) {
  const [searchTerm, setSearchTerm] = useContext(SearchTermContext)
  const [checkBoxFilterTerm, setCheckBoxFilterTerm] = useContext(
    CheckBoxFilterTermContext
  )

  const [isNameCheckBoxChecked, setIsNameCheckBoxChecked] = useState(true)
  const [isCapitalCheckBoxChecked, setIsCapitalCheckBoxChecked] = useState(
    false
  )
  const [isLangCheckBoxChecked, setIsLangCheckBoxChecked] = useState(false)

  function doNameCheckBoxActions() {
    setIsNameCheckBoxChecked(true)
    setIsCapitalCheckBoxChecked(false)
    setIsLangCheckBoxChecked(false)
    setCheckBoxFilterTerm("name")
  }

  function doCapitalCheckBoxActions() {
    setIsNameCheckBoxChecked(false)
    setIsCapitalCheckBoxChecked(true)
    setIsLangCheckBoxChecked(false)
    setCheckBoxFilterTerm("capital")
  }

  return (
    <>
      <ControlsSectionWrapper>
        <Title>Countries Dashboard</Title>
        <FiltersWrapper>
          <Grid item>
            <SearchFilterWrapper>
              <Text>Search Filter</Text>
              <SearchFieldWrapper>
                <SearchField />
              </SearchFieldWrapper>
              <SearchCheckBoxesWrapper>
                <CheckBox
                  id="name"
                  label="Name"
                  checked={isNameCheckBoxChecked}
                  onClick={() => doNameCheckBoxActions()}
                />
                <CheckBox
                  id="capital"
                  label="Capital"
                  checked={isCapitalCheckBoxChecked}
                  onClick={() => doCapitalCheckBoxActions()}
                />
                <CheckBox id="langauge" label="Language" />
              </SearchCheckBoxesWrapper>
            </SearchFilterWrapper>
          </Grid>
          <Grid item>
            <RegionFilterWrapper>
              <Text>Region Filter</Text>
              <Box>
                <CheckBox id="all" label="All Regions"></CheckBox>
              </Box>
              <Box>
                <CheckBox id="asia" label="Asia"></CheckBox>
                <CheckBox id="africa" label="Africa"></CheckBox>
                <CheckBox id="europe" label="Europe"></CheckBox>
              </Box>
              <Box>
                <CheckBox id="americas" label="Americas"></CheckBox>
                <CheckBox id="oceania" label="Oceania"></CheckBox>
                <CheckBox id="polar" label="Polar"></CheckBox>
              </Box>
            </RegionFilterWrapper>
          </Grid>
          <Grid item>
            <PopulationFilterWrapper>
              <Text>Population Filter</Text>
              <FromFieldWrapper>
                <FromField />
              </FromFieldWrapper>
              <ToFieldWrapper>
                <ToField />
              </ToFieldWrapper>
            </PopulationFilterWrapper>
          </Grid>
        </FiltersWrapper>
        <ClearButtonWrapper>
          <ClearButton variant="contained" color="secondary" size="large">
            Clear All Filters
          </ClearButton>
        </ClearButtonWrapper>
      </ControlsSectionWrapper>
      {children}
    </>
  )
}
