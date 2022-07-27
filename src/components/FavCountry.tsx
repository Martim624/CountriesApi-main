import { Fragment } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "../store/index";

const Sidebar = () => {
  const favCountries = useSelector(
    (state: RootState) => state.favoriteCountries.value
  );

  return (
    <Fragment>
      <div>
        <h1> Favorite countries: </h1>
        {favCountries
          .filter((country) => country.name)
          .map((country) => (
            <div key={country.name}>
              <img src={country.flag} alt={country.name} />

              <h4>{country.name}</h4>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Sidebar;
