import React,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from './BaseUrl'


function Login() {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validator, setValidator] = useState(false);

  const logincheck = () => {
    if(email!==""&password!==""){
    const item = {
      email: email,
      password: password,
    };
    axios.post(baseUrl + "addstudents/login", item).then((res) => {
      if (res.data.msg === "ok") {
        localStorage.setItem("check","okk");
        const fn =res.data.data.name
        const fn1 =res.data.data.email
        const fn2 =res.data.data.password
        const type = res.data.data.type
        const id = res.data.data._id
        localStorage.setItem("username",fn);
        localStorage.setItem("useremail",fn1);
        localStorage.setItem("userpassword",fn2);
        localStorage.setItem("type",type);
        localStorage.setItem("userId",id)
        if(type==="student"){
          localStorage.setItem("stdSkills",res.data.data.skills)
        }
        navigate("/Addcts");
      } else {
        alert(res.data.msg);
      }
    });
  }else {
    setValidator(true)
  }};
  return (
    <div>
      <div style={{width:"100%", height:"100vh", display:"flex"}}>
        <div style={{height:"100vh", width:"50%", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div style={{height:"auto", width:"75%", backgroundColor:"transparent", textAlign:"center",borderRadius:"50px"}}>
            <h1>Login</h1><br/><br/>

            <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start", marginLeft:"5%",height:"70px",justifyContent:"space-evenly"}}>
                <label>Email Address</label>
                <input onChange={(e)=>setEmail(e.target.value)} style={{width:"90%", height:35,border: validator===true? "1px solid red":"1px solid lightgrey"}}/>
            </div>
                {/* <br/> */}
            <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start",marginLeft:"5%",height:"70px",justifyContent:"space-evenly",}}>
                <label>Password</label>
                <input type="Password" onChange={(e)=>setPassword(e.target.value)} style={{width:"90%", height:35,border: validator===true? "1px solid red":"1px solid lightgrey"}}/>
            </div>
            <br/>  <br/>
            <div style={{display:"flex", justifyContent:"start", paddingLeft:"5%"}} ><button onClick={()=>logincheck()} style={{height:"40px", width:"150px", backgroundColor:"black", borderRadius:10, border:"none", color:"white"}}>Sign In</button></div>
            <br/><br/><br/><br/>
            <a onClick={()=>navigate("/Signupteacher")} style={{color:"black",textDecoration:"underline", cursor:"pointer"}}>Sign up as a teacher</a><br/>
            <a onClick={()=>navigate("/Signupstudent")} style={{color:"black",textDecoration:"underline", cursor:"pointer"}}>Sign up as a student</a><br/>
            </div>  
        </div>
        <div style={{width:"50%", height:"100vh", backgroundColor:"black", textAlign:'center', display:"flex", justifyContent:'center', alignItems:"center", color:"white"}}>
          <h2 style={{fontFamily:"Tilt Prism", textShadow:"5px 5px 10px orange"}}><label style={{fontSize:67}}>KNOWLEDGE LAND </label> <br/> VIRTUAL LEARNING PLATFORM</h2>
        </div>
        </div>
    </div>
  )
}

export default Login