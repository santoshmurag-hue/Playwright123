import {test} from '@playwright/test'

test('Element control', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    // //Text field
    await page.getByPlaceholder('Enter your name').fill('abc')
    await page.getByPlaceholder('Enter Your Email').fill('abc@gmail.com')
    await page.locator('#password').fill('abc123')
     let enteredname= await page.getByPlaceholder('Enter your name').getAttribute('value')
        console.log(enteredname);

    //button

    await page.getByRole('button',{name:'Register'}).click()

    // await page.goto('https://demoapps.qspiders.com/ui/button')
    await page.getByText('Button',{exact: true}).click()
    await page.getByRole('button', {name:'Yes'}).click()

    // //link
    await page.getByText('Link').click()

    await page.getByRole('link', {name:'Electronics'}).click()

    // //checkbox
    await page.getByText('Check Box').click()
    await page.locator('#domain_a').check()
    await page.locator('#domain_b').check()

    // // radio button
    await page.getByText('Radio Button').click()
    await page.locator('#attended').check()
    await page.locator('#attended_b').check()

    //image

    await page.getByText('Image').click()
    await page.getByRole('link', {name:'Clickable Image'}).click()
    await page.getByTitle("Kid's clothing").click()
    
    //toggle

    await page.getByText('Toggle').click()
    await page.locator("span[class='relative bg-gray-300 rounded-full w-9 h-4 transition duration-300 ease-in-out']").first().click()


    // single drop down

    await page.getByText('Dropdown').click()
    //let country = await page.locator('#country_code')
    //await page.locator('#country_code').selectOption()
    //select by index
    //await country.selectOption({index:1})
    //value
    //await country.selectOption('+92')
    // //lable
     //await country.selectOption({label:'+44'})

    //multi select dd

    await page.getByText('Multi Select' , {exact:true}).click()
    await page.locator('#select-multiple-native').selectOption([{index:1},{index:5}, {label:'DANVOUY Womens T Shi...'}])
    await page.getByRole('button',{name:"Add"}).click()

    //get selected value

     let value =await page.locator('//tbody//tr//td[1]').allTextContents() //mutiple element
     console.log(value);
     
     //return the visible text content

     let text= await page.getByRole('link', {name: 'Search With Select'}).textContent() //single element
        console.log(text);
  
     //get attribute
     let attrivalue= await page.getByRole('button',{name:"Add"}).getAttribute('class')
    console.log(attrivalue);

    //webtable
    await page.getByText('Web Table').click()
    await page.waitForSelector('//tbody//tr[1]')
    let value1 = await page.locator('//tbody//tr[1]').textContent()
    console.log('web table', value1)

    let value2 = await page.locator('//tbody//tr//th').allTextContents()
    console.log("col value", value2)



   await page.pause()



    
});