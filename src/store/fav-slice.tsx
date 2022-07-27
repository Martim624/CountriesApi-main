import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface favoriteCountries {
  name: string;
  flag: string;
}

interface valueState {
  value: favoriteCountries[];
}

const initialState = {
  value: [],
} as valueState;

const favoriteSlice = createSlice({
  name: "favCountries",
  initialState: initialState,
  reducers: {
    addFav(state, action: PayloadAction<favoriteCountries>) {
      state.value.push({
        name: action.payload.name,
        flag: action.payload.flag,
      });
    },

    removeFav(state, action: PayloadAction<favoriteCountries>) {
      state.value = state.value.filter(
        (country) => country.name !== action.payload.name
      );
    },
  },
});

export const favAct = favoriteSlice.actions;
export default favoriteSlice.reducer;
