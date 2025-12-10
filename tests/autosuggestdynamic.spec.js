import {expect, test} from '@playwright/test'

test('auto suggestion dynamic', async({page}) => {

      await page.goto('https://www.amazon.in')
  
    await page.getByPlaceholder('Search Amazon.in').fill('laptop')
    //await page.pause()

    await page.waitForSelector('[id="sac-suggestion-row-1"]', {timeout:2000})
    
    let allsug = await page.locator('//div[@class="left-pane-results-container"]/div').all()
    console.log(allsug);
    
    //await expect

    for(let sug of allsug)
    {
        let t = await sug.textContent()
        console.log('All Text Content', t);
        if(t.includes('35000'))
        {
            await sug.click()
            break
        }
    

    }

   // await page.pause()
    
});