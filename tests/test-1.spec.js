import { test, expect } from '@playwright/test';

//test annotations

//test.only run specific script
//test.skip skip a test block
//test.fail 
//test.fixme
//test.slow
//test.describe  group the test blocks

test.describe('Name of the group', ()=>{

test('test', async ({ page }) => {
  test.slow()
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('vbvnvhmhv');
  await page.getByRole('textbox', { name: 'Email Id' }).click();
  await page.getByRole('textbox', { name: 'Email Id' }).fill('bvbjbvvh');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('cggcgh');
  await page.getByRole('button', { name: 'Register' }).click();
})

test('test1', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('vbvnvhmhv');
  await page.getByRole('textbox', { name: 'Email Id' }).click();
  await page.getByRole('textbox', { name: 'Email Id' }).fill('bvbjbvvh');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('cggcgh');
  await page.getByRole('button', { name: 'Register' }).click();
})

test('test2', async({page}) => {

  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  await page.getByRole('link', { name: 'Text Field' }).click();
  await page.getByRole('link', { name: 'Button', exact: true }).click();



})



})



