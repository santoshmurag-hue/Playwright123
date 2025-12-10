export class Addtocart
{
    /**
   * @param {import('playwright').Page} page
   */

    constructor(page)
    {
        this.page=page
        this.addtocartbtn= page.getByRole('button', { name: 'Add to Cart' })
        this.gotocartbtn= page.getByRole('link',{name:'Go to Cart'})


    }

    async gotocart()
    {
    await this.addtocartbtn.click()
    await this.gotocartbtn.click()

    }



}