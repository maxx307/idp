import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware, {Task} from 'redux-saga';
import rootSaga from './saga';
import rootReducer, {State} from "./reducers";
import {Context, createWrapper} from "next-redux-wrapper";

export interface SagaStore extends Store<State> {
    sagaTask: Task;
}

export const makeStore = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    (store as unknown as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper<SagaStore>((makeStore as any), {debug: true});

