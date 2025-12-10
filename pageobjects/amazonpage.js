export class Amazonhomepage
{
/**
   * @param {import('playwright').Page} page
   */

constructor(page) {
    this.page=page
    this.searchtf= page.getByPlaceholder('Search Amazon.in')
    this.allsug= page.locator('//div[@class="left-pane-results-container"]/div')
    this.prod= page.getByRole('heading',{name:'Samsung Galaxy A35 5G (Awesome Iceblue, 8GB RAM, 128GB Storage) Without Offer',exact:true})
   
}

async goto(url)
{
    await this.page.goto(url)
    await this.page.waitForURL(url)
}

async searchprod(category)
{
    await this.searchtf.fill(category)
    await this.allsug.first().waitFor()
}

async selctfromsugg(value)
{
    const allloc= await this.allsug.all()

for( let loca of allloc)
{
   let sugtext= await loca.textContent()
   if(sugtext.includes(value))
   {
    await loca.click()
    break
   }


}

}



}