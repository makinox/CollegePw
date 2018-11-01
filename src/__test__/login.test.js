import Login from '../pages/login'

describe('Login page exist', () => {
	it('Login page works', () => {
		expect(Login).toBeTruthy()
	})
})

describe('Login page is not null', () => {
	it('Login is not null', () => {
		expect(Login).not.toBeNull()
	})
})

describe('Login page is not undefined', () => {
	it('Login is not undefined', () => {
		expect(Login).not.toBeUndefined()
	})
})