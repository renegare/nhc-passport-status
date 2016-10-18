describe('passport status @focus', () => {
  it('should not be vetted', () => {
    const passportAppId = process.env.PASSPORT_APP_ID
    const passportAppRefId = process.env.PASSPORT_REF_ID
    browser.url('https://portal.immigration.gov.ng/passport/checkPassportStatus')
    expect(browser.getTitle().toLowerCase()).to.contain('nigeria immigration service')
    browser.setValue('#passport_app_id', passportAppId)
    browser.setValue('#passport_app_refId', passportAppRefId)
    browser.click('.btn-primary[type=submit]')
    browser.waitForVisible('form')
    const text = browser.getText('form').replace(/[\n\s]+/g, ' ')
    const match = text.match(/Current Application Status: ([^\s]+)/)
    expect(match).to.have.length(2)
    console.log(`YOUR APPLICATION STATUS IS: ${match[1]}`)
  })
})
