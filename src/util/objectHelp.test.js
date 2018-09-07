const ObjectHelp = require("./objectHelp")
const immu = require('immu')
const {mutateObj} = ObjectHelp

const TestMutateObj = ()=>{
	const firstObject = {
		saying:"Heffalump",
		junk:["Numbers",1,2,3]
	}
	const secondObject = {
		saying:"New Jersey",
		junk:["Numbers",1,2,3]
	}
	const immutableFirstObject = immu(firstObject)
	test("MutateObj will return a new object with the mutation specified.",()=>{
		expect(mutateObj(immutableFirstObject,{saying:"New Jersey"})).toEqual(secondObject)
	})
}

TestMutateObj()