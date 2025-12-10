import{test} from '@playwright/test'

test('handle iframe', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
    const iframe = await page.frameLocator('//iframe[@class="w-full h-96"]')
    await iframe.getByLabel('Username:').fill('abc')
    await iframe.getByLabel('Password:').fill('abc@123')
    await iframe.getByRole('button',{name:'Login'}).click()
    //await page.pause()
});

test('handle nested iframe', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')
    //const parentframe1= await page.locator('//iframe[@class="w-full h-96"]').contentFrame()
    const parentframe = await page.frameLocator('//iframe[@class="w-full h-96"]')
    const childframe= await parentframe.frameLocator('iframe')
    await childframe.getByLabel('Email:').fill('abc@gmail.com')
    await childframe.getByLabel('Password:',{exact:true}).fill('abc@123')
    await childframe.getByLabel('Confirm Password:').fill('abc@123')
    await childframe.getByRole('button',{name:'Sign Up'}).click()
    //await page.pause()
});