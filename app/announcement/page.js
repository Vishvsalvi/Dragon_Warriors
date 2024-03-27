import React from "react";
import AnnouncementCard from "../Components/AnnouncementCard";

export default function Announcement() {
  const announcementData = []

  if(!announcementData.length){
   return (
   <div className="h-screen pt-32 px-10 bg-neutral-950 text-center">
    
     
     <h1 className="text-white text-3xl font-semibold"
     >No Announcements </h1>
     
    
  </div>
  )
  }

  return (
    <div className=" pt-32 px-10 bg-neutral-950">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        
        {
          announcementData.map((data, index) => {
            return <AnnouncementCard key={index} />
          })
        }
       
      </div>
    </div>
  );
}
