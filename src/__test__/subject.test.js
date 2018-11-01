import Subject from '../pages/subject'

describe('Subject page exist', () => {
	it('Subject page works', () => {
		expect(Subject).toBeTruthy()
	})
})

describe('Subject page is not null', () => {
	it('Subject is not null', () => {
		expect(Subject).not.toBeNull()
	})
})

describe('Subject page is not undefined', () => {
	it('Subject is not undefined', () => {
		expect(Subject).not.toBeUndefined()
	})
})