import "./App.scss";
import React, {Component} from "react"
import { Provider } from "react-redux"

import { store } from "../store"

import { 
	Navigation,
	NavigationItem,
	NavigationSpacer,
	NavigationSection,
	NavigationLogo,
	NavigationButton,
	NavigationSectionTitle,
} from "./Navigation"

import { MainContent } from "./MainContent"
import { Footer } from "./Footer"

import { PageRouter } from "../router/"

import { BEM } from "../util/BEM"

import { PageLink as EducationPageLink } from "../pages/EducationPage"
import { PageLink as IvesterPageLink } from "../pages/IvesterFoundationPage"
import { PageLink as CottrellPageLink } from "../pages/CottrellDigitalStudioPage"

const GLOBAL_BLOCK = "app-root"

export class App extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.unsubscribe = store.subscribe(()=>{
			this.forceUpdate()
		})
	}
	componentDidCatch(error, info){
		console.error('---')
		console.error(`ERROR:`, error)
		console.error(info)
		console.error('---')
	}
	componentWillUnmount(){
		this.unsubscribe()
	}
	render(){

		const state = store.getState()
		const { pathname } = state.history

		return (
			<Provider store={ store }>
				<BEM block={GLOBAL_BLOCK}>
					<Navigation type="top">
						<NavigationLogo linkTo="/">
							The Northeast Georgia <br/> History Center
						</NavigationLogo>
						<NavigationSection>
							<NavigationSpacer/>
							<NavigationItem linkTo="/visit">Visit</NavigationItem>
							<NavigationItem elm={EducationPageLink}>Education</NavigationItem>
							<NavigationItem linkTo="/about-us">About Us</NavigationItem>
							<NavigationButton linkTo="/donate">Donate Today!</NavigationButton>
						</NavigationSection>
					</Navigation>
					<BEM block={GLOBAL_BLOCK} element="scroll-box">
						<MainContent>
							<PageRouter pathname={pathname}/>
						</MainContent>
						<Navigation type="bottom">
							<NavigationSection>
								<NavigationSectionTitle>The Museum</NavigationSectionTitle>
								<NavigationItem linkTo="/visit">Visiting The Museum</NavigationItem>
								<NavigationItem linkTo="/events">Upcoming Events</NavigationItem>
								<NavigationItem linkTo="/discover">Exhibits & Program</NavigationItem>
								<NavigationItem linkTo="/shop">Museum Shop</NavigationItem>
							</NavigationSection>
							<NavigationSection>
								<NavigationSectionTitle>Education</NavigationSectionTitle>
								<NavigationItem elm={EducationPageLink}>Educational Programs</NavigationItem>
								<NavigationItem elm={IvesterPageLink}>The Ivester Education Center</NavigationItem>
								<NavigationItem elm={CottrellPageLink}>The Cottrell Digital Studio</NavigationItem>
							</NavigationSection>
							<NavigationSection>
								<NavigationSectionTitle>Giving</NavigationSectionTitle>
								<NavigationItem linkTo="/membership">Become a Member</NavigationItem>
								<NavigationItem linkTo="/donate">Make a Donation</NavigationItem>
								<NavigationItem linkTo="/volunteering">Voulenteering</NavigationItem>
							</NavigationSection>
							<NavigationSection>
								<NavigationSectionTitle>About Us</NavigationSectionTitle>
								<NavigationItem linkTo="/mission">Our Mission</NavigationItem>
								<NavigationItem linkTo="/our-team">Our Team</NavigationItem>
								<NavigationItem linkTo="/board-of-directors">Board of Directors</NavigationItem>
							</NavigationSection>
						</Navigation>
						<Footer>
							<div>Northeast Georgia History Center at Brenau University</div>
						</Footer>
					</BEM>
				</BEM>
			</Provider>
		)
	}
}