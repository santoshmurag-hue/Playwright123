import{test} from '@playwright/test'

test('Window handling', async({browser}) => {
    
    const context = await browser.newContext()
   const page = await context.newPage()
   await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')

//    const pagepromise = context.waitForEvent('page')
//    await page.getByRole('button',{name:'view more'}).first().click()
//    const newpage= await pagepromise

 const [newpage]= await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button',{name:'view more'}).first().click()
])
    await newpage.waitForURL('https://demoapps.qspiders.com/ui/browser/product/1')
   await newpage.getByRole('button', {name:'Add to Cart'}).click()
   //await page.pause()

   const opentabs = await context.pages()

   console.log(opentabs.length);

 let titlt1 = await opentabs[0].title()
 console.log(titlt1);
 
   
let title2= await opentabs[1].title()
console.log(title2);

await opentabs[0].bringToFront()

await opentabs[1].close()

//await page.pause()



})