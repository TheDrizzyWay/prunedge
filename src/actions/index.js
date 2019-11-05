import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { GET_USER, SET_USER, GET_USER_ERROR } from './types';
const mockApiUrl = 'https://5dc1ca546ca10a0014d5dc98.mockapi.io/api/v1';

export const getUser = () => ({
    type: GET_USER
});

export default function *dispatchGetUser () {
    try {
        const { data } = yield call(axios.get, `${mockApiUrl}/user`);
        yield put({
            type: SET_USER,
            payload: data
        });
    } catch (error) {
        yield put({
            type: GET_USER_ERROR,
            payload: error.message
        });
    }
}