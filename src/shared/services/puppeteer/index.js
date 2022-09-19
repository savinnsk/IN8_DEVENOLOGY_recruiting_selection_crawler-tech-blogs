
const puppeteer = require("puppeteer")


async function crawlerWebBlog(link) {
  
  const browser = await puppeteer.launch();
  
  const page = await browser.newPage();
  await page.goto(`${link}`);



   const contents = await page.evaluate(() => {
    return {
      title: document.querySelector("h1").innerHTML,
    };
  });

  console.log(contents.title)

  return contents


 
}

module.exports = {crawlerWebBlog}
