export const  Room =() =>{


    const  captureStream =() =>{
 let Capture: any =null;
 try {
    Capture = navigator.mediaDevices.getDisplayMedia({  video: {
    displaySurface: "browser",
  },
  audio: {
    suppressLocalAudioPlayback: false,
  },
  preferCurrentTab: false,
  selfBrowserSurface: "exclude",
  systemAudio: "include",
  surfaceSwitching: "include",
  monitorTypeSurfaces: "include",})

 } catch (error) {
    
 }
    }
    return (
        <div>
            <div className="w-[200px] h-[150px] border-2">
                <h2>
                    Name: xxx
                </h2>
                <div className="bg-green-600 border-2  h-[120px]">

                </div>
            </div>
 



        </div>
    )
}