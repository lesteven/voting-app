import {createStore, applyMiddleware, combineReducers,compose} from 'redux';
import loginReducer from './modules/loginModule';

const reducers = combineReducers({
	loginReducer
})

export function configureStore(initialState){
	const store = createStore(
		reducers,
		initialState,
		compose(
			window.devToolsExtension? window.devToolsExtension():f=>f
		)
	)
	return store;
}

export const store = configureStore();