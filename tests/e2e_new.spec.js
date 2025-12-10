import{test,expect} from '@playwright/test'
import { Registerpage } from 'C:/Users/tende/OneDrive/Desktop/PlayWright_q/pageobjects/registerpage';
import rgstdata from "C:/Users/tende/OneDrive/Desktop/PlayWright_q/testdata/registerdata.json"

test('Register user', async({page}) => {

    const rgspg= new Registerpage(page)
await rgspg.gotourl('https://demoapps.qspiders.com/ui?scenario=1')
await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box')
await rgspg.registeraction(rgstdata.username,rgstdata.email,rgstdata.pwd)
await expect(page.getByText('Registered successfully',{exact:true}).first()).toContainText('successfully')
//await page.pause()


});




