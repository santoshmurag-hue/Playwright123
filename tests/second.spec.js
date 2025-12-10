import{test} from '@playwright/test'
import path from 'path'

test('Googlescript', async({browser})=>{
test.setTimeout(50000)
const context = await browser.newContext()
const page = await context.newPage()


await page.goto('https://www.google.com/')
await page.reload()
await page.screenshot({path:'.screenshots/screenshotg.png',fullPage:true})
await page.goBack()
//await page.pause
await page.goForward()

const newpage = await context.newPage()
await newpage.goto('https://www.flipkart.com/')
//await newpage.pause()

// const newpage= await context.newPage()
// await newpage.goto('https://www.flipkart.com/')

})
