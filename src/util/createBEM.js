const createBEM = (props = {}) => {
	const { block,element,modifier,className } = props

	const blockElement = (block&&element)?(`${block}__${element}`):(block)?(`${block}`):('')

	let outputClass = ''
	if(typeof className === 'string'){
		outputClass = (`${(className)?(className):('')}`).trim()
	}
	if(typeof block === 'string'){
		outputClass = (`${outputClass} ${block}`).trim()
	}
	if(typeof element === 'string'){
		outputClass = (`${outputClass}__${element}`).trim()
	}
	if(modifier){

		if(typeof modifier === "string"){

			outputClass = (`${outputClass} ${outputClass}--${modifier}`).trim()
		
		} else if (Array.isArray(modifier)){
		
			outputClass = modifier.reduce((acc, mod)=>{
				acc = `${acc} ${blockElement}--${mod}`
				return acc.trim()
			}, outputClass).trim()
		
		} else if (typeof modifier === 'object'){
		
			outputClass = Object.keys(modifier).filter((modKey)=>modifier[modKey]).reduce((acc,modKey)=>{
				acc = ` ${acc} ${blockElement}--${modKey}`
				return acc
			},outputClass).trim()
		
		}
	}
	return outputClass
}

module.exports = { createBEM }