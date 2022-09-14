import { useEffect, useState } from "react"

const Dropdown = ({articles, handleSelect}) => {

  const getOptions = () => {
    let categories = articles.reduce((acc, cur) => {
      !acc.includes(cur.section.toUpperCase()) && acc.push(cur.section.toUpperCase())
      return acc
    }, [])
    return categories
  }

  const generateDropdownOptions = (options) => {
    return options.map(category => {
      return (
        <option value={category} key={category}>{category}</option>
      )
    })
  }

  return (
    <select onChange={(e) => handleSelect(e.target.value)}>
      <option value='' defaultValue={''} >VIEW ALL</option>
      {generateDropdownOptions(getOptions())}
    </select>
  )
}

export default Dropdown