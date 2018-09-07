import "./page.scss"
import "./FourOhFourPage.style"
import React from "react"

import {
	Page,
	PageMasthead,
	PageTitle,
	PageSubtitle,
	PageContent
} from "../components/Page.component"

import { ButtonLink } from "../components/ButtonLink.component"

export const FourOhFourPage = () => (
	<Page type="four-oh-four">
		<PageMasthead>
			<PageTitle>404</PageTitle>
			<PageSubtitle>Page Not Found</PageSubtitle>
		</PageMasthead>
		<PageContent>
			<h3>Well, I'm not sure where you were headed partner, <br/> but you probably didn't mean to come here.</h3>
			<ButtonLink className="page__button" linkTo='/'>Let's just go home</ButtonLink>
		</PageContent>
	</Page>
)