import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Home/index.jsx';
import reducer from './reducers/redux';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import saga from 'redux-saga';
// import rootSaga from './sagas/saga';
// const sagaMiddleware = saga();
const store = createStore(reducer)//, applyMiddleware(sagaMiddleware));
const root = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, root);
//sagaMiddleware.run(rootSaga);