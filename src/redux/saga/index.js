import { call, takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';
import { action1 } from '~/redux/one-slide';
import { sagaActions } from './sagaActions';

let callAPI = async ({ url, method, data }) => {
    return await Axios({
        url,
        method,
        data,
    });
};

export function* fetchDataSaga() {
    try {
        let result = yield call(() => callAPI({ url: 'https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos' }));
        yield put(action1(result.data));
    } catch (e) {
        yield put({ type: 'TODO_FETCH_FAILED' });
    }
}

export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
