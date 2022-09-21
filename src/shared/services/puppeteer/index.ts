
import puppeteer from "puppeteer"



async function crawlerWebBlog(devGoLink) {

 
  try{
  const browser = await puppeteer.launch();
  
  const page = await browser.newPage();
  await page.goto(`${devGoLink}`);


   const allBlogsDevGO = await page.evaluate(() => {

    let blogsDevGo  = [] 


    let contents = {
      titles_blogs: document.querySelectorAll(".blog-article-card-title"),
      links : document.querySelectorAll(".blog-article-card-cover")
    }

    for(let i = 0 ; i < contents.titles_blogs.length ; i++ ){
        
      blogsDevGo.push(

        {
          title : contents.titles_blogs[i].textContent,
          link : contents.links[i].getAttribute('href')
        })

    }
    
    return blogsDevGo 
    

  });


  await browser.close()

  return allBlogsDevGO

  }catch(err){

    console.log(err)
  }

 
}

export {crawlerWebBlog}
