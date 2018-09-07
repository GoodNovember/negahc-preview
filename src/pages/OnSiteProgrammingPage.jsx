import "./page.scss"
import "./OnSiteProgrammingPage.scss"

import React, {Component} from "react"

import { BEM } from "../util/BEM"

import { Link, makePageLink } from "../components/Link.component"

import {
	Page,
	PageMasthead,
	PageContent,
	PageTitle,
	PageSubtitle,
} from "../components/Page.component"

const ROUTE_PATH = '/on-site-programs'

const globalBlock = 'on-site-programming-page'

export const PageLink = makePageLink(ROUTE_PATH)

export class OnSiteProgrammingPage extends Component{
	static get path(){ return ROUTE_PATH }
	render(){
		return (
			<Page type="on-site-education">
				<PageMasthead>
					<PageTitle>On-Site Programs</PageTitle>
					<PageSubtitle>Learning while at the museum.</PageSubtitle>
				</PageMasthead>
				<PageContent>						
					<BEM block={globalBlock}>
						<BEM block={globalBlock} element="width-limiter">
							<BEM block={globalBlock} element="introduction">
								<p>
									The Northeast Georgia History Center’s History Alive! educational track provides 
									students and teachers with pre- and post- visit resources and lesson plans in 
									conjunction with the hands on activities and history interpreters of their 
									History Center visit.
								</p>
							
								<p>
									This program track also meets a variety of Georgia Standards of Excellence (GSEs); as listed below.
								</p>
							</BEM>
							<BEM block={globalBlock} element="introduction">
								<p>For all Options prices are per person, 20 person minimum, must book in advance. Student tours require a 1:10 ratio of chaperones to students. Chaperones pay tour admission and must remain with the tour group. Teachers and Bus Drivers admitted free.</p>
							</BEM>
							<BEM block={globalBlock} element="section">
								<BEM block={globalBlock} element="section-title">
									GSE (Georgia Standards of Excellence) met in our programs
								</BEM>
								<BEM block={globalBlock} element="section-content">
									<BEM block={globalBlock} element="section-grade">
										<BEM block={globalBlock} element="section-gse-grade">1st Grade</BEM>
										<BEM block={globalBlock} element="section-gse-list">
											SS1H1, SS1G1
										</BEM> 
									</BEM>
									<BEM block={globalBlock} element="section-grade">
										<BEM block={globalBlock} element="section-gse-grade">2nd Grade</BEM>
										<BEM block={globalBlock} element="section-gse-list">
											SS2H1, SS2H2, SS2G2
										</BEM> 
									</BEM>
									<BEM block={globalBlock} element="section-grade">
										<BEM block={globalBlock} element="section-gse-grade">3rd Grade</BEM>
										<BEM block={globalBlock} element="section-gse-list">
											SS3H1, SS3H2, SS3H3, SS3G
										</BEM> 
									</BEM>
									<BEM block={globalBlock} element="section-grade">
										<BEM block={globalBlock} element="section-gse-grade">4th Grade</BEM>
										<BEM block={globalBlock} element="section-gse-list">
											SS4H1, SS4H2, SS4H3, SS4H4, SS4H5, SS4H6, SS4CG3 
										</BEM> 
									</BEM>
									<BEM block={globalBlock} element="section-grade">
										<BEM block={globalBlock} element="section-gse-grade">5th Grade</BEM>
										<BEM block={globalBlock} element="section-gse-list">
											SS5H4
										</BEM> 
									</BEM>
									<BEM block={globalBlock} element="section-grade">
										<BEM block={globalBlock} element="section-gse-grade">8th Grade</BEM>
										<BEM block={globalBlock} element="section-gse-list">
											SS8H1, SS8H2, SS8H3, SS8H4, SS8H5, SS8H9
										</BEM> 
									</BEM>
								</BEM>
							</BEM>
							<BEM block={globalBlock} element="section">
								<BEM block={globalBlock} element="section-title">Available Programs</BEM>
								<BEM block={globalBlock} element="options-list">
									<BEM block={globalBlock} element="option">
										<BEM block={globalBlock} element="option-title">
											Self Guided Tour
										</BEM>
										<BEM block={globalBlock} element="option-grades">
											All Grades
										</BEM>
										<BEM block={globalBlock} element="option-price">
											$5 per person
										</BEM>
										<BEM block={globalBlock} element="option-description">
											Teachers may choose this option to take their students through 
											focusing on their own particular class goals at their own pace. 
											Includes access to indoor galleries and our outdoor historic structures, 
											the 1780 White Path cabin and the 19th century Blacksmith shop.
										</BEM>
									</BEM>
									<BEM block={globalBlock} element="option">
										<BEM block={globalBlock} element="option-title">
											18th & 19th Century Daily Life Demonstration + Self-Guided Tour
										</BEM>
										<BEM block={globalBlock} element="option-grades">
											All Grades
										</BEM>
										<BEM block={globalBlock} element="option-price">
											$6 per person
										</BEM>
										<BEM block={globalBlock} element="option-description">
											Live demonstration of 18th or 19th century daily life, 
											such as blacksmithing, corn grinding, laundry, soap making, 
											land surveying, toys and games using period appropriate methods; 
											applicable to 18th/19th century Native American and 
											European American Daily Life, from the Revolutionary War to the Civil War. 
											The demonstration is followed by a Self-Guided Tour, with tour brochures 
											provided to teachers.
										</BEM>
									</BEM>
									<BEM block={globalBlock} element="option">
										<BEM block={globalBlock} element="option-title">
											Specialty Program and Self-guided Tour
										</BEM>
										<BEM block={globalBlock} element="option-grades">
											4th, 5th and 8th Grades
										</BEM>
										<BEM block={globalBlock} element="option-price">
											$6 per person
										</BEM>
										<BEM block={globalBlock} element="option-extra">
											+ 1$ per person for Guided Tour of WWI Exhibit
										</BEM>
										<BEM block={globalBlock} element="option-description">
											The History Center Staff conducts a program that can focus on the following:

											Exploration and Settlement

												Contact: Mississippian Culture and the De Soto Expedition of 1540 (9th - 16th centuries)
												Deer Skin Trade: Cherokee and Creek interaction with European American settlers in the British colony of Georgia (18th century)
												The Flower Hunter: Exploration and travels of American Naturalist William Bartram (1773-1777) in Georgia and the Southeast

											Conflict

												First Contact to Removal: Conflicts of Native American peoples with Europeans/Americans, such as the De Soto Expedition (1540), The Cherokee–American wars (1776 to 1795), the Creek War (1813-1815), Indian Removal Act (1830), Treaty of New Echota (1836), Trail of Tears (1836-1838)
												Conflicts of Europeans/Americans among themselves and other nations, such as the American War for Independence (1775-1783), War of 1812 (1812-1814), American Civil War (1861-1865), World War I (1914-1918) and World War II (1939-1945)

											Following the designated program the group then does a self-guided tour (self-guided tour brochures provided) of our galleries and historic structures.

											Our Land of Promise gallery, White Path Cabin, and Blacksmith Shop take you through the history of North Georgia from the original Paleo-Indian inhabitants of 13,000 years ago, through the Mississippian Culture, to Cherokee and Creek society, to European and European American exploration and settlement - including African Americans both free and enslaved - showcasing daily life, as well as cultures and nations in conflict, from the 16th century to the 20th century.
										</BEM>
									</BEM>
									<BEM block={globalBlock} element="option">
										<BEM block={globalBlock} element="option-title">
											Museum Theatre Performance
										</BEM>
										<BEM block={globalBlock} element="option-grades">
											All Grades
										</BEM>
										<BEM block={globalBlock} element="option-price">
											$8 per person
										</BEM>
										<BEM block={globalBlock} element="option-description">
											Meet actual people from United States and Georgia 18th, and 19th century history. This program is comprised of a 1st person performance with in-character question and answer, followed by a self-guided tour of the museum galleries and historic structures.

											Some of the characters available are:

												18th Century - George Washington, Patrick Henry, Benedict Arnold, Georgia Loyalist Thomas Brown, Georgia Loyalist Elizabeth Johnston, Georgia Patriot Lachlan McIntosh, Former Slave British Freedom
												19th Century – Abraham Lincoln, Former Slave/Nurse/Teacher Susie King Taylor of Georgia.

											Other character performances may be developed upon request. One character per performance is standard, an additional character or characters can be added at additional cost.
										</BEM>
									</BEM>
								</BEM>
							</BEM>
						</BEM>
					</BEM>
				</PageContent>
			</Page>
		)
	}
}