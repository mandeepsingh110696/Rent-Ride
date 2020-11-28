
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
  
	function loginn(_email,_password){
		
     firebase.database().ref("user").push({
     email:_email,
     password:_password
      });

		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(_email, _password);
		//promise.catch(e => alert(e.message));
		
		alert("Login Sucessfully");
		window.location="Home.html";
	
	}
	
	
	
		function loginnvalidate(){

		

			
		
	
	
		var _email = document.getElementById("email").value;
		var _pass = document.getElementById("password").value
		
		
		
		
		 if(_email == ""){
				document.getElementById('email').innerHTML =alert(" ** Please fill the email id` field");
				return false;
			}
			
			 else if(_email.indexOf('@') <= 0 ){
				document.getElementById('email').innerHTML =alert(" ** missing or  Invalid @  Position");
				return false;
			}
 
		/* 	else if((_email.charAt(_email.length-4)!='.') && (_email.charAt(_email.length-3)!='.')){
				document.getElementById('email').innerHTML =alert(" **missing or Invalid . Position");
				return false;
			}  */
 

	       else   if(_pass== ""){
				document.getElementById('password').innerHTML =alert(" ** Please fill the password field");
				return false;
			}
		   else	if((_pass.length <= 5) || (_pass.length > 20)) {
				document.getElementById('password').innerHTML =alert(" ** Passwords length must be between  5 and 20");
				return false;	
			}
 
			
			else
			{
				loginn(_email,_pass);
				return true;
			    
				
				
			}
		

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
	
	
	function passValues(opt){
		debugger
		var namecar=document.getElementById("namecar").innerHTML;
		var engine=document.getElementById("engine").innerHTML;
		var speed=document.getElementById("speed").innerHTML;
		var milli=document.getElementById("milli").innerHTML;
		var age=document.getElementById("age").innerHTML;
		var depo=document.getElementById("depo").innerHTML;
		
		debugger
		localStorage.setItem("carname",namecar);
		localStorage.setItem("engin",engine);
		localStorage.setItem("spee",speed);
		localStorage.setItem("mill",milli);
		localStorage.setItem("ag",age);
		localStorage.setItem("dep",depo);
		localStorage.setItem("opt",opt);
		
		
		window.location="Booking.html";
		
		return false;
	}
	
	function passValuesTwo(opt){
		
		
		debugger
		var namecar2=document.getElementById("namecar2").innerHTML;
		var engine2=document.getElementById("engine2").innerHTML;
		var speed2=document.getElementById("speed2").innerHTML;
		var milli2=document.getElementById("milli2").innerHTML;
		var age2=document.getElementById("age2").innerHTML;
		var depo2=document.getElementById("depo2").innerHTML;
		
		
		debugger
		localStorage.setItem("carname2",namecar2);
		localStorage.setItem("engin2",engine2);
		localStorage.setItem("spee2",speed2);
		localStorage.setItem("mill2",milli2);
		localStorage.setItem("ag2",age2);
		localStorage.setItem("dep2",depo2);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	function passValuesThree(opt){
		
		
		debugger
		var namecar3=document.getElementById("namecar3").innerHTML;
		var engine3=document.getElementById("engine3").innerHTML;
		var speed3=document.getElementById("speed3").innerHTML;
		var milli3=document.getElementById("milli3").innerHTML;
		var age3=document.getElementById("age3").innerHTML;
		var depo3=document.getElementById("depo3").innerHTML;
		
		
		debugger
		localStorage.setItem("carname3",namecar3);
		localStorage.setItem("engin3",engine3);
		localStorage.setItem("spee3",speed3);
		localStorage.setItem("mill3",milli3);
		localStorage.setItem("ag3",age3);
		localStorage.setItem("dep3",depo3);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
	function passValuesFour(opt){
		
		
		debugger
		var namecar4=document.getElementById("namecar4").innerHTML;
		var engine4=document.getElementById("engine4").innerHTML;
		var speed4=document.getElementById("speed4").innerHTML;
		var milli4=document.getElementById("milli4").innerHTML;
		var age4=document.getElementById("age4").innerHTML;
		var depo4=document.getElementById("depo4").innerHTML;
		
		
		debugger
		localStorage.setItem("carname4",namecar4);
		localStorage.setItem("engin4",engine4);
		localStorage.setItem("spee4",speed4);
		localStorage.setItem("mill4",milli4);
		localStorage.setItem("ag4",age4);
		localStorage.setItem("dep4",depo4);
		localStorage.setItem("opt",opt);
		window.location="Booking.html";
		
		return false;
	}
	
	function passValuesFive(opt){
		
		
		debugger
		var namecar5=document.getElementById("namecar5").innerHTML;
		var engine5=document.getElementById("engine5").innerHTML;
		var speed5=document.getElementById("speed5").innerHTML;
		var milli5=document.getElementById("milli5").innerHTML;
		var age5=document.getElementById("age5").innerHTML;
		var depo5=document.getElementById("depo5").innerHTML;
		
		
		debugger
		localStorage.setItem("carname5",namecar5);
		localStorage.setItem("engin5",engine5);
		localStorage.setItem("spee5",speed5);
		localStorage.setItem("mill5",milli5);
		localStorage.setItem("ag5",age5);
		localStorage.setItem("dep5",depo5);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	function passValuesSix(opt){
		
		
		debugger
		var namecar6=document.getElementById("namecar6").innerHTML;
		var engine6=document.getElementById("engine6").innerHTML;
		var speed6=document.getElementById("speed6").innerHTML;
		var milli6=document.getElementById("milli6").innerHTML;
		var age6=document.getElementById("age6").innerHTML;
		var depo6=document.getElementById("depo6").innerHTML;
		
		
		debugger
		localStorage.setItem("carname6",namecar6);
		localStorage.setItem("engin6",engine6);
		localStorage.setItem("spee6",speed6);
		localStorage.setItem("mill6",milli6);
		localStorage.setItem("ag6",age6);
		localStorage.setItem("dep6",depo6);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
	function passValuesSeven(opt){
		
		
		debugger
		var namecar7=document.getElementById("namecar7").innerHTML;
		var engine7=document.getElementById("engine7").innerHTML;
		var speed7=document.getElementById("speed7").innerHTML;
		var milli7=document.getElementById("milli7").innerHTML;
		var age7=document.getElementById("age7").innerHTML;
		var depo7=document.getElementById("depo7").innerHTML;
		
		
		debugger
		localStorage.setItem("carname7",namecar7);
		localStorage.setItem("engin7",engine7);
		localStorage.setItem("spee7",speed7);
		localStorage.setItem("mill7",milli7);
		localStorage.setItem("ag7",age7);
		localStorage.setItem("dep7",depo7);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
	function passValuesEight(opt){
		
		
		debugger
		var namecar8=document.getElementById("namecar8").innerHTML;
		var engine8=document.getElementById("engine8").innerHTML;
		var speed8=document.getElementById("speed8").innerHTML;
		var milli8=document.getElementById("milli8").innerHTML;
		var age8=document.getElementById("age8").innerHTML;
		var depo8=document.getElementById("depo8").innerHTML;
		
		
		debugger
		localStorage.setItem("carname8",namecar8);
		localStorage.setItem("engin8",engine8);
		localStorage.setItem("spee8",speed8);
		localStorage.setItem("mill8",milli8);
		localStorage.setItem("ag8",age8);
		localStorage.setItem("dep8",depo8);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function sendContactDataToFirebase(_name,_lastname,_email,_date,_country,_message,_reasonmessage)
	{
		
		debugger
     firebase.database().ref("UserContactusInfo").push({
       name :_name,
		lastname :_lastname,
		email: _email,
		 date:_date,
		country: _country,
		 message:_message,
		 reasonmessage:_reasonmessage
		
      });
	  
	   
		 
		 debugger
		alert("Your Information send  successfully");
		
		
	}
	
		function sendBookingDataToFirebase(_namecar,_engine,_speed,_milli,_age,_depo,_customername,_customeremail,_customerphone)
	{
		var fireref=firebase.database().ref().child("UserBookingInfo");
		
		debugger
     firebase.database().ref("UserBookingInfo").push({
	 namecar:_namecar,
	 engine:_engine,
	 speed:_speed,
	 milli:_milli,
	 age:_age,
	 depo:_depo,
     customername :_customername,
	 customeremail: _customeremail,
     customerphone:_customerphone
		
      });
	  
	  fireref.child("UserBookingInfo").set("New Booking",function(error){
		  if(error)
		  {
			  alert("Your Booking has been unsuccessful"+error);
		  }
		  else{
			  alert("Your Booking has been successful");
			  redirectToThankYou();
		  }
	  });
	   
		 
		 
		
	
		
		
	}
	
	function redirectToThankYou()
	{
			
		window.location.href="Thankyou.html"
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
				document.getElementById('pass').innerHTML =alert(" ** Passwords length must be between  5 and 20");
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
		
		
		
		function productDetail()
		{
			window.location="productDetail.html"
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		function validationContactUs(){

	

			
		var _name = document.getElementById("namee").value;
		var _lastname = document.getElementById("lastname").value;
		var _email = document.getElementById("email").value;
		var _date = document.getElementById("date").value;
		var _country = document.getElementById("country").value;
		var _message = document.getElementById("message").value;
		var _reasonmessage = document.getElementById("reasonmessage").value;
		
		
		
		
				if(_name == ""){
				document.getElementById('namee').innerHTML =alert(" ** Please fill the Name field");
				return false;
			}
			else if((_name.length <= 2) || (_name.length > 20)) {
				document.getElementById('namee').innerHTML = alert("** Name length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_name)){
				document.getElementById('namee').innerHTML =alert(" ** only characters are allowed in Name field" );
				return false;
			} 


			else if(_lastname == ""){
				document.getElementById('lastname').innerHTML =alert(" ** Please fill the lastname field");
				return false;
			}
			 else if((_lastname.length <= 2) || (_lastname.length > 20)) {
				document.getElementById('lastname').innerHTML = alert("**  lastname length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_lastname)){
				document.getElementById('lastname').innerHTML =alert(" ** only characters are allowed in lastname field" );
				return false;
			}
			 
			else if(_email == ""){
				document.getElementById('email').innerHTML =alert(" ** Please fill the email id` field");
				return false;
			}
			 else if(_email.indexOf('@') <= 0 ){
				document.getElementById('email').innerHTML =alert(" ** @ Invalid Position");
				return false;
			}
 
			else if((_email.charAt(_email.length-4)!='.') && (_email.charAt(_email.length-3)!='.')){
				document.getElementById('email').innerHTML =alert(" ** . Invalid Position");
				return false;
			} 
			
				else if(_date == ""){
				document.getElementById('date').innerHTML =alert(" ** Please fill the Date field");
				return false;
			}
		
			 var eff = document.getElementById("country");
			 debugger
                var strUserr = eff.options[eff.selectedIndex].value;

                var strUser2 = eff.options[eff.selectedIndex].text;
                if(strUserr==0)
                {
                    alert("Please select a country");
					return false;
                }
           
			
			else if(_message == ""){
				document.getElementById('message').innerHTML =alert(" ** Please fill the Message field");
				return false;
			}
			 else if(_reasonmessage == ""){
				document.getElementById('reasonmessage').innerHTML =alert(" ** Please fill the Reason Message field");
				return false;
			}
			else
			{
				sendContactDataToFirebase(_name,_lastname,_email,_date,_country,_message,_reasonmessage);
				return true;
			    
				
				
			}
		

		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		function validationBookingInfo(){

	

	
	    var _namecar=document.getElementById("res").innerHTML;
		var _engine=document.getElementById("eng").innerHTML;
		var _speed=document.getElementById("spee").innerHTML;
		var _milli=document.getElementById("mili").innerHTML;
		var _age=document.getElementById("age").innerHTML;
		var _depo=document.getElementById("depo").innerHTML;
		var _customername = document.getElementById("cname").value;
		var _customeremail = document.getElementById("cemail").value;
		var _customerphone = document.getElementById("cphone").value;
		
		
		
			 
		localStorage.setItem("carname",_namecar);
		localStorage.setItem("engine",_engine);
		localStorage.setItem("speed",_speed);
		localStorage.setItem("milli",_milli);
		localStorage.setItem("age",_age);
		localStorage.setItem("depo",_depo);
		localStorage.setItem("customername",_customername);
		localStorage.setItem("customeremail",_customeremail);
		localStorage.setItem("customerphone",_customerphone); 
		
		
		
				if(_customername == ""){
				document.getElementById('cname').innerHTML =alert(" ** Please fill the Customer Name field");
				return false;
			}
			else if((_customername.length <= 2) || (_customername.length > 20)) {
				document.getElementById('cname').innerHTML = alert("** Customer Name length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_customername)){
				document.getElementById('cname').innerHTML =alert(" ** only characters are allowed in Customer Name field" );
				return false;
			} 
			 
			else if(_customeremail == ""){
				document.getElementById('cemail').innerHTML =alert(" ** Please fill the Customer Email id` field");
				return false;
			}
			 else if(_customeremail.indexOf('@') <= 0 ){
				document.getElementById('cemail').innerHTML =alert(" ** @ Missing or  Invalid Position");
				return false;
			}
 
			else if((_customeremail.charAt(_customeremail.length-4)!='.') && (_customeremail.charAt(_customeremail.length-3)!='.')){
				document.getElementById('cemail').innerHTML =alert(" ** . Missing or Invalid Position");
				return false;
			} 
			else if(_customerphone == ""){
				document.getElementById('cphone').innerHTML =alert(" ** Please fill the Customer Phone Number field");
				return false;
			}
			 else if(_customerphone.length!=10){
				document.getElementById('cphone').innerHTML =alert(" ** Customer Phone Number must be 10 digits only");
				return false;
			} 	
			
			else
			{
				sendBookingDataToFirebase(_namecar,_engine,_speed,_milli,_age,_depo,_customername,_customeremail,_customerphone);
				return true;
			    
				
				
			}
		

		}
		
	
	