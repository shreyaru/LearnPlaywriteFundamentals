# 🎭 Learn Playwright Fundamentals

A comprehensive, hands-on learning repository for mastering **Playwright** — the modern end-to-end testing framework by Microsoft. Each numbered folder in `tests/` corresponds to a focused topic, progressing from basics to advanced framework patterns.

---

## 📁 Project Structure

```
LearnPlaywrightFundamentals/
├── tests/
│   ├── 01_Basics/                        # Playwright setup, first launch, browser contexts
│   ├── 02_first_tests/                   # Writing and running your first test specs
│   ├── 03_Locators_Commands/             # Locator strategies (CSS, XPath, text, role, etc.)
│   ├── 04_Session_Storage/               # Working with cookies, localStorage & sessionStorage
│   ├── 05_Allure_Reporting/              # Integrating Allure reports with Playwright
│   ├── 06_Multiple_Element_/             # Handling lists, iterating over multiple elements
│   ├── 07_WebTables/                     # Extracting & asserting data from HTML tables
│   ├── 08_Web_Select_Frames_Iframe/      # Dropdowns, <select>, and frame handling
│   ├── 09_Frame_Iframe/                  # Deep-dive into frame & iframe interactions
│   ├── 10_Keyboard_Hover_Drag_Drop/      # Keyboard events, hover, drag-and-drop actions
│   ├── 11_JS_Alerts/                     # Handling JavaScript alert, confirm & prompt dialogs
│   ├── 12_Handle_SVG/                    # Interacting with SVG elements
│   ├── 13_Shadow_DOM/                    # Piercing and testing Shadow DOM components
│   ├── 14_FileUpload/                    # File upload automation
│   ├── 15_File_Download/                 # File download handling & validation
│   ├── 16_Scroll_toElement/              # Scrolling strategies and scroll-into-view
│   ├── 17_Expect_Assertions/             # Playwright expect assertions & matchers
│   ├── 18_Test_hooks/                    # beforeAll, afterAll, beforeEach, afterEach hooks
│   ├── 19_Data_Driven_Testing/           # Parameterized / data-driven test patterns
│   ├── 20_Page_Object_Model/             # POM design pattern implementation
│   ├── 21_Fixture/                       # Custom fixtures and test context extension
│   ├── 22_Misc_Concepts/                 # Miscellaneous tips, tricks & utilities
│   ├── 23_Advance_Framework/             # Advanced framework architecture & patterns
│   ├── Projects/                         # Mini end-to-end project examples
│   └── example.spec.ts                   # Default Playwright sample test
├── playwright.config.ts                  # Playwright configuration
├── package.json                          # Node.js project metadata & dependencies
├── .gitignore                            # Git ignore rules
└── README.md                             # ← You are here
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shreyaru/LearnPlaywriteFundamentals.git
cd LearnPlaywriteFundamentals

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests (headless)
npx playwright test

# Run tests with browser UI visible
npx playwright test --headed

# Run a specific test file
npx playwright test tests/01_Basics/my-test.spec.ts

# Run tests in a specific folder
npx playwright test tests/03_Locators_Commands/

# Open the interactive HTML report
npx playwright show-report
```

---

## 📚 Topic Index

| #  | Folder                          | What You'll Learn                                          |
|----|---------------------------------|------------------------------------------------------------|
| 01 | `01_Basics`                     | Project setup, browser launch, contexts, pages             |
| 02 | `02_first_tests`                | Writing specs, `test()` blocks, basic assertions           |
| 03 | `03_Locators_Commands`          | CSS / XPath / role / text locators, chaining               |
| 04 | `04_Session_Storage`            | Cookies, localStorage, sessionStorage management           |
| 05 | `05_Allure_Reporting`           | Allure reporter integration & configuration                |
| 06 | `06_Multiple_Element_`          | `.all()`, `count()`, iterating element lists                |
| 07 | `07_WebTables`                  | Table row/column parsing, dynamic table assertions         |
| 08 | `08_Web_Select_Frames_Iframe`   | `<select>` dropdowns, frame locators                       |
| 09 | `09_Frame_Iframe`               | Nested iframes, `frameLocator()`, cross-frame actions      |
| 10 | `10_Keyboard_Hover_Drag_Drop`   | `keyboard.press()`, `hover()`, drag-and-drop APIs          |
| 11 | `11_JS_Alerts`                  | `page.on('dialog')`, accept/dismiss/prompt                 |
| 12 | `12_Handle_SVG`                 | SVG element location and interaction                       |
| 13 | `13_Shadow_DOM`                 | Shadow root piercing, `locator()` in shadow DOM            |
| 14 | `14_FileUpload`                 | `setInputFiles()`, file chooser events                     |
| 15 | `15_File_Download`              | Download event handling, path validation                   |
| 16 | `16_Scroll_toElement`           | `scrollIntoViewIfNeeded()`, wheel events                   |
| 17 | `17_Expect_Assertions`          | `toBeVisible()`, `toHaveText()`, `toHaveURL()`, etc.       |
| 18 | `18_Test_hooks`                 | Lifecycle hooks for setup & teardown                       |
| 19 | `19_Data_Driven_Testing`        | Parameterized tests, CSV/JSON-driven data                  |
| 20 | `20_Page_Object_Model`          | POM classes, encapsulation, reusable page methods          |
| 21 | `21_Fixture`                    | Custom fixtures, extending test context                    |
| 22 | `22_Misc_Concepts`              | Retries, screenshots, videos, tracing, timeouts            |
| 23 | `23_Advance_Framework`          | CI/CD integration, parallel execution, advanced config     |
| —  | `Projects`                      | Complete mini-projects combining multiple concepts          |

---

## ⚙️ Configuration

The Playwright configuration lives in [`playwright.config.ts`](playwright.config.ts). Key settings:

| Setting          | Value              | Description                              |
|------------------|--------------------|------------------------------------------|
| `testDir`        | `./tests`          | Root directory for test files            |
| `fullyParallel`  | `true`             | Run test files in parallel               |
| `retries`        | `2` (CI) / `0`     | Retry count based on environment         |
| `reporter`       | `html`             | HTML report generation                   |
| `trace`          | `on-first-retry`   | Collect trace on first retry             |
| Browser          | Chromium            | Default project (Firefox/WebKit available)|

---

## 🛠️ Tech Stack

- **[Playwright](https://playwright.dev/)** `^1.62.1` — Cross-browser E2E testing
- **TypeScript** — Type-safe test authoring
- **Node.js** — Runtime environment

---

## 📝 License

ISC

---

> **Happy Testing! 🎭✨**
