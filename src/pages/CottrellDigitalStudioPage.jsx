import "./EducationPage.scss"

import React, { Component } from "react"

import { BEM } from "../util/BEM"
import { Link, makePageLink } from "../components/Link.component"
import { Island, IslandTitle, IslandContent } from "../components/Island.component"
import { CottrellLogoUrl } from "../components/LogoUrls"

import {
	Page,
	PageMasthead,
	PageContent,
	PageTitle,
	PageSubtitle,
} from "../components/Page.component"

import { PageLink as FreeDigitalPrograms } from "../pages/DigitalProgramsPage"

const LOGO = <img src= { CottrellLogoUrl } />
const BACKGROUND_URL = require('../media/webcast.jpg')
export const ROUTE_PATH = '/cottrell-digital-studio'

export const PageLink = makePageLink(ROUTE_PATH)

export class CottrellDigitalStudioPage extends Component{
	static get path () {
		return ROUTE_PATH
	}
	render(){
		return (
			<Page type="education">
				<PageMasthead>
					<PageTitle>Cottrel Digital Studio</PageTitle>
					<PageSubtitle>Learning Online</PageSubtitle>
				</PageMasthead>
				<PageContent>
					<Island logo={LOGO} position="center" bgSrc={BACKGROUND_URL}>
						<IslandContent>
							<p>
								The <strong>Cottrell Digital Studio</strong> takes history directly into 
								the classroom by making available 
								&nbsp;<FreeDigitalPrograms>free, curriculum-based
								programming</FreeDigitalPrograms> to any and every school in Georgia.
							</p>
						</IslandContent>
					</Island>
				</PageContent>
			</Page>
		)
	}
}