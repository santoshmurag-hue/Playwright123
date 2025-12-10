import { test } from "@playwright/test";


test.describe('',()=>{
    test('authentication', async({browser}) => {
    
        //playwright approach 
        //test level
    
        const context = await browser.newContext(
            {httpCredentials:
                {username:'admin',
                password:'admin'
                }
            }
    )
        const page = await context.newPage()
        await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
        await expect(page).toHaveScreenshot()
       // await page.pause()
        
    });

    test('auto suggestion dynamic', async({page}) => {
    
          await page.goto('https://www.amazon.in')
      
        await page.getByPlaceholder('Search Amazon.in').fill('laptop')
    
        await page.waitForSelector('[id="sac-suggestion-row-1"]', {timeout:2000})
        
        let allsug = await page.locator('//div[@class="left-pane-results-container"]/div').all()
        console.log(allsug);
        
        await expect
    
        for(let sug of allsug)
        {
            let t = await sug.textContent()
            console.log(t);
            if(t.includes('35000'))
            {
                await sug.click()
                break
            }
        
    
        }
    
       // await page.pause()
        
    });

    test(' prompt popup', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1')
    
    page.once('dialog',  async(dialog)=>{

        
        console.log(await dialog.type());
        console.log(await dialog.message());
        await page.waitForTimeout(1000)
        await dialog.accept('xxxxxx')
    })

    await page.locator('//input[@type="checkbox"]').first().check()
    await page.getByRole('button', {name:'Delete'}).click()
   // await page.pause()
});













})