import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import oneSlice from './one-slide';
import rootSaga from './saga';

import twoSlice from './two-slide';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// disalbe thunk and add redux-saga middleware
const middleware = (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);

// mount it on the Store
const store = configureStore({
    reducer: {
        oneItems: oneSlice,
        twoItems: twoSlice,
    },
    middleware,
});

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
