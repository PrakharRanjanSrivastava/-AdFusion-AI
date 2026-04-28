import { useEffect, useState } from "react"
import type { Project } from "../types"

import { ImageIcon, Loader2Icon, RefreshCw as RefreshCwIcon, SparkleIcon, VideoIcon } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GhostButton, PrimaryButton } from "../components/Buttons";
import { useAuth, useUser } from "@clerk/clerk-react";
import api from "../configs/axios";
import toast from "react-hot-toast";
import { i } from "framer-motion/client";




const Result =() => {

  const {projectId} = useParams();
  const { getToken} = useAuth()
  const {user,isLoaded} = useUser()
  const navigate = useNavigate()
 


const [project, setProjectData] = useState<Project>({}as Project)
const [ loading, setLoading] = useState(true)
const [ isGenerating,setIsGenerating] = useState(false)

const fetchProjectData = async()=>{
   try {
     const token = await getToken()
     const {data} = await api.get(`/api/project/${projectId}`,{headers:{Authorization: `Bearer ${token}`}})
     
     // WRONG: setProjectData(data.project.isGenerating)
     // RIGHT:
     setProjectData(data.project)
     setLoading(false)
     
   } catch (error:any) {
     toast.error(error?.response?.data?.message || error.message);
     console.log(error);
   }
}

const handleGenerateVideo=async()=>{
     setIsGenerating(true)
     try {
       const token = await getToken();
       
       // WRONG: const {data} =await api.post('/api/poject/video',{projectId}...
       // RIGHT:
       const {data} =await api.post('/api/project/video',{projectId},{headers:{Authorization: `Bearer ${token}`}})
       
       toast.success(data.message)
       setIsGenerating(false )
       
     } catch (error:any) {
       toast.error(error?.response?.data?.message || error.message);
       console.log(error);
     }
}

useEffect(()=>{
  if(user && !project.id){
fetchProjectData()
  }else if(isLoaded && !user){
    navigate('/')
  }
    
},[user])

// fetch project every 10 sec

      useEffect(()=>{
      if(user && isGenerating){
        const interval = setInterval(()=>{
          fetchProjectData()},10000);
          return ()=> clearInterval(interval)
      }
},[user,isGenerating])
      

      


    return loading?(
        <div className="h-screen w-full flex items-center justify-center">
            <Loader2Icon className="animate-spin text-indigo size-9"/>
            </div>
    
    ):(
        <div className="min-h-screen text-white p-6 md:p-12 mt-20">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-medium"> Generation Result</h1>
                    {/* Change 'Link' to 'a' just to test */}
<Link 
  to="/generate" 
  className="btn-secondary text-sm flex items-center gap-2"
>
   <RefreshCwIcon className="w-4 h-4" />
   <span className="max-sm:hidden">New Generation</span>
</Link>
                </header>
                {/*grid layout */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* main display */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass-panel inline-block p-2 rounded-2xl">
                            <div className={`${project?.aspectRatio ==='9:16' ? 'aspect-9/16' : 'aspect-video'} sm:max-h-200 rounded-xl bg-gray-900 overflow-hidden relative`}>
                                {project?.generatedVideo?(
                                    <video src={project.generatedVideo} muted controls autoPlay loop
                                    className="w-full h-full object-cover"/>
                                ):(
                                    <img src={project.generatedImage} alt="Generated redult"
                                    className="w-full h-full object-cover"/>
                                )}
                            </div>

                        </div>

                    </div>
                    {/* sidebar action */}
                    <div className="space-y-6">
                        {/* download */}
                        <div className="glass-panel p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">Actions

                            </h3>
                            <div className="flex flex-col gap-3">
                               {project.generatedImage ? (
  <a href={project.generatedImage} download>
    <GhostButton className="w-full justify-center rounded-md py-3">
      <ImageIcon className="size-4.5" />
      Download Image
    </GhostButton>
  </a>
) : (
  <GhostButton
    disabled
    className="w-full justify-center rounded-md py-3 opacity-50 cursor-not-allowed"
  >
    <ImageIcon className="size-4.5" />
    Download Image
  </GhostButton>
)}
                                {project.generatedVideo ? (
  <a href={project.generatedVideo} download>
    <GhostButton className="w-full justify-center rounded-md py-3">
      <VideoIcon className="size-4.5" />
      Download Video
    </GhostButton>
  </a>
) : (
  <GhostButton
    disabled
    className="w-full justify-center rounded-md py-3 opacity-50 cursor-not-allowed"
  >
    <VideoIcon className="size-4.5" />
    Download Video
  </GhostButton>
)}

                                

                            </div>

                        </div>
                        {/*generated video btn*/}
                        {/* Main Content Grid */}
{/* Generated Video Btn - Full Width Container */}
<div className="w-full mt-8">
  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden w-full group hover:bg-white/10 transition-all cursor-pointer">
    
    {/* Large Background Icon on the Right */}
    <div className="absolute top-0 right-0 p-4 opacity-10">
      <VideoIcon className="w-24 h-24 text-whitsize-24" />
    </div>

    {/* Content Area */}
    <div className="relative z-10 pr-24"> {/* Right padding prevents text from hitting the icon */}
      <h3 className="text-xl font-semibold mb-2 text-white flex items-center gap-2">
        <span className=" text-xl font-semibold mb-2">✨</span> Video Magic
      </h3>
      <p className="w-full text-gray-400 text-sm mb-6">
        Turn this static image into a dynamic video for social media.
      </p>
      {!project.generatedVideo ? (
        <PrimaryButton onClick={handleGenerateVideo}
        disabled={isGenerating} className="w-full">
            {isGenerating ?(
                <>Generating video.......</>
            ):(
                <><SparkleIcon className="size-4"/>Generate Video</>
            )}
            </PrimaryButton>
      ):(
        <div className="p-3 bg-green-500/10 border bordr-green-500/20 rounded-xl text-green-400 text-center text-sm font-medium">
            Video Generated Successfully!
        </div>
      )}
    </div>

  </div>
</div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Result