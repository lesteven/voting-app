import {createStore, applyMiddleware, combineReducers,compose} from 'redux';
import user from './modules/loginModule';
import thunk from 'redux-thunk';

const reducers = combineReducers({
	user
})

export default function configureStore(initialState){
	return createStore(
		reducers,
		initialState,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtension? window.devToolsExtension():f=>f
		)
	)
	
}

