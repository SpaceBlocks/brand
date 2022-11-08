/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Textarea', () => {
  test('Textarea / Validation', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-textarea-features--validation&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Textarea / w/ labels', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-textarea-features--with-form-control&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Textarea / Inactive', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-textarea-features--inactive&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Textarea / Full Width', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-textarea-features--full-width&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Textarea / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-forms-textarea--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
