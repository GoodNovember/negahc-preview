const append = (arr, newItem) => [...arr,newItem]
const prepend = (arr, newItem) => [newItem,...arr]
const clone = (arr) => [...arr]

const beforeIndex = (arr,index) => arr.slice(0,index)
const afterIndex  = (arr,index) => arr.slice(index+1)

const removeAt = (arr, index) => [...(beforeIndex(arr,index)),...(afterIndex(arr,index))]
const addAt = (arr,newItem,index) => [...(beforeIndex(arr,index)),newItem,...afterIndex(arr,index-1) ]

const mutateAt = (arr, index, mutator) => [
	...beforeIndex(arr, index),
	(typeof mutator==='function'?(mutator(arr[index],index,arr)):arr[index]),
	...afterIndex(arr, index)
]

const incrementAt=(arr,index)=>mutateAt(arr,index,(value)=>value+1)
const decrimentAt=(arr,index)=>mutateAt(arr,index,(value)=>value-1)

module.exports = {
	prepend,
	append,
	clone,
	addAt,
	removeAt,
	mutateAt,
	incrementAt,
	beforeIndex,
	afterIndex,
	decrimentAt
}