import "./Navigation.scss"
import React from "react"

import { Link } from "./Link.component"

import { BEM } from "../util/BEM"

const block = 'navigation'

export const Navigation = ({children,type}) => {
	const modifier = {}
	modifier[`type-${type}`] = type ? true : false
	return (
		<BEM block={block} modifier={modifier}>
			<BEM block={block} element="width-limiter" modifier={modifier}>{children}</BEM>
		</BEM>
	)
}

export const NavigationItem = ({linkTo, elm, ...props}) => {
	const SubElm = elm
	return (!SubElm)?(
		<Link type="no-line" to={linkTo}>
			<BEM block={block} element="item" {...props}/>
		</Link>
	):(
		<SubElm type="no-line">
			<BEM block={block} element="item" {...props}/>
		</SubElm>
	)
}

export const NavigationLogo = ({linkTo, elm, children, ...props}) => {
	const SubElm = elm
	return (!SubElm)?(
		<BEM block={block} element="logo">
			<Link type="no-line" to={linkTo}>
				{ children }
			</Link>
		</BEM>
	):(
		<BEM block={block} element="logo">
			<SubElm type="no-line" {...props}>{children}</SubElm>
		</BEM>
	)
}

export const NavigationButton = ({linkTo, elm, ...props}) => {
	return (
		<Link to={linkTo} type="no-line">
			<BEM {...props} block={block} element="button"/>
		</Link>
	)
}
export const NavigationSpacer = (props) => (<BEM block={block} element="spacer" {...props}/>)
export const NavigationSection = (props) => (<BEM block={block} element="section" {...props}/>)
export const NavigationSectionTitle = (props) => (<BEM block={block} element="section-title" {...props}/>)