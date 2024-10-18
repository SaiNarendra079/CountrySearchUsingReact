import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const CardDetail = ({newcolors}) => {
  const{ id } = useParams();
  const[details,setDetails] = useState(null);
  const [languages, setLanguages] = useState([]);

  const api = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
      const countryData = response.data[0];
      console.log(countryData);
      setDetails(countryData);
      const langArray = Object.values(countryData.languages);
      setLanguages(langArray);
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  };


  useEffect(()=>{
    api();
  },[id]);
  return (
    <>
      {!details? 'Loading':
      
      <div className='main-section' style={{backgroundColor:newcolors.secondBgColor,color:newcolors.color, minheight:'100vh', textAlign:'center',alignContent:'center'}}>
        <img src={details.flags.png} alt="" />
        <h4>Name:{details.name.common}</h4>
        <h4>Official Name: {details.name.official}</h4>
        <h4>Capital:{details.capital}</h4>
        <h4>Population:{details.population.toLocaleString()}</h4>
        <h4>Total Area :{details.area.toLocaleString()}</h4>
        <h4>language: {languages.join(',')}</h4>
        <h4>Region:{details.region}</h4>
        <h4>Continent:{details.continents}</h4>
        <h4>Sub Region:{details.subregion}</h4>
        <h4>Time Zone: {details.timezones}</h4>

      </div>
      
      }
    </>
  )
}

export default CardDetail
