describe('Stage 1: Visits the site', () => {
  it('Visits the site', () => {
    cy.visit('/')
    cy.once('uncaught:exception', () => false);
  })
})

describe('Stage 2: Click on the Apple Music option', () => {
  it('Apple Music Click', () => {
    cy.visit('/')
    cy.once('uncaught:exception', () => false);
    cy.get('#appleCharts').click()
  })

  it('Apple Music Click and click on a particular country', () => {
    cy.visit('/')
    cy.once('uncaught:exception', () => false);
    cy.get('#appleCharts').click()
  })

  it('Apple Music Click and click on a Comparison Charts', () => {
    cy.visit('/')
    cy.once('uncaught:exception', () => false);
    cy.get('#appleCharts').click()
    cy.get('#compareSongsApple').click()  
  })
})

describe('Stage 3: See if Spotify Works', () => {
  it('Spotify Click', () => {
    cy.visit('/')
    cy.once('uncaught:exception', () => false);
    cy.get('#spotifyCharts').click()
  })

  it('Should be able to click on the login page', () => {
    cy.visit('/')
    cy.get('#spotifyCharts').click()
    cy.visit("https://accounts.spotify.com/authorize?client_id=55cf7d7ace8e434c9fbac98db55c75b3&redirect_uri=http://localhost:4200/worldmap&scope=user-read-currently-playing%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true");
  })
})