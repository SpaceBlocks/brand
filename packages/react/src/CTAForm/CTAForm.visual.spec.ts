/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: CTAForm', () => {
  test('CTAForm / With No Confirm', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-ctaform-features--with-no-confirm&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('CTAForm / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-ctaform--playground&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('CTAForm / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-ctaform--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})