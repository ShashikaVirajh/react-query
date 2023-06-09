import { createModel } from "@rematch/core";
import { RootModel } from "./root.model";

export type TCocktail = {
  cocktailId: string;
  cocktailName: string;
  category: string;
  description: string;
  image: string;
};

type TCocktailState = {
  cocktailList: TCocktail[] | [];
  favouriteList: TCocktail[] | [];
};

const COCKTAIL_INITIAL_STATE: TCocktailState = {
  cocktailList: [],
  favouriteList: []
};

export const cocktailStore = createModel<RootModel>()({
  state: {...COCKTAIL_INITIAL_STATE},
  reducers: {
    setFetchedCocktailList(state: TCocktailState, payload: TCocktail[])  {
      return {...state, cocktailList: payload}
    },
    handleAddToFavourites(state: TCocktailState, payload: TCocktail)  {
      return {...state, favouriteList: [...state.favouriteList, payload, ]}
    },
    handleRemoveFromFavourites(state: TCocktailState, payload: string)  {
      const updatedFavouriteList = state.favouriteList.filter((favourite) => {
        return favourite.cocktailId !== payload;
      });

      return {...state, favouriteList: updatedFavouriteList}
    },
  },
  effects: (dispatch)  => ({
    addToFavourites(payload: TCocktail) {
      dispatch.cocktailStore.handleAddToFavourites(payload);
    },
    removeFromFavourites(payload: string) {
      dispatch.cocktailStore.handleRemoveFromFavourites(payload)
    }
  })
})

