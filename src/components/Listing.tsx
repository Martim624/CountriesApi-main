import React, { useEffect, useState } from "react";
import "../App.css";
import CountriesList from "./CountriesList";
import Search from "./Search";

export interface countriesInterface {
  region: string;
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: number;
  capital: string;
}

export interface countryFinal {
  region: string;
  flags: string;
  name: string;
  population: number;
  capital: string;
}

const Listing = () => {
  const [countries, setCountries] = useState<countryFinal[]>([]);
  const [regionFilter, setRegionFilter] = useState("");
  const [searchText, setSearchText] = useState("");

  const fetchCountriesHandler = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data: countriesInterface[] = await response.json();
    const transforedCountries: countryFinal[] = data.map((countries) => {
      return {
        region: countries.region,
        flags: countries.flags.png,
        name: countries.name.common,
        population: countries.population,
        capital: countries.capital,
      };
    });
    setCountries(transforedCountries);
  };

  useEffect(() => {
    fetchCountriesHandler();
  }, []);

  const changeSearch = (newValue: string) => {
    setSearchText(newValue);
  };

  const regions = ["Americas", "Europe", "Africa", "Asia", "Oceania"];

  return (
    <React.Fragment>
      <section>
        {regions.map((name) => {
          return (
            <button key={name} onClick={() => setRegionFilter(name)}>
              {name}
            </button>
          );
        })}
        <section>
          <Search onSearch={changeSearch} />
          <CountriesList
            countries={countries.filter((country) => {
              return (
                (regionFilter === "" || country.region === regionFilter) &&
                (searchText === "" ||
                  country.name
                    .toLowerCase()
                    .startsWith(searchText.toLowerCase()))
              );
            })}
          />
        </section>
      </section>
    </React.Fragment>
  );
};

export default Listing;
