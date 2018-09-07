import React, {Component} from "react"

import { Link } from "./Link.jsx"
import { historyInstance } from "./AppHistory.js"
import { store } from "./AppStore.js"

export class LocalLink extends Component{
	constructor(props){
		super(props)
		this.goToLink = this.goToLink.bind(this)
	}
	componentDidMount(){
		this.unsubscribe = store.subscribe(()=>{
			this.forceUpdate()
		})
	}
	componentWillUnmount(){
		this.unsubscribe()
	}
	goToLink(){
		const { history } = store.getState()
		const { path, state, search } = this.props
		if(path !== history.location.pathname){
			historyInstance.push({
				pathname:path,
				state,
				search,
			})
		}
	}
	render(){

		const {
			children,
			path,
		} = this.props

		const { history } = store.getState()

		const isCurrent = path === history.location.pathname

		return (
			<Link
				isActive={isCurrent}
				className="local-link"
				onClick={this.goToLink}>
				{children}
			</Link>
		)
	}
}