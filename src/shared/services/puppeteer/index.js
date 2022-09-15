const puppeteer = require("puppeteer");

async function crawlerWebBlog(link) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${link}`);

  const pageContent = await page.evaluate(() => {
    return {
      title: document.querySelector("h1").innerHtml,
    };
  });

  console.log(pageContent);

  await browser.close();
}

export { crawlerWebBlog };
