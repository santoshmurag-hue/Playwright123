import {expect, test} from '@playwright/test'

test('Element control', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')


    //assertion for the title

    await expect(page).toHaveTitle(/Qspiders/)

    await expect(page).toHaveURL('https://demoapps.qspiders.com/ui?scenario=1')

    // //Text field
    // await page.getByPlaceholder('Enter your name').fill('abc')
    // await page.getByPlaceholder('Enter Your Email').fill('abc@gmail.com')
    // await page.locator('#password').fill('abc123')
    //  let enteredname= await page.getByPlaceholder('Enter your name').getAttribute('value')
    //     console.log(enteredname);

    //button

    await page.getByRole('button',{name:'Register'}).click()

    // await page.goto('https://demoapps.qspiders.com/ui/button')
    await page.getByText('Button',{exact: true}).click()
    await page.waitForSelector('#btn')
    await expect.soft(page.getByRole('button', {name:'Yes'}), 'colour validation').toHaveCSS('background-color', 'rgb(134, 239, 172)')
    await page.getByRole('button', {name:'Yes'}).click()
    await expect(page.getByRole('button', {name:'Yes'})).toHaveCSS('background-color', 'rgb(134, 239, 172)')

    // //link
    // await page.getByText('Link').click()

    // await page.getByRole('link', {name:'Electronics'}).click()

    //checkbox
    await page.getByText('Check Box').click()
    await page.locator('#domain_a').check()
    await page.locator('#domain_b').check()
   await page.locator('#domain_b').uncheck()
    await expect( page.locator('#domain_b')).not.toBeChecked()

    // // radio button
    // await page.getByText('Radio Button').click()
    // await page.locator('#attended').check()
    // await page.locator('#attended_b').check()

    //image

    // await page.getByText('Image').click()
    // await page.getByRole('link', {name:'Clickable Image'}).click()
    // await page.getByTitle("Kid's clothing").click()
    
    //toggle

    // await page.getByText('Toggle').click()
    // await page.locator("span[class='relative bg-gray-300 rounded-full w-9 h-4 transition duration-300 ease-in-out']").first().click()


    // single drop down

    await page.getByText('Dropdown').click()
    // let country = await page.locator('#country_code')
    // //await page.locator('#country_code').selectOption()
    // //select by index
    // //await country.selectOption({index:1})
    // //value
    // //await country.selectOption('+92')
    // //lable
    // await country.selectOption({label:'+44'})

    //multi select dd

    await page.getByText('Multi Select' , {exact:true}).click()
    await page.locator('#select-multiple-native').selectOption([{index:1},{index:5}, {label:'DANVOUY Womens T Shi...'}])
    await page.getByRole('button',{name:"Add"}).click()

    await expect(page.getByRole('button',{name:"Add"})).toHaveAttribute('class','bg-orange-500 p-2 text-white rounded w-[150px]')
   await expect(page.getByRole('button',{name:"Add"})).toHaveClass('bg-orange-500 p-2 text-white rounded w-[150px]')
   //await expect(page.getByRole('button',{name:"Add"})).toHaveId('AV')
    //get selected value

    await expect(page.locator('//tbody//tr//td[1]'),'text should contain').toContainText(['Mens Casual Premium ...'])
    await expect(page.locator('//tbody//tr//td[1]')).toHaveCount(3)

     let value =await page.locator('//tbody//tr//td[1]').allTextContents() //mutiple element
     console.log(value);
     expect(value).toHaveLength(3)
     expect.soft(value, 'custom message').toContain('Mens Casual Premium ...')
     
   //   //return the visible text content

     let text= await page.getByRole('link', {name: 'Search With Select'}).textContent() //single element
        console.log(text);

        expect(text).toContain('Select')
        expect(text).toEqual('Search With Select')
  
   //   //get attribute
   //   let attrivalue= await page.getByRole('button',{name:"Add"}).getAttribute('class')
   //  console.log(attrivalue);

   //await page.pause()



    
});