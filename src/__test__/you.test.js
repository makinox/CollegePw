import You from '../pages/you'

describe('You page exist', () => {
	it('You page works', () => {
		expect(You).toBeTruthy()
	})
})

describe('You page is not null', () => {
	it('You is not null', () => {
		expect(You).not.toBeNull()
	})
})

describe('You page is not undefined', () => {
	it('You is not undefined', () => {
		expect(You).not.toBeUndefined()
	})
})