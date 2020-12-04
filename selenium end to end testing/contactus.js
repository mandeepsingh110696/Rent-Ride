

// const{Builder,By,Key,util}=require("selenium-webdriver");
// async function openGoogle(){
//     let driver = await new Builder().forBrowser("firefox").build();
//     //Call local webside
//     //await driver.get("file:///C:/test/index.html");
//     await driver.get("http://google.com");
//     await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);

// }
// openGoogle();





const{Builder,By,Key,util, WebDriver}=require("selenium-webdriver");
async function openContactUs(){
    let driver = await new Builder().forBrowser("firefox").build();
    //Call local webside
    await driver.get("file:///E:/june%2027-28/Images/Loginpage/Contactus.html");
     await driver.findElement(By.name("namee")).sendKeys("Mandeep",Key.RETURN);
     await driver.findElement(By.name("lastname")).sendKeys("Singh",Key.RETURN);
     await driver.findElement(By.name("email")).sendKeys("mandeepsingh11066@gmail.com",Key.RETURN);



     
       
   
       await driver.findElement(By.name("date")).sendKeys("12-05-2020",Key.RETURN); 
    
     
     await driver.findElement(By.css('#country>option:nth-child(2)')).click();
   

     await driver.findElement(By.name("message")).sendKeys("satisfied from your service",Key.RETURN);
     await driver.findElement(By.name("reasonmessage")).sendKeys("to give motivation",Key.RETURN);
     
     await  driver.findElement(By.name("clikk")).click();
  

}

openContactUs();




//  function checkpalindrome()
// {
// var InputString = document.getElementById('palin').value; 
// var resultStr = checkingPalindrome(InputString);
// document.getElementById("palindrome").innerHTML='The input string "'+InputString+'" is "'+resultStr+'"';
// }


// function checkingPalindrome(InputString)
// {
// var origString;

// InputString = InputString.toLowerCase();

// origString= InputString;

// InputString = InputString.split(''); 
// InputString = InputString.reverse();
// InputString = InputString.join(''); 
// var revString = InputString;
// if(origString == revString){
// return 'Palindrome string'; 
// }
// else
// {
// return 'not a Palindrome string';
// }
// }


// function checkPrimeNO(){
//   //get input
//   var number = document.getElementById("primenoinput").value;
//   var counter = 0;

  
//   for (i = 1; i <= number; i++) {
     
//       if (number % i == 0) {
        
//         counter = counter + 1;
//       }
//   }

 
//   if (counter == 2) {
//       document.getElementById('checkPrime').innerHTML = number + ' is a Prime number';
//   }else{
//       document.getElementById('checkPrime').innerHTML = number + ' is NOT a Prime number';
//   }
// } 

 
