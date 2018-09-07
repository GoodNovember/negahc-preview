import "./ControlableImage.style"
import React from "react"
import { BEM } from "../util/BEM"
import { Background } from "./Background.component"

const block = 'controllable-image'

export const ControllableImage = ({src, className,...props}) => {
	
	const style = {
		backgroundImage: (typeof src === 'string')?(`url("${src}")`):(null),
	}
	
	return (
		<BEM block={block} className={className}>
			<BEM block={block} style={style} element="background" {...props} />
		</BEM>
	)
}