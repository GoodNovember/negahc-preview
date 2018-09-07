import "./page.scss"
import "./IvesterFoundationPage.scss"
import React, { Component } from "react"

import { Link, makePageLink } from "../components/Link.component"
import { Island, IslandContent } from "../components/Island.component"

import { IvesterLogoUrl } from "../components/LogoUrls"

import {
	Page,
	PageMasthead,
	PageTitle,
	PageContent,
	PageSubtitle,
} from "../components/Page.component"

const logo = <img src={ IvesterLogoUrl }/>

const BackgroundUrl = require("../media/raised-hands.jpg")

const ROUTE_PATH = '/ivester-education-center'

import { PageLink as OnSitePageLink } from "./OnSiteProgrammingPage"

export const PageLink = makePageLink(ROUTE_PATH)

export class IvesterFoundationPage extends Component{
	static get path(){ return ROUTE_PATH }
	render(){
		return (
			<Page type="ivester-education-center">
				<PageMasthead>
					<PageTitle>The Ivester Education Center</PageTitle>
					<PageSubtitle>Community. Exploration. Discovery.</PageSubtitle>
				</PageMasthead>
				<PageContent>
					<Island logo={logo} position="center" bgSrc={BackgroundUrl}>
						<IslandContent>
							<p>
								The Ada Mae Ivester Education Center 
								provides <OnSitePageLink>on-site education programming</OnSitePageLink> for school groups, families, and adults 
								through a variety of programs and events such as <Link to="/events/with-tag/family-day">Family Days</Link>, <Link to="/events/with-tag/forums">Forums</Link>, and <Link to="/events/with-tag/history-lives">History Live</Link>!
							</p>
						</IslandContent>
					</Island>
				</PageContent>
			</Page>
		)
	}
}