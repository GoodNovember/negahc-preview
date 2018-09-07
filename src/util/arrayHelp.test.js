const ArrayHelp = require("./arrayHelp")
const immu = require('immu')
const {
	prepend,
	append,
	clone,
	addAt,
	removeAt,
	mutateAt,
	incrementAt,
	decrimentAt,
	beforeIndex,
	afterIndex
} = ArrayHelp

const TestBeforeIndex = () => {
	const firstArray = [1,2,3,4,5]
	const secondArray = [1,2]
	const immutableFirstArray = immu(firstArray)
	test("BeforeIndex returns an array representing all values before a given index.",()=>{
		expect(beforeIndex(immutableFirstArray,2)).toEqual(secondArray)
	})
}

const TestAfterIndex = () => {
	const firstArray = [1,2,3,4,5]
	const secondArray = [4,5]
	const immutableFirstArray = immu(firstArray)
	test("AfterIndex returns an array representing all values after a given index.",()=>{
		expect(afterIndex(immutableFirstArray,2)).toEqual(secondArray)
	})
}

const TestPrepend = () => {
	const firstArray = [3,2,1]
	const secondArray = [4,3,2,1]
	const immutableFirstArray = immu(firstArray)
	test('Prepend returns a new array with a value added at the beginning.',()=>{
		expect(prepend(immutableFirstArray,4)).toEqual(secondArray)
	})
}

const TestAppend = () => {
	const firstArray = [1,2,3]
	const secondArray = [1,2,3,4]
	const immutableFirstArray = immu(firstArray)
	test('Append returns a new array with a value added to the end.',()=>{
		expect(append(immutableFirstArray,4)).toEqual(secondArray)
	})
}

const TestClone = () => {
	const firstArray = [1,2,3]
	const secondArray = [...firstArray]
	const immutableFirstArray = immu(firstArray)
	test('Clone returns a shallow clone of the input array.',()=>{
		expect(clone(immutableFirstArray,4)).toEqual(secondArray)
	})
}

const TestAddAt = () => {
	const firstArray = [1,3]
	const secondArray = [1,2,3]
	const immutableFirstArray = immu(firstArray)
	test('AddAt returns a new array with a new value added at a given index.',()=>{
		expect(addAt(immutableFirstArray, 2, 1)).toEqual(secondArray)
	})

}

const TestRemoveAt = () => {
	const firstArray = [1,2,2,3,4,5]
	const secondArray = [1,2,3,4,5]
	const immutableFirstArray = immu(firstArray)
	test("RemoveAt returns a new array without the value at a given index.",()=>{
		expect(removeAt(immutableFirstArray, 2)).toEqual(secondArray)
	})
}

const TestMutateAt = () =>{
	const firstArray = [0,1,600,3]
	const secondArray = [0,1,2,3]
	const immutableFirstArray = immu(firstArray)
	test("MutateAt returns a new array with the value at a given index mutated by a mutation function.",()=>{
		expect(mutateAt(immutableFirstArray,2,(v)=>(v/300))).toEqual(secondArray)
	})
}

const TestIncrementAt = () => {
	const firstArray  = [0,1,1,3,4,5]
	const secondArray = [0,1,2,3,4,5]
	const immutableFirstArray = immu(firstArray)
	test("IncrementAt returns a new array with the value at a given index upped by one.",()=>{
		expect(incrementAt(immutableFirstArray,2)).toEqual(secondArray)
	})
}

const TestDecrimentAt = () => {
	const firstArray  = [0,1,3,3,4,5]
	const secondArray = [0,1,2,3,4,5]
	const immutableFirstArray = immu(firstArray)
	test("DecrimentAt returns a new array with the value at a given index lowered by one.",()=>{
		expect(decrimentAt(immutableFirstArray,2)).toEqual(secondArray)
	})
}

TestBeforeIndex()
TestAfterIndex()
TestPrepend()
TestAppend()
TestClone()
TestAddAt()
TestRemoveAt()
TestMutateAt()
TestIncrementAt()
TestDecrimentAt()