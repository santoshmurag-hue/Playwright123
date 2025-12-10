import {test} from '@playwright/test'

test('mouse actions', async({page}) => {

    // await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    // await page.getByRole('button',{name:'Yes'}).click() //by default it is left click
   
    // //right click

    // await page.getByRole('link', {name:'Right Click'}).click()

    // await page.locator('#btn_a').click({button:'right'})

    // // //double click

    // await page.getByRole('link',{name:'Double Click'}).click()
    //  await page.getByRole('button',{name:'Yes'}).dblclick()
     
    //await page.getByRole('button',{name:'No'}).click({clickCount:2})


     //handling disabled element


    //  await page.getByRole('link',{name:'Disabled'}).click()

    //  //await page.locator('#submit').click({force:true})

    //  await page.locator('#submit').dispatchEvent('click')
    //  await page.pause()


    //click & hold by mouse down & up
    //  await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')

    // await page.locator('#circle').hover()
    // await page.mouse.down()
    // await page.waitForTimeout(2000)
    // await page.mouse.up()
    // await page.pause()

    //mouse hover

    // await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
    // await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
    // await page.waitForTimeout(2000)
    // await page.mouse.move(200,500)

 //scroll
    // await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
    // await page.mouse.wheel(0,1000)
    // await page.waitForTimeout(2000)
    // await page.mouse.wheel(0,-1000)

    // //scroll to particular element
    // await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded()

    //drag & drop

//     await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
//     let element=  page.getByText('Laptop Charger')
// let tatrget = page.locator("//div[.='Laptop Accessories']/parent::div")
// await element.dragTo(tatrget)
// await page.getByText('Laptop Cover').dragTo(page.locator("//div[.='Laptop Accessories']/parent::div"))

// //dragging with mouse
// await page.getByText('Mobile Charger').hover()
// await page.mouse.down()
// await page.locator("//div[.='Mobile Accessories']/parent::div").hover()
// await page.mouse.up()

//moving mouse by giving x & y coordinates
// await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0')

// await page.getByText('Drag Me').hover()
// await page.mouse.down()
// await page.mouse.move(200,500)
// await page.mouse.move(100,300)

//by getting element location

// await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
//  await page.getByText('Mobile Charger').hover()
// await page.mouse.down()
// let box =await page.locator("//div[.='Mobile Accessories']/parent::div").boundingBox()
// console.log(box);
// await page.mouse.move(box.x,box.y)
// await page.mouse.up()
//teyboard
    //    await page.goto('https://demoapps.qspiders.com/ui/keyboard?sublist=0')
    //    //await page.getByLabel('text',{name :'handleInput'}).click()
    //  await page.getByText('handleInput').click()
    //    await page.keyboard.type('Bangalore')   
        //         await page.keyboard.press("Enter")
    //     await page.keyboard.press("ArrowRight")
    // // await page.mouse.wheel(0,-1000)handleInput




    await page.goto('https://demoapps.qspiders.com/ui/keyboard')
    await page.locator('input[name="handleInput"]').click()
    await page.keyboard.type('Santosh')
   // await page.pause()

});