import { RematchDispatch, RematchRootState, init } from '@rematch/core';
import persistPlugin from "@rematch/persist";
import storage from 'redux-persist/lib/storage';

import { RootModel, models } from './models/root.model';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['cocktailStore']
};

export const store = init<RootModel>({
    models,
    plugins: [persistPlugin(persistConfig)],
  });

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;


