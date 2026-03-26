---
name: playwright
description: End-to-end testing with Playwright
---
<playwright-skill>
# Playwright Skill

## Core Usage
```typescript
import { test, expect } from '@playwright/test'

test('description', async ({ page }) => {
  await page.goto('url')
  await expect(page.locator('selector')).toBeVisible()
})
```

## Selectors (Priority Order)
1. Role: `getByRole('button', { name: 'Submit' })`
2. Label: `getByLabel('Email')`
3. Text: `getByText('Hello')`
4. Test ID: `getByTestId('submit-btn')`
5. CSS: `locator('css selector')`

## Best Practices
- Use auto-waiting assertions
- Prefer `toBeVisible()` over `toBeAttached()`
- Use `page.waitForLoadState('networkidle')` for SPAs
- Screenshot on failure
- Group related tests with `test.describe`

## Common Patterns
```typescript
// Fill form
await page.getByLabel('Email').fill('test@example.com')

// Click button
await page.getByRole('button', { name: 'Submit' }).click()

// Assert visibility
await expect(page.getByText('Success')).toBeVisible()

// Wait for navigation
await expect(page).toHaveURL(/dashboard/)
```

## Debugging
- `page.pause()` opens Playwright inspector
- `test.skip('debug', async ({ page }) => { ... })`
- Screenshots: `await page.screenshot()`
</playwright-skill>