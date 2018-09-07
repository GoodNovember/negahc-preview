import { createStore, combineReducers } from "redux"
import { historyReducer, history } from "../history"
import { routerReducer, registerPages } from "../router"

import * as PAGES from "../pages"

const masterReducer = combineReducers({
	history:historyReducer,
	router:routerReducer,
})

export const store = createStore(masterReducer)

const SetHistoryPathname = (pathname) => store.dispatch({type:'[history] set-pathname', payload:pathname})

const ignoreHistoryUpdates = history.listen((location)=>{ 
	SetHistoryPathname(location.pathname)
})

SetHistoryPathname(history.location.pathname)

// this is to help ensure we only register the pages once and only once.
window.addEventListener("load",()=>{
	registerPages(PAGES)
})
