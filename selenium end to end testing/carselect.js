
const{Builder,By,Key,util, WebDriver}=require("selenium-webdriver");
async function carSelect(){
    let driver = await new Builder().forBrowser("firefox").build();
    //Call local webside
    await driver.get("file:///E:/june%2027-28/Images/Loginpage/Productdetail.html");
     await (await driver.findElement(By.name("namecar"))).getText();
     await (await driver.findElement(By.name("rent"))).click();
    

}
carSelect();










