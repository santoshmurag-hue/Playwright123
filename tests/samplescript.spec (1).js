import{test} from '@playwright/test'

test('register', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    //by css
    //syntax
    //    tagname[AN='AV']  input[id="name"]
     // # indicates id  ('#Av') ('#name')
     //. indicates class ('.AV') ()

     //xpath
     //absolute xpath
     //we use '/' to navigate from parent to immediate child


     //relative xpath 
     //we use '//' to navigate from parent to any child

     //xpath by attributes
     //tagname[@AN='AV']  //input[@id="password"]

     //multiple attributes
     //input[@id="password" and  @name="password"]

     //text()
     //tag[text()='tv'] //label[text()='Email Id'] 
    // text()=. //label[.='Email Id']

    //partial dynamic element
    //tag[contains(.,'tv')] //label[contains(.,'Email')]

    //complete dynamic element

    //forward traversing '/' & '//'
    //backward  child to parent /..    label[contains(.,'Email')]/..

    //siblings function
    //following /following-sibling::tag //label[contains(.,'Email')]/../following-sibling::div[2]
    //preceding sibling  /preceding-sibling::tag  //label[contains(.,'Email')]/../preceding-sibling::div

    //ancestor

    //ancestor::tag  //label[contains(.,'Email')]/ancestor::main



    
    
});