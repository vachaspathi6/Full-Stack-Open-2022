import Weather from './Weather'

const y = ({country}) =>
  <div>
    <h2>{country.name.common}</h2>
    capital {country.capital[0]}<br />
    area {country.area}

    <h3>languages:</h3>
    <ul>
      {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
    </ul>

    <img src={country.flags.png} alt={`The flag of ${country.name.common}`} />

    <Weather country={country} />
  </div>

export default y