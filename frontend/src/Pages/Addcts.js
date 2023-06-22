import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios'
import { baseUrl } from './BaseUrl'
import Newsandannc from './Newsandannc'
function Addcts() {
    const [showDiv, setShowDiv]=useState(false)

    const [selectType, setSelectType]=useState(1)

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [grade,setGrade]=useState("")
    const [areaOfStudy,setAreaOfStudy]=useState("")
    const [skills,setSkills]=useState("")
    const [language,setLanguage]=useState("")
    const [qualification,setQualification]=useState("")
    const [specialization,setSpecialization]=useState("")
    const [teachingExp,setTeachingExp]=useState("")
    const [courseName,setCourseName]=useState("")
    const [teacherName,setTeacherName]=useState("")
    const [heading,setHeading]=useState("")
    const [description,setDescription]=useState("")
    const [time,setTime]=useState("")
    const [image,setImage]=useState("")

    const addTeachersData=()=>{
        const item={
  name:name,
  email:email,
  password:password,
  qualification:qualification,
  specialization:specialization,
  teachingExp:teachingExp,
  type:"teacher",
  addData:"admin"
  
  }
        axios.post(baseUrl + "addstudents", item)
      }


      const addStudentData=()=>{
        const item={
  name:name,
  email:email,
  password:password,
  grade:grade,
  areaOfStudy:areaOfStudy,
  skills:skills,
  language:language,
  type:"student",
  addData:"admin"
  }
        axios.post(baseUrl + "addstudents", item)
      }


      const addCourseData=()=>{
        const item={
  courseName:courseName,
  teacherName:teacherName,
  teacherid:teacherid,
  }
        axios.post(baseUrl + "addcourse", item)
      }


      const addNewsAndAnnuData=()=>{
        const item={
  heading:heading,
  description:description,
  time:time,
  image:image,
  }
        axios.post(baseUrl + "newsandannu", item)
      }
      const type=localStorage.getItem("type")
      useEffect(()=>{
        getTeacher()
      })
      const [courseData,setCourseData]=useState([])
      const getTeacher=()=>{
        axios.get(baseUrl + "addstudents").then((res)=>{setCourseData(res.data.data.filter((i)=>i.type==="teacher"))})
      }
      const teacherid=courseData.filter((i)=>i.specialization===courseName&i.name===teacherName)[0]?._id
    
  return (
    <div>
        <div style={{height:"100vh", width:"100%",display:"flex"}}>
            <div style={{width:"15%", height:"100vh", backgroundColor:"white",}}>
                <Sidebar/>
            </div>
            <div style={{width:"82%",marginLeft:"1.5%", height:"100vh", display:"flex", flexDirection:"column"}}>
                <Header/>
                {type==="admin"?
                <div style={{borderRadius:10,width:"100%", height:"73vh",backgroundColor:"lightgrey",alignItems:"center",display:"flex",justifyContent:"space-evenly"}}>
                   <div style={{height:"70vh", width:"30%", display:"flex", flexDirection:"column", position:"relative"}}>
                    <button onClick={()=>setShowDiv(!showDiv)} style={{height:40,width:"50%", backgroundColor:"white", color:"black", borderRadius:10, border:"none", fontSize:15, position:"absolute", top:"10%", left:"25%"}}>Add</button><br/>
                    <div style={{height:(showDiv===true&type==="teacher"?37.5:0)||(showDiv===true&type!=="teacher"?150:0),transition:"0.5s",overflow:"hidden",width:"50%", backgroundColor:"white", color:"black", borderRadius:10, border:"none", fontSize:15, flexDirection:"column",display:"flex", alignItems:"center", justifyContent:"space-evenly", 
                position:"absolute", top:"20%", left:"25%"}}>
               {teacherid}
                        <label onClick={()=>setSelectType(1)}>Courses</label>
                        {type!=="teacher"&&
                        <label onClick={()=>setSelectType(2)}>Teachers</label>}
                        {type!=="teacher"&&
                        <label onClick={()=>setSelectType(3)}>Students</label>}
                        {type!=="teacher"&&
                        <label onClick={()=>setSelectType(4)}>News and Report</label>}
                    </div>
                   </div>

                    {selectType===3?
                   <div style={{borderRadius:10, height:"70vh", width:"60%", backgroundColor:"white", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-evenly"}}>
                    <h2>Students</h2>
                   <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <input onChange={(e)=>setName(e.target.value)} placeholder="Full Name" style={{width:"100%", height:40,}}/>
            </div>
     
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly",}}>
           
                <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" style={{width:"100%", height:40,}}/>
            </div>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <input onChange={(e)=>setPassword(e.target.value)} placeholder="Password" style={{width:"100%", height:40,}}/>
            </div>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <select onChange={(e)=>setGrade(e.target.value)} style={{width:"100%", height:40,}}>
                  <option selected disabled>Grade Level</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                  </select>
            </div>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
        
            <select onChange={(e)=>setAreaOfStudy(e.target.value)} style={{width:"100%", height:40}}>
                  <option selected disabled>Area of study</option>
                  <option>BBA</option>
                  <option>BE</option>
                  <option>B Tech</option>
                  <option>BCA</option>
                  </select>
            </div>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <select onChange={(e)=>setSkills(e.target.value)} style={{width:"100%", height:40,}}>
                  <option selected disabled>Skills</option>
                  <option>Reactjs</option>
                  <option>Nodejs</option>
                  <option>MongoDB</option>
                  <option>Html</option>
                  <option>Css</option>
                  <option>Angular</option>
     
                </select>
            </div>
            <div style={{width:"80%",display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <select onChange={(e)=>setLanguage(e.target.value)} style={{width:"100%", height:40,}}>
                  <option selected disabled>Preferred Language</option>
                  <option>Hindi</option>
                  <option>English</option>
                 
     
                </select>
            </div>
            <button onClick={()=>addStudentData()} className='btn btn-outline-success'>Submit</button>
                   </div>:null}




                   {selectType===2?
                   <div style={{borderRadius:10, height:"70vh", width:"60%", backgroundColor:"white", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-evenly"}}>
                    <h2>Teacher</h2>
                   <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <input onChange={(e)=>setName(e.target.value)} placeholder="Full Name" style={{width:"100%", height:40,}}/>
            </div>
     
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly",}}>
           
                <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" style={{width:"100%", height:40,}}/>
            </div>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <input onChange={(e)=>setPassword(e.target.value)} placeholder="Password" style={{width:"100%", height:40,}}/>
            </div>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <select onChange={(e)=>setSpecialization(e.target.value)} style={{width:"100%", height:40,}}>
                  <option selected disabled>Specialization</option>
                  <option>Reactjs</option>
                  <option>Node js</option>
                  <option>MySQL</option>
                  <option>Java</option>
                  </select>
            </div>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
        
        <select onChange={(e)=>setQualification(e.target.value)} style={{width:"100%", height:40,}}>
              <option selected disabled>Qualification</option>
              <option>BBA</option>
              <option>BE</option>
              <option>B Tech</option>
              <option>BCA</option>
              </select>
        </div>
        <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <select onChange={(e)=>setTeachingExp(e.target.value)} style={{width:"100%", height:40,}}>
                  <option selected disabled>Teaching Experince</option>
                  <option>6 Month</option>
                  <option>1 Year</option>
                  <option>2 Year</option>
                  <option>3 Year</option>
                  <option>4 Year</option>
                  <option>5 Year</option>
                  <option>6 Year</option>
                  <option>8 Year</option>
                  <option>9 Year</option>
                  <option>10 Year</option>
                  <option>11 Year</option>
                </select>
            </div>
     
            <button onClick={()=>addTeachersData()} className='btn btn-outline-success'>Submit</button>
                   </div>:null}


                   {selectType===1?
                   <div style={{borderRadius:10, height:"70vh", width:"60%", backgroundColor:"white", display:"flex", flexDirection:"column", alignItems:"center", }}><br/><br/>
                    <h2>Courses  </h2><br/><br/>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly",}}>
           
                <select onChange={(e)=>setCourseName(e.target.value)} placeholder="Course Name" style={{width:"100%", height:40,}}>
                    <option selected >--Select--</option>
                    {courseData.map((i)=><option>{i.specialization}</option>)}
                </select>
            </div><br/>
           
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <select onChange={(e)=>{setTeacherName(e.target.value)
               
                }} placeholder="Teacher Name" style={{width:"100%", height:40,}}> <option selected >--Select--</option>
                    {courseData.filter((i)=>i.specialization===courseName).map((i)=><option>{i.name}</option>)}
                </select>
            </div>
            <br/><br/>
     
            <button onClick={()=>addCourseData()} className='btn btn-outline-success'>Submit</button>
                   </div>:null}

                   {selectType===4?
                   <div style={{borderRadius:10, height:"70vh", width:"60%", backgroundColor:"white", display:"flex", flexDirection:"column", alignItems:"center", }}><br/><br/>
                    <h2>News And Announcements</h2><br/><br/>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly",}}>
           
                <input onChange={(e)=>setHeading(e.target.value)} placeholder="Heading" style={{width:"100%", height:40,}}/>
            </div><br/>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly",}}>
           
                <input onChange={(e)=>setDescription(e.target.value)} placeholder="Description" style={{width:"100%", height:40,}}/>
            </div><br/>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly",}}>
           
                <input type="time" onChange={(e)=>setTime(e.target.value)} placeholder="Time" style={{width:"100%", height:40,}}/>
            </div><br/>
            <div style={{width:"80%" ,display:"flex", flexDirection:"column",alignItems:"flex-start",height:"60px",justifyContent:"space-evenly"}}>
                <input type='file' onChange={(e)=>setImage(e.target.value)} placeholder="Image" style={{width:"100%", height:32,border:"1px solid grey"}}/>
            </div>
        
     
            <button onClick={()=>addNewsAndAnnuData()} className='btn btn-outline-success'>Submit</button>
                   </div>:null}
                </div>:<Newsandannc/>}  
            </div>
        </div>
    </div>
  )
}

export default Addcts