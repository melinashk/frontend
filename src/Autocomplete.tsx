import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'

interface Country {
  cca2: string;
  name: {
    common: string;
  }
  capital: string;
  ccn3: string;
}

interface CountrySelectProps {
  onAddressChange: (country: any) => void; // Callback function to pass the selected country data
}

const CountrySelect = ({onAddressChange} : CountrySelectProps) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        // Extract the relevant data from the response
        const countryData: Country[] = response.data;

        // Set the formatted data as the options for Autocomplete
        setCountries(countryData);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleCountrySelection = (event: React.ChangeEvent<{}>, country: Country | null) => {
    if (country) {
      const selectedAddress = `${country.capital}, ${country.name.common}`;
      onAddressChange(selectedAddress); // Callback to pass the selected address to App.tsx
    }
  };

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => `${option.capital}, ${option.name.common}`}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://restcountries.com/v3.1/all${option.cca2}.png`}
            srcSet={`https://restcountries.com/v3.1/all${option.ccn3}.png 2x`}
            alt=""
          />
          <div>
            <span style={{ fontSize: '1.2em' }}>{option.name.common}</span>
            <br />
            <span style={{ fontSize: '0.8em' }}>{option.capital}</span>
          </div> 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
      onChange={handleCountrySelection}
    />
  );
}

export default CountrySelect
