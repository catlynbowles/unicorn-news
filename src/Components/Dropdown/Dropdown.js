import './Dropdown.scss'

const Dropdown = ({articles, handleSelect}) => {

  const getOptions = () => {
    return articles.reduce((acc, cur) => {
      !acc.includes(cur.section.toUpperCase()) && acc.push(cur.section.toUpperCase())
      return acc
    }, [])
  }

  const generateDropdownOptions = (options) => {
    return options.map(category => {
      return (
        <option tabIndex='0' value={category} key={category}>{category}</option>
      )
    })
  }

  return (
    <select className='dropdown' onChange={(e) => handleSelect(e.target.value)}>
      <option tabIndex='0' value='' defaultValue={''} >VIEW ALL</option>
      {generateDropdownOptions(getOptions())}
    </select>
  )
}

export default Dropdown