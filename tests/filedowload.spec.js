import{test, expect} from '@playwright/test'
import path from 'path';
import f1 from 'fs'

test('File dowload', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    let customfolder = 'C:/Users/User/OneDrive/Desktop/pw_batch123/filedownload'
    let filename = 'example.txt'
    let fullpath= path.join(customfolder,filename)
    console.log(fullpath);

    await page.getByPlaceholder('Enter text here').fill('Playwright')

    const dowloadpromise= page.waitForEvent('download')
    await page.getByRole('button',{name:'Download'}).click()
    let dowloadedfile= await dowloadpromise

    await dowloadedfile.saveAs(fullpath)

    //temp path of saved file

    console.log('Temporary dowloded path', await dowloadedfile.path());

    if(f1.existsSync(fullpath))
    {
        console.log('file is present');
        
    }
    else{

        console.log('file not present');
        
    }
const text = f1.readFileSync(fullpath,'utf-8')
console.log(text);

expect(text).toContain('vvvvvvvv')


    
    
    
});