import { takeEvery, all } from 'redux-saga/effects';
import { GET_USER } from './actions/types';
import dispatchGetUser from './actions/index';

function *watchGetUser () {
    yield takeEvery(GET_USER, dispatchGetUser);
}

export default function *rootSaga () {
    yield all([
        watchGetUser()
    ]);
}
