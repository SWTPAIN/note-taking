describe('My First Test', function () {
  it('Does not do much!', function () {
    cy.visit('http://localhost:3001')
    expect(true).to.equal(true)
  })
})
