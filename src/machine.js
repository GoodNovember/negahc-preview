import React from "react"
import { render } from "react-dom"
import { App } from "./components/App.jsx"
import { BEM } from "./util/bem"

const ROOT = document.getElementById('root')

const App2 = ()=>{


	const block = 'spaceship'

	return (
		<div>
		<BEM block={block}>
				<BEM block={block} element="button" modifier={["style-weird","mode-sleeping"]}>Array!</BEM>
			<BEM block={block} element="title">Bonk Title</BEM>
			<BEM block={block} element="content">
				Bonk Content
				<BEM block={block} element="button" modifier={{"style-accept":true,"mode-disabled":true}}>ACCEPT</BEM>
				<BEM block={block} element="button" modifier="style-warning">BUTTON WARNING</BEM>
			</BEM>
		</BEM>
		</div>
	)
	
}

// render(<App2/>,ROOT)
render(<App/>,ROOT)