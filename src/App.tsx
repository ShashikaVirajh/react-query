import { Grid, Typography } from '@mui/material';
import { CocktailCard } from './components/cocktail-card.component';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { CocktailService } from './services/cocktail.service';

export const App: FC = (): JSX.Element => {
  const {
    isLoading,
    error: cocktailError,
    data: cocktailList
  } = useQuery('fetch-cocktail-list', async () => CocktailService.fetchCocktailList());

  if (isLoading) {
    return (
      <Typography textAlign='center' mt='20rem' color='blue'>
        Loading...
      </Typography>
    );
  }

  if (cocktailError) {
    return (
      <Typography textAlign='center' mt='20rem' color='red'>
        ERROR: {(cocktailError as Error).message}
      </Typography>
    );
  }

  return (
    <Grid container justifyContent='center' spacing={'1rem'}>
      {cocktailList?.map((cocktail, index) => (
        <Grid key={index} item xs={2}>
          <CocktailCard key={cocktail.cocktailId} cocktailInfo={cocktail} />
        </Grid>
      ))}
    </Grid>
  );
};
