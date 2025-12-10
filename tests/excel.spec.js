import{test,expect} from '@playwright/test'
import { Registerpage } from 'D:/PlayWright_q/pageobjects/registerpage';  

import excel from 'exceljs'
import { readdatafromexcel } from 'D:/PlayWright_q/genricutility/excelutility.js';
import { writeFile } from 'fs';



test('Read data from excel', async({page}) => {

    // let book= await new excel.Workbook()
    // await book.xlsx.readFile('C:/Users/User/OneDrive/Desktop/pw_batch123/testdata/excel.xlsx')
    //  let sheet= await book.getWorksheet('Sheet1')
    //  let username= sheet.getRow(1).getCell(1).toString()
    //  let email= sheet.getRow(2).getCell(1).toString()
    // let pwd=  sheet.getRow(3).getCell(1).toString()

    const rgspg= new Registerpage(page)
await rgspg.gotourl('https://demoapps.qspiders.com/ui?scenario=1')
await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box')
let path = 'D:/PlayWright_q/testdata/excel.xlsx'
let username = await readdatafromexcel(path,'Sheet1',1,1)
let email = await readdatafromexcel(path,'Sheet1',2,1)
let pwd = await readdatafromexcel(path,'Sheet1',3,1)
await rgspg.registeraction(username,email,pwd)
await expect(page.getByText('Registered successfully',{exact:true}).first()).toContainText('successfully')
//await page.pause()


});

test('write data', async({page}) => {

    let book = await new excel.Workbook()
    await book.xlsx.readFile('D:/PlayWright_q/testdata/excel.xlsx')
   let sheet= await book.getWorksheet('Sheet22')
   sheet.addRow(5).getCell(3).value='javascript'
   await book.xlsx.writeFile('D:/PlayWright_q/testdata/excel.xlsx')

    
});

