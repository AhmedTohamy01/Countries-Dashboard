import React, { useState, useContext } from "react"
import DisplaySectionWrapper from "../Components/Display/DisplaySectionWrapper"
import GetData from "../CustomHooks/GetData"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { SearchTermContext } from "../Context/SearchTermContext"
import { CheckBoxFilterTermContext } from "../Context/CheckBoxFilterTermContext"
import { RegionFilterTermContext } from "../Context/RegionFilterTermContext"

export default DisplayCompound

function DisplayCompound({ children }) {
  const useStyles = makeStyles({
    header: {
      fontWeight: "bold",
      width: "max-content",
      minWidth: 150,
    },
  })
  const classes = useStyles()
  const { data } = GetData("data")

  const [searchTerm, setSearchTerm] = useContext(SearchTermContext)
  const [checkBoxFilterTerm, setCheckBoxFilterTerm] = useContext(
    CheckBoxFilterTermContext
  )
  const [regionFilterTerm, setRegionFilterTerm] = useContext(
    RegionFilterTermContext
  )

  return (
    <>
      <DisplaySectionWrapper>
        <TableContainer component={Paper} elevation={10}>
          <Table size="small" aria-label="Countries Table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Country Name</TableCell>
                <TableCell className={classes.header}>Capital</TableCell>
                <TableCell className={classes.header}>Region</TableCell>
                <TableCell className={classes.header}>Population</TableCell>
                <TableCell className={classes.header}>Languages</TableCell>
                <TableCell className={classes.header}>Time Zones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchTerm !== "" && checkBoxFilterTerm === "languages" //case-8
                ? data
                    .filter((item) =>
                      item.languages
                        .map((lang) => lang.name)
                        .toString()
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item.languages.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item.timezones.toString().split(",").join(" ")}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== "" && //case-9
                  (checkBoxFilterTerm === "name" ||
                    checkBoxFilterTerm === "capital")
                ? data
                    .filter((item) =>
                      item[checkBoxFilterTerm]
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item.languages.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item.timezones.toString().split(",").join(" ")}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm === "" //case-12
                ? data.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.capital}</TableCell>
                      <TableCell>{item.region}</TableCell>
                      <TableCell>{item.population}</TableCell>
                      <TableCell>
                        {item.languages.map((lang) => `${lang.name}, `)}
                      </TableCell>
                      <TableCell>
                        {item.timezones.toString().split(",").join(" ")}
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </DisplaySectionWrapper>
      {children}
    </>
  )
}
