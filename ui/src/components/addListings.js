import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "./navbar";

export const AddListings = () =>{
    let navigate = useNavigate();
    const [leaseLink, setLeaseLink] = useState('')
    const [photosLink, setPhotosLink] = useState('')
    const [tempLinks, setTempLinks] = useState([]);
    const [uploadType, setUploadType] = useState(''); // new state variable
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.async = true;
        document.body.appendChild(script);
        
        script.onload = () => {
          const myWidget = window.cloudinary.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUD_NAME, 
            uploadPreset: process.env.REACT_APP_PRESET_NAME,
            folder: process.env.REACT_APP_CLOUD_FOLDER,
            sources: ['local']
          }, (error, result) => {
            if (!error && result && result.event === "success") { 
              console.log('Done! Here is the image info: ', result.info); 
              setTempLinks(prevTempLinks => [...prevTempLinks, result.info.secure_url]);
            }
          });
    
          document.getElementById("upload_lease").addEventListener("click", function(event){
            event.preventDefault();
            event.stopPropagation();
            setTempLinks([]);
            setUploadType('lease'); // set upload type
            myWidget.open();
          }, false);

          document.getElementById("upload_photos").addEventListener("click", function(event){
            event.preventDefault();
            event.stopPropagation();
            setTempLinks([]);
            setUploadType('photos'); // set upload type
            myWidget.open();
          }, false);
        };
      });
      useEffect(() => {
        const uniqueLinks = [...new Set(tempLinks)]; // remove duplicates
        if (tempLinks.length > 0) {
            if (uploadType === 'lease') {
                setLeaseLink(uniqueLinks[0]);
                console.log(leaseLink);
            } else if (uploadType === 'photos') {
                setPhotosLink(uniqueLinks);
                console.log(photosLink);
            }
        }
    }, [tempLinks, uploadType]); // add uploadType to the dependency array

      const handleSubmit = () =>{

      }
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center w-screen">
                <h1>Please fill the followind details</h1>
                <div className="mt-5 mb-5 w-1/2">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="number" className="grow" placeholder="Rent" />
                    </label>
                    <br />
                    <button id="upload_lease" className="cloudinary-button mr-5 w-1/3">Upload Lease</button>
                    <button id="upload_photos" className="cloudinary-button w-1/3">Upload Photos</button> 
                    <br />
                    <button onClick={handleSubmit} className="btn btn-outline btn-primary mt-4 w-full">Submit</button> 

                </div>
            </div>
        </div>
    )
}