import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index";
import { favAct } from "../store/fav-slice";
import { countryFinal } from "./Listing";

const Country = ({ country }: { country: countryFinal }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const favoriteCountry = useSelector((state: RootState) =>
    state.favoriteCountries.value.find(
      (favCountry) => country.name === favCountry.name
    )
  );

  const updateHandler = () => {
    if (!favoriteCountry)
      dispatch(
        favAct.addFav({
          name: country.name,
          flag: country.flags,
        })
      );
    else dispatch(favAct.removeFav(favoriteCountry));
  };

  return (
    <li>
      <img src={country.flags} alt={country.name} />
      <h3>{country.name}</h3>
      <button onClick={() => setShow(!show)}> Details</button>
      {show && (
        <div>
          <div>Population: {country.population}</div>
          <div>Capital: {country.capital}</div>
        </div>
      )}
      <button onClick={updateHandler}>
        {!favoriteCountry ? "Add" : "Remove "}
      </button>
    </li>
  );
};

export default Country;
