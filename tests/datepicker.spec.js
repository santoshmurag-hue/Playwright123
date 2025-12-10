import {test} from '@playwright/test';

test('datepicker', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/datePick?sublist=0')
    //await page.getByPlaceholder('Select A Date').fill('10/12/2025')
        await page.getByPlaceholder('Select A Date').click()
        await page.getByRole('option',{name:'Choose Friday, December 19th, 2025'}).click()
    //await page.pause()
    
});