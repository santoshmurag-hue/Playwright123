import { test} from '@playwright/test'

test('launch', async({page}) => {

    await page.goto('https://demo.nopcommerce.com/login')
    console.log(login)
})
