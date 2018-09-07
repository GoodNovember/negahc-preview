import "./page.scss"
import "./EducationPage.scss"

import React, { Component } from "react"

import { BEM } from "../util/BEM"
import { createBEM } from "../util/createBEM"

import { Link, makePageLink } from "../components/Link.component"
import { ButtonLink } from "../components/ButtonLink.component"

import {
	Page,
	PageContent,
	PageMasthead,
	PageTitle,
	PageSubtitle
} from "../components/Page.component"

import{ PageLink as CottrellPageLink } from "./CottrellDigitalStudioPage"
import{ PageLink as IvesterPageLink } from "./IvesterFoundationPage"
import{ PageLink as DigitalProgramPageLink } from "./DigitalProgramsPage"
import{ PageLink as OnSiteProgramPageLink } from "./OnSiteProgrammingPage"
import{ PageLink as TravelTrunkPageLink } from "./TravelTrunksPage"

const globalBlock = 'education-page'

const { IvesterLogoUrl, CottrellLogoUrl } = require("../components/LogoUrls")

const IvesterLogo = <img className={createBEM({block:globalBlock, element:'image'})} src={IvesterLogoUrl}/>
const CottrellLogo = <img className={createBEM({block:globalBlock, element:'image'})} src={CottrellLogoUrl}/>

const PAGE_ROUTE = '/education'

export const PageLink = makePageLink(PAGE_ROUTE)

export class EducationPage extends Component{
	static get path(){ return PAGE_ROUTE }
	render(){
		return (
			<Page type="education">
				<PageMasthead>
					<PageTitle>Educational Programs</PageTitle>
				</PageMasthead>
				<PageContent>
					<BEM block={globalBlock}>
						<BEM block={globalBlock} element="options-list">
							<BEM block={globalBlock} element="option">
								<BEM block={globalBlock} element="logo" modifier={['logo-ivester','placement-left']}>
									Ivester Education Center
								</BEM>
								<BEM block={globalBlock} element={'content'}>
									<ButtonLink elm={OnSiteProgramPageLink}>On-Site Programs</ButtonLink>
									<ButtonLink elm={TravelTrunkPageLink}>Travel Trunks</ButtonLink>
								</BEM>
								<BEM block={globalBlock} element="learn-more">
									Learn More About <IvesterPageLink>The Ivester Education Center</IvesterPageLink>
								</BEM>
							</BEM>
							<BEM block={globalBlock} element="option">
								<BEM block={globalBlock} element="logo" modifier={['logo-cottrel','placement-right']}>
									Cottrell Digital Studio
								</BEM>
								<BEM block={globalBlock} element={'content'}>
									<ButtonLink elm={DigitalProgramPageLink}>Free Digital Programs</ButtonLink>
								</BEM>
								<BEM block={globalBlock} element="learn-more">
									Learn More About <CottrellPageLink>The Cottrel Digital Studio</CottrellPageLink>
								</BEM>
							</BEM>
						</BEM>
					</BEM>
				</PageContent>
			</Page>
		)
	}
}
