
import React from "react"

import * as PageIndex from "../pages"

import {store} from "../store"

const FallbackPage = PageIndex.FourOhFourPage

// import { 
// 	FourOhFourPage,
// 	HomePage, 
// 	EducationPage, 
// 	IvesterFoundationPage, 
// 	TravelTrunksPage,
// 	OnSiteProgrammingPage,
// 	DigitalProgramsPage,
// 	CottrelDigitalStudioPage,
// } from "../pages/"

// const getPage = (pathname)=>{
// 	switch(pathname){
// 		case '/':{
// 			return <HomePage/>
// 		}
// 		case '/ivester-education-center':{
// 			return <IvesterFoundationPage/>
// 		}
// 		case '/cottrel-digital-studio':{
// 			return <CottrelDigitalStudioPage/>
// 		}
// 		case '/education':{
// 			return <EducationPage/>
// 		}
// 		case '/education/on-site-programs':{
// 			return <OnSiteProgrammingPage/>
// 		}
// 		case '/education/travel-trunks':{
// 			return <TravelTrunksPage/>
// 		}
// 		case '/education/digital-programs':{
// 			return <DigitalProgramsPage/>
// 		}
// 		default:{
// 			return <FourOhFourPage/>
// 		}
// 	}
// }

const getPage = (pathname) => {
	if(PageRegistrationMap.has(pathname)){
		const Page = PageRegistrationMap.get(pathname)
		console.log("Found Page!")
		return <Page/>
	}else{
		console.log("Page not found:", pathname, PageRegistrationMap)
		return <FallbackPage/>
	}
}

export const PageRouter = ({pathname})=>{
	return getPage(pathname)
}

export const registerPage = (path, component) => {
	console.log("REGISTER:",path,component);
}