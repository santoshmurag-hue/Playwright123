import{test} from "@playwright/test"

test('wait', async({page}) => {

    //explicit waits

    await page.goto('https://www.amazon.in')
    //login action
    //after any action the url changes
    await page.waitForURL(/.*amazon.*/, {timeout:10000}) //regex

    await page.waitForSelector('#nav-search-submit-button', {timeout:5000})

    //await page.waitForLoadState('networkidle')

    await page.waitForTimeout(2000) //hard wait

    await page.getByPlaceholder('Search Amazon.in').waitFor({state:'attached',timeout:5000})

    // await page.waitForEvent('')


    //await page.pause()


    
});