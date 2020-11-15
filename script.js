var firebaseConfig = {
  apiKey: "AIzaSyB7MS5ZzX2h5BTRZltUj1Xr71UJ_tfs3Ho",
  authDomain: "mltextrecodemo.firebaseapp.com",
  databaseURL: "https://mltextrecodemo.firebaseio.com",
  projectId: "mltextrecodemo",
  storageBucket: "mltextrecodemo.appspot.com",
  messagingSenderId: "8681410553",
  appId: "1:8681410553:web:7292a9805863c7aa01b728"
};
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  
  // var con= firebase.database().ref('users');
  // document.getElementById("Register").addEventListener("submit",(e)=>{
	  // e.preventDefault();
	  // var userinfo=con.push();
	  // userinfo.set({
	  // fname:getId("fname"),
	   // lname:getId("lname"),
	    // email:getId("email"),
		 // pass:getId("pass"),
		  // cpass:getId("cpass"),
		    // cars:getId("cars"),
		   // no:getId("no")
	  // });
      // alert("sent");
	  // console.log("sent");
      // document.getElementById("Register").reset();
  // });	  
	  
	  // function getId(id)
	  // {
		  // return document.getElementById(id).value;
	  // }
  
	function loginn(){
		
		
		
		debugger;
		var _email = document.getElementById("email");
		var _password = document.getElementById("password");
		
		
     firebase.database().ref("user").push({
     email:_email.value,
     password:_password.value
      });

		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(_email.value, _password.value);
		//promise.catch(e => alert(e.message));
		
		alert("Login Sucessfully");
		
		
	}
	
	function registerr(_fname,_lname,_pass,_cpass,_email,_cars,_no)
	{
		

		debugger;
	/* 	var _fname = document.getElementById("fname");
		var _lname = document.getElementById("lname");
		var _email = document.getElementById("emaill");
		var _pass = document.getElementById("pass");
		var _cpass = document.getElementById("cpass");
		var _cars = document.getElementById("cars");
		var _no = document.getElementById("no"); */
		
		
		debugger
     firebase.database().ref("users").push({
       fname :_fname,
		lname :_lname,
		emaill: _email,
		 pass:_pass,
		cpass: _cpass,
		 cars:_cars,
		 no:_no
		
      });
	  
	     const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(_email, _pass);
		promise.catch(e => alert(e.message));
		 
		 debugger
		alert("register successfully");
		login();
		
	}
	
		function validation(){

		/* 	var user = document.getElementById('user').value;
			var pass = document.getElementById('pass').value;
			var confirmpass = document.getElementById('conpass').value;
			var mobileNumber = document.getElementById('mobileNumber').value;
			var emails = document.getElementById('emails').value;
 */

			
		var _fname = document.getElementById("fname").value;
		var _lname = document.getElementById("lname").value;
		var _pass = document.getElementById("pass").value;
		var _cpass = document.getElementById("cpass").value;
		var _email = document.getElementById("emaill").value;
		var _cars = document.getElementById("cars").value;
		var _no = document.getElementById("no").value;
		
		
		
		
				if(_fname == ""){
				document.getElementById('fname').innerHTML =alert(" ** Please fill the Firstname field");
				return false;
			}
			else if((_fname.length <= 2) || (_fname.length > 20)) {
				document.getElementById('fname').innerHTML = alert("**  Firstname length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_fname)){
				document.getElementById('fname').innerHTML =alert(" ** only characters are allowed in Firstname field" );
				return false;
			} 


			else if(_lname == ""){
				document.getElementById('lname').innerHTML =alert(" ** Please fill the lastname field");
				return false;
			}
			 else if((_lname.length <= 2) || (_lname.length > 20)) {
				document.getElementById('lname').innerHTML = alert("**  lastname length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_lname)){
				document.getElementById('lname').innerHTML =alert(" ** only characters are allowed in lastname field" );
				return false;
			}
			 
			else if(_email == ""){
				document.getElementById('emaill').innerHTML =alert(" ** Please fill the email id` field");
				return false;
			}
			 else if(_email.indexOf('@') <= 0 ){
				document.getElementById('emaill').innerHTML =alert(" ** @ Invalid Position");
				return false;
			}
 
			else if((_email.charAt(_email.length-4)!='.') && (_email.charAt(_email.length-3)!='.')){
				document.getElementById('emaill').innerHTML =alert(" ** . Invalid Position");
				return false;
			} 
 

	    else   if(_pass== ""){
				document.getElementById('pass').innerHTML =alert(" ** Please fill the password field");
				return false;
			}
		 else	if((_pass.length <= 5) || (_pass.length > 20)) {
				document.getElementById('pass').innerHTML =alert(" ** Passwords lenght must be between  5 and 20");
				return false;	
			}
 

			else if(_cpass == ""){
				document.getElementById('cpass').innerHTML =alert(" ** Please fill the confirmpassword field");
				return false;
			}
			
			else if(_pass!=_cpass){
				document.getElementById('cpass').innerHTML =alert(" ** Password does not match the confirm password");
				return false;
			}

			
	
		
			 var e = document.getElementById("cars");
                var strUser = e.options[e.selectedIndex].value;

                var strUser1 = e.options[e.selectedIndex].text;
                if(strUser==0)
                {
                    alert("Please select a car");
					return false;
                }
           
			
			else if(_no == ""){
				document.getElementById('no').innerHTML =alert(" ** Please fill the License Number field");
				return false;
			}
			 else if(_no.length!=8){
				document.getElementById('no').innerHTML =alert(" ** License Number must be 8 digits only");
				return false;
			} 
			else
			{
				registerr(_fname,_lname,_pass,_cpass,_email,_cars,_no);
				
			
				return true;
			    
				
				
			}
		

		}
	