import Uconfig from '../pages/uconfig'

describe('Uconfig page exist', () => {
	it('Uconfig page works', () => {
		expect(Uconfig).toBeTruthy()
	})
})

describe('Uconfig page is not null', () => {
	it('Uconfig is not null', () => {
		expect(Uconfig).not.toBeNull()
	})
})

describe('Uconfig page is not undefined', () => {
	it('Uconfig is not undefined', () => {
		expect(Uconfig).not.toBeUndefined()
	})
})