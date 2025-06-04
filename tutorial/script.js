const localvideoE1 =document.querySelector('#local-video');
const remotevideoE1 =document.querySelector('#remote-video');
let localstream;
let remotestream;
let peerConnection;

let peerConfiguration = {
    iceServers:[
        {
            urls:[
              'stun:stun.l.google.com:19302',
              'stun:stun1.l.google.com:19302'
            ]
        }
    ]
}
// calling to the connection or creating a connection
const call = async() =>{
await fetchUserMedia()

await createPeerConnection();


}




const fetchUserMedia =async () =>{

    return new Promise(async(resolve,reject)=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video:true,
                // audio:true
            })

            localvideoE1.srcObject =stream;

            console.log('stream', stream);
            localstream =stream;
            resolve();
        } catch (error) {
            console.log(error)
            reject()
        }
    })
}

const createPeerConnection =() =>{
    return new Promise(async(resolve,reject)=>{

        peerConnection = await new RTCPeerConnection(peerConfiguration);
       remotestream =new MediaStream();
       remotevideoE1.srcObject =remotestream;

       localstream.getTracks().forEach(track =>{
      //add track so that it can be sent to the remote peer
              peerConnection.addTrack(track,localstream);
       })
    //    for checking that everything is working fine
peerConnection.addEventListener("signalingstatechange", (event) => {
            console.log(event);
            console.log(peerConnection.signalingState)
        });


        // ice Candidate
        
peerConnection.addEventListener('icecandidate',e=>{
    console.log(`Ice Candidate found`,e);


    if(e.candidate){

    }




})



    })
}



document.querySelector('#call').addEventListener('click',call)