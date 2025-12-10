import{test, expect} from '@playwright/test'

test('notification', async({browser}) => {

    const context = await browser.newContext({
        permissions:['notifications']
    })
    const page = await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
    await page.waitForURL('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
    await page.getByRole('button',{name:'Notification'}).click()
    //await page.pause()
    

    //verify the permission
    //page.evaluate() is a method in in playwrightwhich lets  you
    //write & run the javascript code inside the browsrer/ page context (not running in node js)
  let res = await page.evaluate(()=>Notification.permission)
  console.log('Permission', res);
  
  expect(res).toBe('granted')
});