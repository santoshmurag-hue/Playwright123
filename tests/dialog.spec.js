import{test} from '@playwright/test'

test('confirm popup', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0')
    
    page.on('dialog',  async(dialog)=>{

        
        console.log(await dialog.type());
        console.log(await dialog.message());
        await page.waitForTimeout(1000)
        await dialog.accept()
    })

    await page.locator('//input[@type="checkbox"]').first().check()
    await page.getByRole('button', {name:'Delete'}).click()
    //await page.pause()
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
    //await page.pause()
});


