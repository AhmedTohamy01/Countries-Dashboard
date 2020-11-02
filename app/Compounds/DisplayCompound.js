/* eslint-disable indent */
import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SearchTermContext } from '../Context/SearchTermContext'
import { CheckBoxFilterTermContext } from '../Context/CheckBoxFilterTermContext'
import { RegionFilterTermContext } from '../Context/RegionFilterTermContext'
import { PopulationFromContext } from '../Context/PopulationFromContext'
import { PopulationToContext } from '../Context/PopulationToContext'
import GetData from '../CustomHooks/GetData'
import DisplaySectionWrapper from '../Components/Display/DisplaySectionWrapper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

export default DisplayCompound

function DisplayCompound ({ children }) {
  const useStyles = makeStyles({
    header: {
      fontWeight: 'bold',
      width: 'max-content',
      minWidth: 150
    }
  })
  const classes = useStyles()

  const { data } = GetData('data')

  const [searchTerm, setSearchTerm] = useContext(SearchTermContext)
  const [checkBoxFilterTerm, setCheckBoxFilterTerm] = useContext(
    CheckBoxFilterTermContext
  )
  const [regionFilterTerm, setRegionFilterTerm] = useContext(
    RegionFilterTermContext
  )
  const [populationFrom, setPopulationFrom] = useContext(PopulationFromContext)
  const [populationTo, setPopulationTo] = useContext(PopulationToContext)

  return (
    <>
      <DisplaySectionWrapper>
        <TableContainer component={Paper} elevation={10}>
          <Table size='small' aria-label='Countries Table'>
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
              {searchTerm !== '' && // case-1
              checkBoxFilterTerm === 'languages' &&
              regionFilterTerm !== 'all' &&
              populationFrom &&
              populationTo
                ? data
                    .filter(
                      (item) =>
                        item.languages
                          .map((lang) => lang.name)
                          .toString()
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) &&
                        item.region.toLowerCase() ===
                          regionFilterTerm.toLowerCase() &&
                        item.population <= populationTo &&
                        item.population >= populationFrom
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && // case-2
                  (checkBoxFilterTerm === 'name' ||
                    checkBoxFilterTerm === 'capital') &&
                  regionFilterTerm !== 'all' &&
                  populationFrom &&
                  populationTo
                ? data
                    .filter(
                      (item) =>
                        item[checkBoxFilterTerm]
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) &&
                        item.region.toLowerCase() ===
                          regionFilterTerm.toLowerCase() &&
                        item.population <= populationTo &&
                        item.population >= populationFrom
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && // case-3
                  checkBoxFilterTerm === 'languages' &&
                  regionFilterTerm !== 'all'
                ? data
                    .filter(
                      (item) =>
                        item.languages
                          .map((lang) => lang.name)
                          .toString()
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) &&
                        item.region.toLowerCase() ===
                          regionFilterTerm.toLowerCase()
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && // case-4
                  (checkBoxFilterTerm === 'name' ||
                    checkBoxFilterTerm === 'capital') &&
                  regionFilterTerm !== 'all'
                ? data
                    .filter(
                      (item) =>
                        item[checkBoxFilterTerm]
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) &&
                        item.region.toLowerCase() ===
                          regionFilterTerm.toLowerCase()
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' &&
                  checkBoxFilterTerm === 'languages' &&
                  populationFrom &&
                  populationTo
                ? data
                    .filter(
                      (item) =>
                        item.languages
                          .map((lang) => lang.name)
                          .toString()
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) &&
                        item.population <= populationTo &&
                        item.population >= populationFrom
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && // case-6
                  (checkBoxFilterTerm === 'name' ||
                    checkBoxFilterTerm === 'capital') &&
                  populationFrom &&
                  populationTo
                ? data
                    .filter(
                      (item) =>
                        item[checkBoxFilterTerm]
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) &&
                        item.population <= populationTo &&
                        item.population >= populationFrom
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : regionFilterTerm !== 'all' && populationFrom && populationTo // case-7
                ? data
                    .filter(
                      (item) =>
                        item.region.toLowerCase() ===
                          regionFilterTerm.toLowerCase() &&
                        item.population <= populationTo &&
                        item.population >= populationFrom
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && checkBoxFilterTerm === 'languages' // case-8
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && // case-9
                  (checkBoxFilterTerm === 'name' ||
                    checkBoxFilterTerm === 'capital')
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : regionFilterTerm !== 'all' // case-10
                ? data
                    .filter(
                      (item) =>
                        item.region.toLowerCase() ===
                        regionFilterTerm.toLowerCase()
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : populationFrom && populationTo // case-11
                ? data
                    .filter(
                      (item) =>
                        item.population <= populationTo &&
                        item.population >= populationFrom
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
                          {item.timezones.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm === '' // case-12
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
                      {item.timezones.toString().split(',').join(' ')}
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
/* eslint-enable indent */
