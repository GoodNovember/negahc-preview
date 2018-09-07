const { createBEM } = require("./createBEM")

// block__element--modifier

test('creates correct Blocks',()=>{

	const dummyBlock = 'pirate-ship'
	const singleMod = 'haunted-yes'
	const arrayMod = ['state-disrepair', 'color-transparent']
	const objMod = {
		'state-active':false,
		'state-enabled':true,
		'state-cursed':true
	}
	expect(createBEM()).toEqual('')
	expect(createBEM({block:dummyBlock})).toEqual(dummyBlock)
	expect(createBEM({block:` ${dummyBlock}  `})).toEqual(dummyBlock)
	expect(createBEM({block:dummyBlock, modifier:singleMod})).toEqual(`${dummyBlock} ${dummyBlock}--${singleMod}`)
	expect(createBEM({block:dummyBlock, className:'independence'})).toEqual('independence pirate-ship')
	expect(createBEM({block:dummyBlock, modifier:arrayMod})).toEqual(`${dummyBlock} ${dummyBlock}--${arrayMod[0]} ${dummyBlock}--${arrayMod[1]}`)
})