import axios from 'axios';
import { COCKTAIL_LIST_LENGTH, FETCH_COCKTAILS_URL } from '../constants';
import { normalizeFetchRandomCocktailsResponse } from '../normalizers/cocktail.normalizer';
import { TCocktail } from '../store/models/cocktail.model';


export class CocktailService {
  static fetchCocktailList = async (): Promise<TCocktail[]> => {
    const proms = [];

    for (let i = 1; i <= COCKTAIL_LIST_LENGTH; i++) {
      proms.push(
        axios.get(FETCH_COCKTAILS_URL, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      );
    }
    const list = await Promise.all(proms);

    return normalizeFetchRandomCocktailsResponse(list);
  };
}
