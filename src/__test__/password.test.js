import Password from '../pages/password'

describe('Password page exist', () => {
	it('Password page works', () => {
		expect(Password).toBeTruthy()
	})
})

describe('Password page is not null', () => {
	it('Password is not null', () => {
		expect(Password).not.toBeNull()
	})
})

describe('Password page is not undefined', () => {
	it('Password is not undefined', () => {
		expect(Password).not.toBeUndefined()
	})
})