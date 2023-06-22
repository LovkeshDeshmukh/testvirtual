import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from './BaseUrl'


function Signupteacher() {
    const navigate=useNavigate()


    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("") 
    const [qualification,setQualification]=useState("")
    const [specialization,setSpecialization]=useState("")
    const [teachingExp,setTeachingExp]=useState("")

    const postTeachersData=()=>{

      if(name!==""&email!==""&password!==""& qualification!==""&specialization!==""&teachingExp!==""){
      const item={
name:name,
email:email,
password:password,
qualification:qualification,
specialization:specialization,
teachingExp:teachingExp,
type:"teacher",

}
      axios.post(baseUrl + "addstudents", item).then(()=>navigate("/"))
      }else{
        alert("please fill the field")
      }
    }
  return (
    <div>
      <div style={{ height: "100vh", width: "100%", display: "flex" }}>
        <div
          style={{
            height: "100vh",
            width: "50%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            paddingLeft:"5%"
          }}
        >
          <div style={{ height: "95vh", width: "70%"}}>
            
              <label
                style={{
                  fontSize: 30,
                  fontWeight: "bolder",
                  letterSpacing: "1px",
                  
                }}
              >
                Signup as a Teacher
              </label>
            <br/>
            <br/>
            <br/>
<div style={{width:"100%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <input onChange={(e)=>setName(e.target.value)} placeholder="Full Name" style={{width:"100%", height:40,}}/>
            </div>
     
<div style={{width:"100%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
           
                <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" style={{width:"100%", height:40,}}/>
            </div>
<div style={{width:"100%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <input onChange={(e)=>setPassword(e.target.value)} placeholder="Password" style={{width:"100%", height:40,}}/>
            </div>
<div style={{width:"100%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <select onChange={(e)=>setSpecialization(e.target.value)} style={{width:"100%", height:40,}}>
                <option selected disabled>Specialization</option>
                  <option >JavaScript</option>
                  <option >Python</option>
                  <option >Reactjs</option>
                  <option >Nodejs</option>
                  <option >MsSQL</option>
                  <option >MongoDB</option>
                  <option >Machine Learning, AI</option>
                  <option >DevOps</option>
                  <option >Java</option>
                  <option >C#</option>
                  <option >C, C++</option>
                  <option >.NET</option>
                  </select>
            </div>
<div style={{width:"100%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
        
            <select onChange={(e)=>setQualification(e.target.value)} style={{width:"100%", height:40,}}>
                  <option selected disabled>Qualification</option>
                  <option>Master's Degree</option>
                  <option>PhD or Doctorate</option>
                  <option>Teaching Certification</option>
                  <option>Other</option>
                  </select>
            </div>
<div style={{width:"100%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <select onChange={(e)=>setTeachingExp(e.target.value)} style={{width:"100%", height:40,}}>
                  <option selected disabled>Teaching Experince</option>
                  <option value={1}>More than 1 year</option>
                  <option value={2.5}>1-3 years</option>
                  <option value={4.5}>3-5 years</option>
                  <option value={7.5}>5-10 years</option>
                  <option value={10}>More Than 10 years</option>
                </select>
            </div>
            <br/>
            <button onClick={()=>{postTeachersData()}} style={{width:"100%", height:40,borderRadius:5,color:"white", backgroundColor:"black",border:"none"}}>Create Account</button><br/><br/>
            <label>Already have an account? <span onClick={()=>navigate("/")} style={{color:"#8b5fb3"}}>Login</span></label>
          </div>
        </div>
        <div
          style={{ height: "100vh", width: "50%", }}>
             <div
          
          style={{ height: "100vh", width: "100%", backgroundColor:"black",display:"flex", justifyContent:"center", textAlign:"center", alignItems:"center", color:"white"}}>
           <h2 style={{fontFamily:"Tilt Prism", textShadow:"5px 5px 10px orange"}}><label style={{fontSize:67}}>KNOWLEDGE LAND </label> <br/> VIRTUAL LEARNING PLATFORM</h2>

        </div>
        </div>
      </div>
    </div>
  );
}

export default Signupteacher;
