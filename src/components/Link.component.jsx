import "./Link.style.scss"

import React from "react"

import { createBEM } from "../util/createBEM"

const block = 'link'

import { store } from "../store"
import { history } from "../history"

export const makePageLink = ( route ) => (props) => ( <Link {...props} to={route}/> )

export const Link = ({ className, type, to, isActive, elm, ...props })=>{
	const modifier = {}
	modifier['active'] = isActive
	modifier[`type-${type}`] = type

	const clickHandler = (e)=>{ 
		e.preventDefault() 
		if(to){
			// console.log("Would go to:", to)
			// store.dispatch({type:'[history] set-pathname',payload:to})
			history.push(to)
		}else{
			console.log("No Link To!")
		}
	}

	const SubElm = elm

	return (!SubElm)?(<a href="#" onClick={ clickHandler } {...props} className={createBEM({className,block,modifier})}/>):(
		<SubElm {...props}/>
	)
}