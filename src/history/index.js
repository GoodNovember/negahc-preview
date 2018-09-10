import createHistory from "history/createBrowserHistory"

import { combineReducers } from "redux"

import { PATH_PREFIX } from "../pathPrefix.js"

export const history = createHistory({
	basename:PATH_PREFIX
})

const INITIAL_PATHNAME = PATH_PREFIX || '/'

const pathnameReducer = (state=INITIAL_PATHNAME,action) => {
	const {type, payload} = action
	switch(type){
		case '[history] reset':{
			return INITIAL_PATHNAME
		}
		case '[history] set-pathname':{
			if(typeof payload === 'string'){
				return payload
			}else{
				return state
			}
		}
		default: return state
	}
}

export const historyReducer = combineReducers({
	pathname:pathnameReducer,
})

