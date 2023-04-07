import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

export const App: FC = (): JSX.Element => {
  return (
    <Grid container justifyContent='center' spacing={'1rem'}>
      <Typography>React Query Example</Typography>
    </Grid>
  );
};
