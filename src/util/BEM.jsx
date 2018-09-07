import React from "react"

import { createBEM } from "./createBEM"

export const BEM = ({block,element,modifier,className,...props}) => <div className={createBEM({block,element,modifier,className})} {...props}/>