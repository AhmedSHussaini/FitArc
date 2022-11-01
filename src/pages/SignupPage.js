import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import './SignupPage.css'

//DB Test
export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    age: "",
    password: "",
  });

  const navigate = useNavigate();
 
 // These methods will update the state properties.
  function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
  }

 async function onSubmit(e) {
  e.preventDefault();

  // When a post request is sent to the create url, we'll add a new record to the database.
  const newPerson = { ...form };

  await fetch("http://localhost:5000/record/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({ email: "", name: "", age: "", password:"" });
  navigate("/");
 }
 
 return (
  <div>
      <div className='SignUpBox'>
      <h1 className ='SignUpTitle'>Sign Up</h1>
          <form className ='SignUpForm' onSubmit={onSubmit}>
              <input 
                type= 'email' 
                placeholder = 'Email'
                id = "email"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
                />
              <br/>
              <input 
                type= 'text' 
                placeholder = 'Name'
                id = "name"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
                />
              <br/>
              <input 
                type= 'number' 
                placeholder = 'Age'
                id = "age"
                value={form.age}
                onChange={(e) => updateForm({ age: e.target.value })}
                />
              <br/>
              <input 
                type= 'password' 
                placeholder = 'Password'
                id = "password"
                value={form.password}
                onChange={(e) => updateForm({ password: e.target.value })}
                />
              <br/>
              <input 
                type="submit"
                value = "Sign Up"
                onClick={()=>{navigate("/profile")}}
              />
          </form>
          {/* <div className='otherOptionsContainer'>
              <p className = 'forgotPassText'>Forgot Password</p>
              <div className ='directToSignupContainer'><p>No Account?</p><button>Sign Up</button></div>
          </div> */}
      </div>
  </div>
  );

}
//End DB Test


// function SignupPage() {
//   const navigate = useNavigate();
//   return (
//     <div>
//         <div className='SignUpBox'>
//         <h1 className ='SignUpTitle'>Sign Up</h1>
//             <form className ='SignUpForm'>
//                 <input type= 'email' placeholder = 'email'></input>
//                 <br/>
//                 <input type= 'text' placeholder = 'Name'></input>
//                 <br/>
//                 <input type= 'text' placeholder = 'age'></input>
//                 <br/>
//                 <input type= 'password' placeholder = 'Password' ></input>
//                 <br/>
//                 <button onClick={()=>{navigate("/profile")}}>Log In</button>
//             </form>
//             {/* <div className='otherOptionsContainer'>
//                 <p className = 'forgotPassText'>Forgot Password</p>
//                 <div className ='directToSignupContainer'><p>No Account?</p><button>Sign Up</button></div>
//             </div> */}
//         </div>
//     </div>
//     )
// }

// export default SignupPage