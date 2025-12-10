import{test} from '@playwright/test'

test('authentication', async({browser}) => {

    //playwright approach 
    //test level

    const context = await browser.newContext(
        // {httpCredentials:
        //     {username:'admin',
        //     password:'admin'
        //     }
        // }
)
    const page = await context.newPage()
    await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    //await page.pause()
    
});

//basic approach

test('auth', async({page}) => {
    await page.goto('https://admin:admin@basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
     //await page.pause()
});