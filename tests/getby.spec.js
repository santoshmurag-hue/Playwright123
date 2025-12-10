import { test} from '@playwright/test'

test('Built in locators', async({page}) => {

    await page.goto('https://demo.nopcommerce.com/login')
    //get by label
    await page.getByLabel('Email:' ,{exact:true}).fill('abc@gmail.com') //Email:' //email:

    //partial label text
    await page.getByLabel('Emai').fill('abc@gmail.com')

    //get by placeholder
    await page.getByPlaceholder('Search store', {exact:true}).fill('mobiles')
    

    //get by text
        let heading = await page.getByText('Welcome, Please Sign In!').textContent()
        console.log(heading);

        //get by alt text

        await page.getByAltText('nopCommerce demo store').click()

        //get by title

        await page.getByTitle('Show products in category Electronics').nth(1).click()

        //first(), last(), nth()

        //get by role 

        await page.getByRole('textbox',{name:'Search store'}).fill('computers')
        await page.getByRole('button', {name:'Search'}).click()

        //await page.pause()


        //get by test id
        await page.getByTestId('AV')`   `

        //css or xpath
        await page.locator('css/xpath expression')

        await page.get







});