import React from "react"
import { mutateObj } from "../util/objectHelp"

import { store } from "../store"

import { FourOhFourPage } from "../pages"

const ACTIONS = {
    REGISTER:"[router] register",
}

export const registerPages = (pages) => {
    if(typeof pages === "object" && pages){
        const pageArray = Object.keys(pages).map((key)=>(pages[key])) || []
        pageArray.map(page=>{
            if(typeof page.path === "function"){
                const path = page.path()
                const component = page
                if(path && component){
                    registerPage(path, component)
                }
            }else if(typeof page.path === "string"){
                const {path} = page
                const component = page
                if(path && component){
                    registerPage(path, component)
                }
            }
        })
    }
}

export const routerReducer = (state={}, action) => {
    const {type, payload} = action
    switch(type){
        case ACTIONS.REGISTER:{
            const {path, component} = payload
            const additionObj = {}
            additionObj[path] = component
            console.count("Registration")
            console.log("REGISTER:", path, component)
            return mutateObj(state,additionObj)
        }
        default:{
            return state
        }
    }
}

const getPage = (pathname) => {
    const { router } = store.getState()
    let Output = FourOhFourPage
    if(typeof router[pathname] === "function"){
        Output = router[pathname]
    }
    return <Output/>
}

export const PageRouter = ({pathname}) => {
    return getPage(pathname)
}

const registerPage = (path, component) => {
    store.dispatch({type:ACTIONS.REGISTER, payload:{path,component}})
    console.log("Registration!")
}