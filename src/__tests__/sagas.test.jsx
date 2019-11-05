import dispatchGetUser from '../actions/index';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

const url = 'https://5dc1ca546ca10a0014d5dc98.mockapi.io/api/v1/user';

describe('dispatchGetUser', () => {
  const iterator = dispatchGetUser();
  test('first yield', () => {
    const firstCall = iterator.next();
    expect(firstCall).toEqual({value: call(axios.get, url), done: false});
  })

  test('second yield', () => {
    const secondCall = iterator.next();
    expect(secondCall).toEqual({value: put({
        type: 'GET_USER_ERROR', payload: `Cannot read property 'data' of undefined`
    }), done: false});
  })
  
  test('third yield', () => {
    const thirdCall = iterator.next();
    expect(thirdCall).toEqual({value: undefined, done: true});
  })
})