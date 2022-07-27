import { Fragment } from "react";
import Country from "./Country";
import { countryFinal } from "./Listing";

//import classes from "./CountriesList.module.css";
const ContriesList = ({ countries }: { countries: countryFinal[] }) => {
  return (
    <ul>
      <Fragment>
        {countries.map((country) => {
          return (
            <Fragment>
              <Country key={country.name} country={country} />
            </Fragment>
          );
        })}
      </Fragment>
    </ul>
  );
};

export default ContriesList;
