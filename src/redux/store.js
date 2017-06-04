import {createStore, applyMiddleware, combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import user from './modules/loginModule';
import poll from './modules/pollsModule';
import myPolls from './modules/ownModule';

const reducers = combineReducers({
	user,
	poll,
	myPolls
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

