import { HiMiniArrowLongRight } from "react-icons/hi2"
import Svg from "./Svg"
import { Allstate } from "./Context"

function Tickets() {
   const {numbertickets, ticketType, name, image, email, request} = Allstate()


    return (
        <div className="container">
            <div className="search__container1">
                <img className="image" src="/logo.png" />
                <div className="search-div">
                    <p>Events</p>
                    <p>My Tickets</p>
                    <p>About Projects</p>
                </div>
                <div className="ticket">
                    my tickects <span>
                        <HiMiniArrowLongRight className="icon-right" />
                    </span>
                </div>
            </div>

            <div className="user__container1">
                <div className="border-style">
                    <div className="ticket-selection1">
                        <p className="ticket-text1">Ready</p>
                        <p className="ticket-step">Step <span className="span-number">3</span> <span className="span-number">/</span> <span className="span-number">3</span> </p>
                        <div className="bord1">
        <div className="bor2"></div>
        </div>
                    
                    </div>
                   
                </div>
                <div className="ticket-booked ">
                    <p className="booked-text">Your Ticket is Booked!</p>
                    <p className="email-text">Check your email for a copy or you can download </p>
                </div>

                < Svg />
               
                <div className="ticket-fest-div">
                    <div className="festive-div">
                        <p className="text-1">
                            Techember Fest ”25
                        </p>
                        <p className="text-2">
                            📍 04 Rumens road, Ikoyi,Lagos
                        </p>
                        <p className="text-3">
                            📅 March 15, 2025 | 7:00 PM
                        </p>
                    </div>
                    <div className="image-border">
                        <img className="img" src= {image} alt="img" />
                    </div>
                    <div className="form-div">
                        <div className="form-grid">
                        <div className="div-1">
                            <div className="div-11">
                                <label className="label-name1">Enter your name</label>
                                <input className="label-name" value= {name}  readOnly/>
                            </div>
                            <div className="div-22">
                                <label className="label-name1">Ticket Type:</label>
                                <input className="label-name" value={ticketType} readOnly />
                            </div>
                        </div>
                    
                        <div className="div-2">
                            <div className="div-33">
                                <label className="label-name1"> Enter your email</label>
                                <input className="label-name" value= {email} readOnly />
                                </div>

                            <div className="div-5">
                            <div className="div-44">
                                <label className="label-name1">Ticket For:</label>
                                <input className="label-name" value={numbertickets} readOnly />
                                </div>  
                            </div>
                        </div>
                    </div>
                            
                        
                        <div className="label-name1">Special Request?</div>
                        <div className="label-name">{request}</div>
                    </div>
                    <div className="barcode">
                  <img src="/Bar Code.png"  alt="img"/>
</div>
                </div>

             
            </div>
           

        </div>
    )
}

export default Tickets
