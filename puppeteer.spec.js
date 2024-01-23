const puppeteer = require('puppeteer')

describe('jest-image-snapshot', () => {
  let browser

  beforeAll(async () => {
    browser = await puppeteer.launch()
  })

  it('works', async () => {
    const page = await browser.newPage()
    await page.goto('https://harshalthavrani.github.io/')
    const image = await page.screenshot({ path: 'screenshot.png' })
    expect(image).toMatchImageSnapshot()
  })

  afterAll(async () => {
    await browser.close()
  })
})
