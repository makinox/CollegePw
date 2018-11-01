import Home from '../pages/home'

describe('Home page exist', () => {
	it('Home page works', () => {
		expect(Home).toBeTruthy()
	})
})

describe('Home page is not null', () => {
	it('Home is not null', () => {
		expect(Home).not.toBeNull()
	})
})

describe('Home page is not undefined', () => {
	it('Home is not undefined', () => {
		expect(Home).not.toBeUndefined()
	})
})