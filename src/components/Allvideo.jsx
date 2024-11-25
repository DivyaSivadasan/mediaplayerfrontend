import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideoApi, updateCategoryApi } from '../services/allApi'

 

function Allvideo({addStatus,setcategoryVDStatus}) {
  
  const [video,setVideo] =useState([])
  const [deleteStatus, setDeleteStatus] =useState({})


 const getAllVideo = async()=>{
  const result =await getVideoApi()
  // console.log(result);
  setVideo(result.data)
}
console.log(video);

const dragOver=(e)=>{
  e.preventDefault()
}
const videoDrop= async(e)=>{
  const {videoDetails,categoryDetails}=JSON.parse(e.dataTransfer.getData("Details"))
  console.log(videoDetails,categoryDetails);

  let result = categoryDetails.allVideos.filter((item)=>item.id!=videoDetails.id)

  const reqBody={
    category:categoryDetails.category,
    allVideos:result,
    id:categoryDetails.id
  }

  const response =await updateCategoryApi(categoryDetails.id,reqBody)
  console.log(response);

  if(response.status>=200 && response.status<300){
    setcategoryVDStatus(result);
    
  }
 
}


 useEffect(()=>{
  getAllVideo()
 },[addStatus,deleteStatus])


  return (
    <>
    <h5 className='mt-5'>All videos</h5>
    { video?.length>0?
      <div className="container-fluid mt-5" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
      <div className="row">
       { video?.map((item)=>(
        <div className="col-md-3 p-2">
        <Videocard  setDeleteStatus={setDeleteStatus} videoDetails={item}/>
        </div>

       ))}
        

      </div>
    </div>

      :
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img src="https://img.freepik.com/premium-photo/animated-businessman-curiously-peeks-into-empty-cart_351987-2103.jpg" alt="no images"  className='w-100'/>
            <h4 className='text-center text-danger'>No Video Added Yet....</h4>
          </div>

          <div className="col-md-4"></div>

        </div>

      </div>}
    </>
  )
}

export default Allvideo