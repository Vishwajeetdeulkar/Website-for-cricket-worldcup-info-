
          function checkEmail() {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)){
            return true;
            }
            return false; 
          }
          function checkName(str){
              var re = /[^a-zA-Z]/g
              if (re.test(str)) return false;
              return true;

            }

            function checkAddress(str){
              var re = /[^[a-z][A-Z][0-9]]/g
              if(re.test(str))return false; 
              return true;

            }
          function validate(){
            var emailID=document.form.email;
              var nn=document.form.name;
                var add=document.form.address;

            if((nn.value==null)||(nn.value=="")){
            alert("Please Enter your Name!")
            nn.focus();
            return false
            }
            if(checkName(nn.value)==false){
            nn.value=""
            alert("Invalid Name!");
            nn.focus()
            return false
            }
            if((emailID.value==null)||(emailID.value=="")){
            alert("Please Enter your Email ID!")
            emailID.focus()
            return false
            }
            if (checkEmail(emailID.value)==false){
            emailID.value=""
            alert("Invalid Email Adderess!");
            emailID.focus()
            return false
            }
            if ((add.value==null)||(add.value=="")){
            alert("Please Enter your Address!")
            add.focus()
            return false
            }
            if (checkAddress(add.value)==false){
            add.value=""
            alert("Invalid Adderess!");
            add.focus()
            return false
            }
            if(document.form.qua.selectedIndex==""){
            alert ( "Please select your Country!" );
     return false;  
    }
            return true
          }