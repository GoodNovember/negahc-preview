import "./page.scss"
import "./EducationPage.scss"

import React, {Component} from "react"

import { BEM } from "../util/BEM"

import { Link, makePageLink } from "../components/Link.component"

const globalBlock = 'education-page'

const ROUTE_PATH = '/free-digital-programs'

export const PageLink = makePageLink(ROUTE_PATH)

export class DigitalProgramsPage extends Component{
	static get path(){
		return ROUTE_PATH
	}
	render(){
		return (
			<div className="page page--education">
				<div className="page__masthead">
					<div className="page__title">Digital Programs</div>
					{/* <div className="page__subtitle">Learn. Now. Do it.</div> */}
				</div>
				<div className="page__content">
					<BEM block={globalBlock}>
						<BEM block={globalBlock} element="options-list">
							Digital Program Page.
						</BEM>
					</BEM>
				</div>
			</div>
		)
	}
}