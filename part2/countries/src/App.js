import { useEffect, useState } from 'react'
import axios from 'axios'

import Countries from './components/Countries'

const Filter = ({value, onChange}) =>
  <div>find countries <input value={value} onChange={onChange} /></div>

const App = () => {
  const [filter, setFilter] = useState('')
  const [live, setes] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setes(response.data))
  }, [])

  const hange = (event) => setFilter(event.target.value)

  const mes = live.map(country =>
    country.name.common.toLowerCase()
  )

  const how = mes.includes(filter.toLowerCase())
    ? live.filter(country =>
      country.name.common.toLowerCase() === filter.toLowerCase())
    : live.filter(country =>
      country.name.common.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <Filter value={filter} onChange={hange} />

      <Countries countries={how} setFilter={setFilter} />
    </div>
  )
}

export default App