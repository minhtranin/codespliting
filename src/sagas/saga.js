import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
export default function* rootSaga(){
    yield all([
        (function* fetch(){
            yield takeEvery('CALL_SAGA', function*(){
                return [1, 2, 3];
            })
        })
    ])
}