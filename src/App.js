
import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {

  const videoRef = useRef(null);

  async function loadShims()  {

  } 

  //var constraints = { video: { width: 400, height: 400, facingMode: { exact: "user" } } };
  // var constraints = { video: { width: 400, height: 400 }};
  // let promise = navigator.mediaDevices.getUserMedia(constraints);

  // promise.then((stream) => {
  //   console.log('stream is active ' + stream.active);
  //   const constraints = navigator.mediaDevices.getSupportedConstraints();
  //   constraints.forEach( (constraint) =>{
  //     console.log(constraint); 
  //   });

  //   navigator.mediaDevices.enumerateDevices()
  //     .then( (mediaDevices) => {
  //       mediaDevices.forEach( (mediaDevice) =>{
  //         console.log(JSON.stringify(mediaDevice.toJSON())); 
  //       });
  //     });
  // });

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {

    const mediaConstraints = { video: { width: 400, height: 400, facingMode: "user" } };

    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  return (
    <div>
    <video ref={videoRef}/>
    <canvas />
  </div>
  );
}

export default App;
