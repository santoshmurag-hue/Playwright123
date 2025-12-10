import{expect, test} from '@playwright/test'
import path from 'path';

test('file upload', async({page}) => {

    //local path

    await page.goto('https://testautomationpractice.blogspot.com/')
      //local path
    await page.locator('#singleFileInput').setInputFiles("C:/Users/tende/OneDrive/Desktop/jenkins.txt")
    await page.getByRole('button', {name:'Upload Single File'}).click()
    //await page.pause()
});

test('file upload from framework', async({page}) => {

    //single file

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname);
    
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname ,'../uploadfile/jenkins.txt'))
    await page.getByRole('button', {name:'Upload Single File'}).click()
    //await page.pause()
});

test('multiple file upload', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname);
    
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname ,'../uploadfile/jenkins.txt'), path.join(__dirname, '../uploadfile/Objects.txt')])
    await page.getByRole('button', {name:'Upload Multiple File'}).click()
   let text=  await page.locator('#multipleFilesStatus').textContent()
   console.log(text);
   
   expect(text).toContain('jenkins.txt','Objects.txt')
    //await page.pause()
});