
import {test} from '@playwright/test'

test('keyboard actions', async({page}) => {



  await page.goto('https://demoapps.qspiders.com/ui/keyboard')
    await page.locator('input[name="handleInput"]').click()
    await page.keyboard.type('Santosh')
    await page.keyboard.press('ArrowLeft')
    //await page.pause()

});