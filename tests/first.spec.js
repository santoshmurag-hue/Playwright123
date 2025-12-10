import {test} from '@playwright/test'

test('Sample script', async({browser})=>{
test.setTimeout(50000)
const context= await browser.newContext() //empty browser without any history or cookies
const page = await context.newPage() // opening one new tab
//browser controls
await page.goto('https://www.amazon.in/') //navigating to web application/page
let browsersize =await page.viewportSize() //retrun the width & height of browser 
console.log(browsersize);
await page.setViewportSize({width:1024,height:780}) // changing the browser size in pixels
await page.reload() // refresh the current page
//await page.pause()
await page.goBack() // navigates to the previous page in history
await page.goForward() // navigates to the next page in history
await page.screenshot({path:'./screenshot/screen1.png', fullPage:true})
const newpage= await context.newPage()
await newpage.goto('https://www.flipkart.com/')

let tabs = await context.pages().length //returns no of tabs or windows opened
console.log(tabs); 

await browser.close() //close the browser



})

