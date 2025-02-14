import { HiMiniArrowLongRight } from "react-icons/hi2"
import { VscCloudDownload } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { Allstate } from "./Context";
import { useRef, useState } from "react";

function Details() {
    const [isTicketClicked, setIsTicketClicked] = useState(false); 
    const [emailError, setEmailError] = useState("");
const navigate = useNavigate();
const fileInputRef = useRef(null);

const {name, setName, image, setImage, email, setEmail, request, setRequest } = Allstate();

    function handleClick () {
        navigate('/')
    }

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
      };
    
      function handleClicker() {
        setIsTicketClicked(true); // Set state to true when the button is clicked
        if (!name || !email || !request) {
          return; // Don't navigate if any field is empty
        }
    
        if (!validateEmail(email)) {
          setEmailError("Please enter a valid email address.");
          return; // Stop navigation if email is invalid
        } else {
          setEmailError(""); // Clear the error message if the email is valid
        }
    
        // If everything is valid, navigate to the next page
        navigate('/Tickets');
      }
   

   async function handleFileupload (event) {
const file = event.target.files[0];
if (!file) return;

const data = new FormData()
data.append("file", file)
data.append("upload_preset", "Gooden")
data.append("cloud_name", "djkllb0te")

const res = await fetch (" https://api.cloudinary.com/v1_1/djkllb0te/image/upload", {
method: "POST",
body: data
})
const image = await res.json()
console.log(image)
setImage(image.url)
    }

    return (
        <div className="container">
            <div className="search__container">
            <img className="image" src="/logo.png" />
    <div className="search-div">
               <p>Events</p>
            <p>My Tickets</p>
            <p>About Projects</p>
    </div>
    <div className="ticket">
                 my tickects <span>
                <HiMiniArrowLongRight className="icon-right"/>
                        </span>
                </div>
            </div>

            <div className="user__container">
            <div className="border-style">
        <div className="ticket-selection">
        <p className="ticket-text">Attendee Details</p>
        <p className="ticket-step">Step <span className="span-number">2</span> <span className="span-number">/</span> <span className="span-number">3</span> </p>
        </div>
        </div>
           <div className="ticket-div"> 
           <div className="upload-div">

             <div className="upload-semi-div">
             {image && (
                <img className="upload-main-div1" src={image} alt="img"/>
                    )}
                {!image && (
                <div className="upload-main-div">
                   
                    <VscCloudDownload className="icon-cloud"  onClick={() => fileInputRef.current.click()}  />
                
                    <label className="drag-text" type="file" >
                    Drag & drop or click to 
                    <input ref={fileInputRef} onChange={handleFileupload} className="drop" type="file" ></input> 
                    </label>
                    
                    <p className="drag-text1">upload</p>
                    
                </div>
)}
             </div>
             
           </div>
           <div className="style"></div>
           <div className="input-div">
            <div>
                    <label className="name-text">Enter your name</label>
                    <input className="input-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    {isTicketClicked && name === "" && <span className="required-message">This input is required</span>}
            
                    </div>

                    <div>
                    <label className="name-text">Enter your email*</label>
                    <input className="input-email" type="text" placeholder="hello@avioflagos.io"  value={email} onChange={(e) => setEmail(e.target.value)} required />
                    {isTicketClicked && email === "" && <span className="required-message">This input is required</span>}
              {isTicketClicked && email && !validateEmail(email) && <span className="email-error">{emailError}</span>}
            
                    </div>
                    <div>
                    <label className="name-text">Special request?</label>
                    <input className="input-request" type="text" placeholder="Textarea" value={request} onChange={(e) => setRequest(e.target.value)}  />
                    
                    </div>

                </div>
                <div className="cancel-div">
                <button onClick={handleClick} className="button-back">Back</button>
                <button onClick={handleClicker} className="button-ticket">Ticket</button>
                </div>
           </div>
            </div>
          
        </div>
    )
}

export default Details

'i want this message beside the input this input is required'