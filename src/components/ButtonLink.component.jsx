import "./ButtonLink.style"
import React, {Component} from "react"

import { Link } from "./Link.component"

import { createBEM } from "../util/createBEM"

export const ButtonLink = ({className, linkTo, elm, theme, type, ...props})=>{
	const block = 'button-link'
	let currentTheme = 'regular'
	const modifier = {}
	if(type){
		modifier[`type-${type}`] = type ? true : false
	}
	if(theme){
		currentTheme = theme
	}
	modifier[`theme-${currentTheme}`] = currentTheme
	const SubElm = elm
	return (!SubElm)?(<Link type="no-line" {...props} className={createBEM({className, block, modifier})} to={linkTo} />):(
		<SubElm type="no-line" {...props} className={createBEM({className, block, modifier})} {...props}/>
	)
}