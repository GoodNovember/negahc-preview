import "./page.scss"
import "./HomePage.scss"

import React, { Component } from "react"

import {
	Island,
	IslandTitle,
	IslandContent
} from "../components/Island.component"

import {
	Page,
	PageMasthead,
	PageTitle,
	PageSubtitle,
	PageContent
} from "../components/Page.component"

import { Link, makePageLink } from "../components/Link.component"

const backgroundImageUrl = require("../media/happy-kid.jpg")

const ROUTE_PATH = '/'

import { PageLink as CottrelPageLink } from "./CottrellDigitalStudioPage"
import { PageLink as IvesterPageLink } from "./IvesterFoundationPage"

export const PageLink = makePageLink(ROUTE_PATH)

export class HomePage extends Component{
	static get path(){ return ROUTE_PATH }
	render(){
		return (
			<Page type="home-page">
				<PageMasthead>
					<PageTitle>Our Past, Our Future</PageTitle>
					<PageSubtitle>The Northeast Georgia Hisory Center</PageSubtitle>
				</PageMasthead>
				<PageContent>
					<Island position="left" bgSrc={ backgroundImageUrl }>
						<IslandTitle>Our Mission</IslandTitle>
						<IslandContent>
							<p>The Mission of the Northeast Georgia History Center at Brenau University is to preserve and share the history of northeast Georgia.</p>
							<p>The Northeast Georgia History Center is a not for profit institution dedicated to promoting and displaying historical artifacts and displays from the northeast Georgia area from the past 150 years.</p>
							<p>As a major part of the History Center, the <IvesterPageLink>Ada Mae Ivester Education Center</IvesterPageLink> provides on-site education programming for school groups, families, and adults through a variety of programs such as Family Days, Forums, and History Live!</p>
							<p>The <CottrelPageLink>Cottrell Digital Studio</CottrelPageLink> takes history directly into the classroom by making available free, curriculum-based programming to any and every school in Georgia.</p>
						</IslandContent>
					</Island>
				</PageContent>
			</Page>
		)
	}
}