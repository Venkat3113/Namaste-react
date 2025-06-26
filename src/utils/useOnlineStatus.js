import { useState, useEffect, use } from 'react';


const useOnlineStatus = () => {
   const [onlineStatus, setOnlineStatus] = useState(true);

   useEffect(() => {

        window.addEventListener("online", () => {
             setOnlineStatus(true);});
             
        window.addEventListener("offline", (event) => {
             console.log("You are not connected to the network.");
             setOnlineStatus(false);});

   },[]);


    return onlineStatus;
}

export default useOnlineStatus;
