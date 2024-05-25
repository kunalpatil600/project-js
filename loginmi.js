let form1 = document.getElementById('form1'); // Login Form
let form2 = document.getElementById('form2');  // Register Form
let arr = JSON.parse(localStorage.getItem('Registration')) || []
  
  //  form1.addEventListener("submit",()=>{
  //    alert("hi..............")
  //  })
// Login Form
// form1.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let loginEmail = document.getElementById('loginEmail').value;
//     let loginPassword = document.getElementById('loginPassword').value;
//     let RegistrationData = JSON.parse(localStorage.getItem('Registration'));
//     if(loginEmail == "" || loginPassword == ""){
//       alert("Filed The Fileds")
//     }
//     else{
//       RegistrationData.map((el)=>{
//         if(el.email == loginEmail && el.password == loginPassword){
//           alert("Login SuccessFully")
//           window.location.href = '';
//         }
//       })
//     }

   
// })

// Register Form
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    form2Obj = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }
    if(form2Obj.firstName == "" || form2Obj.lastName == "" || form2Obj.email == "" || form2Obj.password == ""){
      alert("Filed The Fileds")
    }
    else{
      
        
        arr.push(form2Obj)
      localStorage.setItem('Registration', JSON.stringify(arr)) 
        let reg1 = JSON.parse(localStorage.getItem('Registration'))
        alert("Register SuccessFully")
        window.location.href = 'http://127.0.0.1:5500/index.html';
      
     
    }
})