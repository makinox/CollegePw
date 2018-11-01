import App from '../App'

describe('Test app root works', () => {
  it('Project exits', () => {
    expect(App).toBeTruthy()
  })

})

describe('Project root is not null', () => {
  it('App is not null', () => {
    expect(App).not.toBeNull()
  })
})

describe('Project is not undefined', () => {
  it('App is not undefined', () => {
    expect(App).not.toBeUndefined()
  })
})