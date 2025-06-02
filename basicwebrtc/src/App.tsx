import { Button } from "antd"
import { Room } from "./component/Room"


function App() {
  
  const getMedia =async() =>{
 await navigator.mediaDevices.getUserMedia(
    { video: true, audio: true },
      )
  }

  return (
    <div className=" ">
      
<Room />

<div>
<Button onClick={()=> getMedia()}>Live Video</Button>
</div>


    </div>
  )
}

export default App