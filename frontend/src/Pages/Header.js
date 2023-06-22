import React, { useState } from 'react'
import handup from '../handup.png'

function Header() {

  const [noti, setNoti] = useState(false)
  const name=localStorage.getItem("username")
  const spleet=name.split(" ")
  const fName= spleet[0]
  return (
    <div>
      {noti&&
       <div style={{width:"85%", height:"100vh", backgroundColor:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"center", alignItems:"center", position:"fixed", zIndex:20}}>
          <div style={{width:"50%", height:"40vh", backgroundColor:"white", borderRadius:10,  marginTop:"2%", position:"relative"}}>
            <div style={{width:"100%", textAlign:"center"}}>
              <h1>Notification</h1>
            </div>
              <i class="fa fa-times" style={{position:"absolute", top:10, right:10, fontSize:25}}
              onClick={()=>setNoti(false)} ></i>
            <div style={{height:"12vh", width:"95%",marginLeft:"2.5%", backgroundColor:"whitesmoke",borderRadius:"10px", display:"flex"}}>
                        <div style={{height:"12vh", width:"20%",display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <div style={{height:"9vh", width:"70%",backgroundColor:"white",borderRadius:10,display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <img style={{height:"5vh", width:"60%",}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
                            </div>
                        </div>
                        <div style={{height:"12vh", width:"70%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                            <label style={{fontSize:"19px", fontWeight:"bold",letterSpacing:1,height:25}}>Christopher Morgan Has accepted request for virtual individual class</label>
                            
                        </div>
                       
                    </div>
          </div>
       </div>}

        <div style={{width:"100%",height:"25vh", backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"space-between"}}>

            <div style={{height:"20vh", width:"35%",backgroundColor:"whitesmoke",borderRadius:"15px",display:"flex", position:"relative",marginLeft:"2%"}}>
                <div style={{width:"60%", height:"20vh", display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column", paddingLeft:"3%"}}>
                    <h2 style={{letterSpacing:"1px"}}>Hello {fName}!</h2>
                    <label>It's good to see you again.</label>
                </div>
                <div style={{width:"40%", height:"20vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <img style={{width:"46%", height:"35vh", position:"absolute", bottom:0}} src="https://static.wixstatic.com/media/6a8963_1506442f6418476b9450df2333d819ee~mv2.gif"/>
                </div>
            </div>

            <div style={{height:"20vh", width:"35%",borderRadius:"15px",display:"flex", position:"relative"}}>
                <div style={{width:"70%",display:"flex", justifyContent:"space-evenly"}}>
              <input style={{height:"25px", width:"60%"}} placeholder='Search Courses'/>
              <i style={{fontSize:"22px"}} class="fa fa-bell-o" aria-hidden="true" 
              onClick={()=>setNoti(true)}></i>
              <div style={{height:"25px", width:"25px",borderRadius:5}}>
                <img style={{height:"25px", width:"25px",borderRadius:5}} src='https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_1280.jpg'/>
              </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Header