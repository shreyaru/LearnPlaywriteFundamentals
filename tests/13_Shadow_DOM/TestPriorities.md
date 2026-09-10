# Test Priorities, Grouping & Selective Running in Playwright

A simple guide with examples based on your Shadow DOM tests.

---

## 1. Run Only a Specific Test — `test.only()`

Want to focus on just **one** test? Add `.only` and Playwright will skip everything else in that file.

```typescript
// ✅ Only THIS test will run
test.only('locate Shadow DOM and assert visible', async ({ page }) => {
    const card = page.getByTestId('card-account');
    await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
    // ...
});

// ❌ Skipped
test('locate Shadow DOM and increment the value', async ({ page }) => {
    // ...
});

// ❌ Skipped
test('locate Shadow DOM and test the nested values', async ({ page }) => {
    // ...
});
```

> [!TIP]
> You can put `.only` on **multiple** tests — all of them will run, and the rest will be skipped.

---

## 2. Skip a Specific Test — `test.skip()`

Want to temporarily **disable** a test without deleting it?

```typescript
test('locate Shadow DOM and assert visible', async ({ page }) => {
    // ✅ Runs normally
});

// ❌ This one is skipped
test.skip('locate Shadow DOM and increment the value', async ({ page }) => {
    // ...
});

test('locate Shadow DOM and test the nested values', async ({ page }) => {
    // ✅ Runs normally
});
```

You can also skip **conditionally**:

```typescript
test('mobile only test', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This test is only for mobile');
    // ... test code
});
```

---

## 3. Run Tests in a Fixed Order — `test.describe.serial`

By default, Playwright runs tests **independently** (and in parallel). If you need tests to run **one after another in order**, and **stop if one fails**:

```typescript
test.describe.serial('Shadow DOM - sequential flow', () => {

    test('Step 1: Fill the login form', async ({ page }) => {
        // Runs first
    });

    test('Step 2: Increment the counter', async ({ page }) => {
        // Runs second (only if Step 1 passed)
    });

    test('Step 3: Test nested shadow DOM', async ({ page }) => {
        // Runs third (only if Step 2 passed)
    });

});
```

> [!IMPORTANT]
> If **Step 1** fails, **Step 2 and Step 3 are automatically skipped**. This is useful when tests depend on each other.

---

## 4. Group Tests with `test.describe()`

Use `describe` blocks to **organize** related tests. You can also **nest** them.

```typescript
test.describe('Shadow DOM - Login Tests', () => {

    test('fill email and password', async ({ page }) => { /* ... */ });
    test('submit the form', async ({ page }) => { /* ... */ });

});

test.describe('Shadow DOM - Counter Tests', () => {

    test('increment value', async ({ page }) => { /* ... */ });
    test('decrement value', async ({ page }) => { /* ... */ });

});
```

---

## 5. Tag Tests for Selective Running — `@tag`

Add **tags** to test titles to categorize them by priority or type:

```typescript
test('locate Shadow DOM @smoke @P0', async ({ page }) => {
    // High priority smoke test
});

test('increment the counter @regression @P1', async ({ page }) => {
    // Medium priority regression test
});

test('test nested shadow DOM @P2', async ({ page }) => {
    // Low priority test
});
```

### Run only tests with a specific tag:

```bash
# Run only smoke tests
npx playwright test --grep "@smoke"

# Run only P0 (highest priority) tests
npx playwright test --grep "@P0"

# Run P0 and P1 tests together
npx playwright test --grep "@P0|@P1"

# Run everything EXCEPT P2
npx playwright test --grep-invert "@P2"
```

> [!TIP]
> This is the **best way to prioritize** tests. Tag them as `@P0`, `@P1`, `@P2` and run by priority in CI/CD.

---

## 6. Run a Specific Test File

```bash
# Run only the Shadow DOM tests
npx playwright test tests/13_Shadow_DOM/246_Shadow_DOM.spec.ts
```

---

## 7. Run Tests by Title (grep from CLI)

```bash
# Run any test whose title contains "increment"
npx playwright test --grep "increment"

# Run any test whose title contains "Shadow DOM"
npx playwright test --grep "Shadow DOM"
```

---

## 8. Run Tests in a Specific Order Across Files — `playwright.config.ts`

In your config, you can control **which files run first**:

```typescript
// playwright.config.ts
export default defineConfig({
    projects: [
        {
            name: 'smoke',
            testMatch: /.*smoke.*\.spec\.ts/,  // Run smoke tests first
        },
        {
            name: 'regression',
            testMatch: /.*regression.*\.spec\.ts/,
            dependencies: ['smoke'],  // Only runs after 'smoke' passes
        },
    ],
});
```

---

## Quick Reference Table

| What you want | How to do it |
|---|---|
| Run **only one** test | `test.only('...')` |
| **Skip** a test | `test.skip('...')` |
| Run tests **in sequence** | `test.describe.serial` |
| **Group** related tests | `test.describe('...')` |
| **Tag by priority** | Add `@P0`, `@P1` to test title |
| Run tests **by tag** | `npx playwright test --grep "@P0"` |
| Run a **specific file** | `npx playwright test path/to/file.spec.ts` |
| Run by **test name** | `npx playwright test --grep "test name"` |
| **Exclude** certain tests | `npx playwright test --grep-invert "@P2"` |
| **Order across files** | Use `projects` + `dependencies` in config |

---

## Applying This to Your Shadow DOM Tests

Here's how your file would look with priorities applied:

```typescript
import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom';

test.describe('Shadow handling DOM page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate Shadow DOM and assert visible @smoke @P0', async ({ page }) => {
        const card = page.getByTestId('card-account');
        await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
        await card.locator('input[name="password"]').fill('pw');
        await card.getByTestId('card-account-submit').click();
        await expect(page.getByTestId('card-account-status'))
            .toContainText('student@thetestingacademy.com');
    });

    test('locate Shadow DOM and increment the value @regression @P1', async ({ page }) => {
        const cart = page.getByTestId('counter-cart');
        await cart.getByRole('button', { name: 'Increment' }).click();
        await cart.getByRole('button', { name: 'Increment' }).click();
        await expect(cart.getByTestId('counter-value')).toHaveText('5');
    });

    test('locate Shadow DOM and test nested values @P2', async ({ page }) => {
        await page.getByTestId('nested-host');
        await page.getByTestId('card-inside-email').fill('pramod@thetestingacdemy.com');
        await page.getByTestId('card-inside-password').fill('pramod@123');
        await page.getByTestId('card-inside-submit').click();
    });

});
```

Then run:

```bash
# Only the most important test
npx playwright test --grep "@P0"

# Smoke + regression (skip P2)
npx playwright test --grep-invert "@P2"

# Everything
npx playwright test tests/13_Shadow_DOM/
```
