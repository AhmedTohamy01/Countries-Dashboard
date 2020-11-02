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
import { RegionFilterTermContext } from "../Context/RegionFilterTermContext"
import { PopulationFromContext } from "../Context/PopulationFromContext"
import { PopulationToContext } from "../Context/PopulationToContext"

export default ControlsCompound

function ControlsCompound({ children }) {
  const [searchTerm, setSearchTerm] = useContext(SearchTermContext)
  const [checkBoxFilterTerm, setCheckBoxFilterTerm] = useContext(
    CheckBoxFilterTermContext
  )
  const [regionFilterTerm, setRegionFilterTerm] = useContext(
    RegionFilterTermContext
  )
  const [populationFrom, setPopulationFrom] = useContext(PopulationFromContext)
  const [populationTo, setPopulationTo] = useContext(PopulationToContext)

  const [isNameCheckBoxChecked, setIsNameCheckBoxChecked] = useState(true)
  const [isCapitalCheckBoxChecked, setIsCapitalCheckBoxChecked] = useState(
    false
  )
  const [isLangCheckBoxChecked, setIsLangCheckBoxChecked] = useState(false)
  const [isAllRegionsChecked, setAllRegionsChecked] = useState(true)
  const [isAsiaRegionChecked, setIsAsiaRegionChecked] = useState(false)
  const [isAfricaRegionChecked, setIsAfricaRegionChecked] = useState(false)
  const [isEuropeRegionChecked, setIsEuropeRegionChecked] = useState(false)
  const [isAmericasRegionChecked, setIsAmericasRegionChecked] = useState(false)
  const [isOceaniaRegionChecked, setIsOceaniaRegionChecked] = useState(false)
  const [isPolarRegionChecked, setIsPolarRegionChecked] = useState(false)

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

  function doLangCheckBoxActions() {
    setIsNameCheckBoxChecked(false)
    setIsCapitalCheckBoxChecked(false)
    setIsLangCheckBoxChecked(true)
    setCheckBoxFilterTerm("languages")
  }

  function doAllRegionsCheckBoxActions() {
    setAllRegionsChecked(true)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm("all")
  }

  function doAsiaCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(true)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm("asia")
  }

  function doAfricaCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(true)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm("africa")
  }

  function doEuropeCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(true)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm("europe")
  }

  function doAmericasCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(true)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm("americas")
  }

  function doOceaniaCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(true)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm("oceania")
  }

  function doPolarCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(true)
    setRegionFilterTerm("polar")
  }

  function doClearButtonActions() {
    setSearchTerm("")
    setIsNameCheckBoxChecked(true)
    setIsCapitalCheckBoxChecked(false)
    setIsLangCheckBoxChecked(false)
    setCheckBoxFilterTerm("name")
    setAllRegionsChecked(true)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm("all")
    setPopulationFrom("")
    setPopulationTo("")
  }

  function doSearchFieldActions(event) {
    setSearchTerm(event.target.value)
  }

  function doFromFieldActions(event) {
    setPopulationFrom(event.target.value)
  }

  function doToFieldActions(event) {
    setPopulationTo(event.target.value)
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
                <SearchField
                  value={searchTerm}
                  onChange={(event) => doSearchFieldActions(event)}
                />
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
                <CheckBox
                  id="language"
                  label="Language"
                  checked={isLangCheckBoxChecked}
                  onClick={() => doLangCheckBoxActions()}
                ></CheckBox>
              </SearchCheckBoxesWrapper>
            </SearchFilterWrapper>
          </Grid>
          <Grid item>
            <RegionFilterWrapper>
              <Text>Region Filter</Text>
              <Box>
                <CheckBox
                  id="all"
                  label="All Regions"
                  checked={isAllRegionsChecked}
                  onClick={() => doAllRegionsCheckBoxActions()}
                />
              </Box>
              <Box>
                <CheckBox
                  id="asia"
                  label="Asia"
                  checked={isAsiaRegionChecked}
                  onClick={() => doAsiaCheckBoxActions()}
                />
                <CheckBox
                  id="africa"
                  label="Africa"
                  checked={isAfricaRegionChecked}
                  onClick={() => doAfricaCheckBoxActions()}
                />
                <CheckBox
                  id="europe"
                  label="Europe"
                  checked={isEuropeRegionChecked}
                  onClick={() => doEuropeCheckBoxActions()}
                />
              </Box>
              <Box>
                <CheckBox
                  id="americas"
                  label="Americas"
                  checked={isAmericasRegionChecked}
                  onClick={() => doAmericasCheckBoxActions()}
                />
                <CheckBox
                  id="oceania"
                  label="Oceania"
                  checked={isOceaniaRegionChecked}
                  onClick={() => doOceaniaCheckBoxActions()}
                />
                <CheckBox
                  id="polar"
                  label="Polar"
                  checked={isPolarRegionChecked}
                  onClick={() => doPolarCheckBoxActions()}
                />
              </Box>
            </RegionFilterWrapper>
          </Grid>
          <Grid item>
            <PopulationFilterWrapper>
              <Text>Population Filter</Text>
              <FromFieldWrapper>
                <FromField
                  value={populationFrom}
                  onChange={(event) => doFromFieldActions(event)}
                />
              </FromFieldWrapper>
              <ToFieldWrapper>
                <ToField
                  value={populationTo}
                  onChange={(event) => doToFieldActions(event)}
                />
              </ToFieldWrapper>
            </PopulationFilterWrapper>
          </Grid>
        </FiltersWrapper>
        <ClearButtonWrapper>
          <ClearButton
            variant="contained"
            color="secondary"
            onClick={doClearButtonActions}
            size="large"
          >
            Clear All Filters
          </ClearButton>
        </ClearButtonWrapper>
      </ControlsSectionWrapper>
      {children}
    </>
  )
}
