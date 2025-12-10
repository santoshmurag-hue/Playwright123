import{test,expect} from '@playwright/test'
import { Registerpage } from '../pageobjects/registerpage';


test('Register user', async({page}) => {

const rgspg= new Registerpage(page)
await rgspg.gotourl('https://demoapps.qspiders.com/ui?scenario=1')
await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box')
await rgspg.registeraction('abc','adc@gmail.com','abc123')
await expect(page.getByText('Registered successfully',{exact:true}).first()).toContainText('successfully')
//await page.pause()
    
});