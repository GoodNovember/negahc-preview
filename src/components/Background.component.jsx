import "./Background.style.scss"
import React, {Component} from "react"

import { BEM } from "../util/BEM"

export class Background extends Component{
	render(){
		
		const { props } = this
		const {
			className,
			children,
			src,
			bgColor,
			fgColor,
			style,
		} = props

		const hasImageSrc = (typeof src === "string") && (src.length > 0)

		const styleOutput = {
			backgroundColor:bgColor,
			color:fgColor,
			...style,
		}

		if(hasImageSrc){ 
			styleOutput.backgroundImage = `url("${src}")`
		}

		return <BEM className={className} style={styleOutput} block={'background'} modifier={{['has-image']:(hasImageSrc)}}>{children}</BEM>

	}
}