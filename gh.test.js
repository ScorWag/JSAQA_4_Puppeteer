let page;
const header = "h1";

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team", { timeout: 60000 });
  }, 60000);
  test("The h1 header content'", async () => {
    const header = "header div div a";
    await page.waitForSelector(header);
    const firstLink = await page.$(header);
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 60000);

  test("The first link attribute", async () => {
    const link = "a";
    await page.waitForSelector(link);
    const actual = await page.$eval(link, (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 60000);
});

test("The h1 header Features page content'", async () => {
  await page.goto("https://github.com/features", { timeout: 60000 });
  await page.waitForSelector(header);
  const actual = await page.$eval(header, (link) => link.textContent);
  expect(actual).toEqual("The tools you need to build what you want.");
}, 60000);

test("The h1 header Enterprise page content'", async () => {
  await page.goto("https://github.com/enterprise", { timeout: 60000 });
  await page.waitForSelector(header);
  const actual = await page.$eval(header, (link) => link.textContent);
  expect(actual).toEqual("Build like the best");
}, 60000);

test("The h1 header Skills page content'", async () => {
  await page.goto("https://skills.github.com/", { timeout: 60000 });
  await page.waitForSelector(header);
  const actual = await page.$eval(header, (link) => link.textContent);
  expect(actual).toEqual("GitHub Skills");
}, 60000);
