import React from "react"
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
              {data.map((item, index) => (
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DisplaySectionWrapper>
      {children}
    </>
  )
}
