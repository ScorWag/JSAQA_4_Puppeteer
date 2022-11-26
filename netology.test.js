let page;
const header = "h1";
const buttonCloseBanner =
  "[class*='SVGInline-svg src-Landings-components-Banner--close']";

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

test("The h1 header Netology about page content'", async () => {
  await page.goto("https://netology.ru/about", { timeout: 60000 });
  const landingHeader =
    "[class*='src-Landings-pages-About-components-Presentation--title']";
  await page.waitForSelector(landingHeader);
  const actual = await page.$eval(landingHeader, (link) => link.textContent);
  expect(actual).toEqual("Источник знаний для роста в профессии");
}, 30000);

test("The h1 header Netology softskills page content'", async () => {
  await page.goto("https://netology.ru/soft-skills", { timeout: 60000 });
  await page.waitForSelector(buttonCloseBanner);
  await page.click(buttonCloseBanner);
  const actual = await page.$eval(header, (link) => link.textContent);
  expect(actual).toEqual("Soft Skills");
}, 30000);

test("The h1 header Netology glossariy page content'", async () => {
  await page.goto("https://netology.ru/glossariy", { timeout: 60000 });
  await page.waitForSelector(header);
  const actual = await page.$eval(header, (link) => link.textContent);
  expect(actual).toEqual("Глоссарий");
}, 30000);
