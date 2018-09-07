import "./Island.style"

import React from "react"

import { BEM } from "../util/BEM"
import { Background } from "./Background.component"

const blockName = "island"

export const Island = ({children, logo, position, bgSrc}) => (
<BEM block={ blockName } modifier={{[`position-${position}`]:(position)}}>
	<Background className="island__background" src={bgSrc}>
		{(logo)?(<IslandLogo>{logo}</IslandLogo>):(null)}
		<BEM block={ blockName } element="caption" modifier={{[`position-${position}`]:(position)}}>{ children }</BEM>
	</Background>
</BEM>
)

export const IslandLogo = (props)=>(<BEM block={ blockName } element="logo" {...props}/>)
export const IslandTitle = (props)=>(<BEM block={ blockName } element="title" {...props}/>)
export const IslandContent = (props)=>(<BEM block={ blockName } element="content" {...props}/>)