import { createBrowserHistory } from "history"
import { mutateObj } from "../util/objectHelp.js"

export const historyInstance = createBrowserHistory()

export const historyReducer = (
	state = {
		length:0,
		location:{
			hash:"",
			key:"",
			pathname:"",
			search:"",
			state:{}
		},
		action:undefined
	}, 
	action
)=>{
	const {type, location, length, historyAction} = action
	switch(type){
		case "SET_HISTORY_ACTION":{
			return mutateObj(state, { action:historyAction })
		}
		case "SET_HISTORY_LOCATION":{
			return mutateObj(state, { location })
		}
		case "SET_HISTORY_LENGTH":{
			return mutateObj(state, { length })
		}
		default:{
			return state
		}
	}
}

module.exports = {
	historyReducer,
	historyInstance
}