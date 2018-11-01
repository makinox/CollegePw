import User from '../pages/user'

describe('User page exist', () => {
	it('User page works', () => {
		expect(User).toBeTruthy()
	})
})

describe('User page is not null', () => {
	it('User is not null', () => {
		expect(User).not.toBeNull()
	})
})

describe('User page is not undefined', () => {
	it('User is not undefined', () => {
		expect(User).not.toBeUndefined()
	})
})