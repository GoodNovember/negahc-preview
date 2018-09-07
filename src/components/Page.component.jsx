import "./Page.style"
import { BEM } from "../util/BEM"
import React, { Component } from "react"

const globalBlock = 'page'

// export const Page = ({type, ...props})=>{
// 	const modifier = {}
// if(type){
// 	modifier[`type-${type}`] = true
// }else{
// 	modifier[`type-generic`] = true
// }
// 	return (<BEM {...props} block={globalBlock} modifier={modifier} />)
// }

export class Page extends Component{
	render(){
		const {props} = this
		const {type} = props
		const modifier = {}
		if(type){
			modifier[`type-${type}`] = true
		}else{
			modifier[`type-generic`] = true
		}
		return (<BEM {...props} block={globalBlock} modifier={modifier} />)	
	}
}

export const PageMasthead = (props)=>(<BEM {...props} block={globalBlock} element="masthead"/>)
export const PageContent = (props)=>(<BEM {...props} block={globalBlock} element="content"/>)
export const PageTitle = (props)=>(<BEM {...props} block={globalBlock} element="title"/>)
export const PageSubtitle = (props)=>(<BEM {...props} block={globalBlock} element="subtitle"/>)