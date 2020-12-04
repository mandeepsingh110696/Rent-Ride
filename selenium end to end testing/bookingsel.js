
const{Builder,By,Key,util, WebDriver}=require("selenium-webdriver");
async function booking(){
    let driver = await new Builder().forBrowser("firefox").build();
    //Call local webside
    await driver.get("file:///E:/june%2027-28/Images/Loginpage/Booking.html");
   //  await driver.findElement(By.id("eng")).getText();
     await driver.findElement(By.name("cname")).sendKeys("Mandeep",Key.RETURN);
     await driver.findElement(By.name("cemail")).sendKeys("mandeepsingh11066@gmail.com",Key.RETURN);
     await driver.findElement(By.name("cphone")).sendKeys("5678909878",Key.RETURN);
     await (await driver.findElement(By.name("confbook"))).click();

}
booking();



