import "./page.scss"
import "./EducationPage.scss"

import React, { Component } from "react"

import { BEM } from "../util/BEM"

import { Link, makePageLink } from "../components/Link.component"

const globalBlock = 'travel-trunks-page'

const ROUTE_PATH = "/education/travel-trunks"

import {
	Page,
	PageMasthead,
	PageTitle,
	PageSubtitle,
	PageContent
} from "../components/Page.component"

export const PageLink = makePageLink(ROUTE_PATH)

export class TravelTrunksPage extends Component{
	static get path(){ return ROUTE_PATH }
	render(){
		return (
			<Page>
				<PageMasthead>
					<PageTitle>Travel Trunks</PageTitle>
					<PageSubtitle>Hands-on artifacts in the Classrom</PageSubtitle>
				</PageMasthead>
				<PageContent>

				</PageContent>
			</Page>
		)
	}
}