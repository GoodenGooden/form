import { HiMiniArrowLongRight } from "react-icons/hi2"
import { useNavigate } from "react-router-dom";
import { Allstate } from "./Context";
//import {Allstate} from  "./Context";


function User() {
   const navigate = useNavigate()
   const {numbertickets,  setNumbertickets, ticketType, setTicketType} = Allstate();
function handleClick () {

    navigate('/Details')
}

function handleTicketTypeChange(ticket) {
    setTicketType(ticket); 
  }

  function handleNumberChange(e) {
    setNumbertickets(e.target.value); 
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
        <div className= "ticket-selection">
        <p className="ticket-text">Ticket Selection</p>
        <p className="ticket-step">Step <span className="span-number">1</span> <span className="span-number">/</span> <span className="span-number">3</span> </p>
        <div className="bord">
          <div className="bor"></div>
        </div>
        </div>

        <div className="ticket-div">
            
            <div className="fest-div">
<p className="fest">
Techember Fest ”25
</p>
<div className="fest-text">

<p className="text">Join us for an unforgettable experience at  </p>
<p className="text"> [Event Name]! Secure your spot now. </p>

<p className="text">📍 [Event Location] || March 15, 2025 | 7:00 PM </p>
</div>
            </div>
            <div className="ticket-border"></div>
            <p className="select-ticket">Select Ticket Type:</p>
            <div className="access-div">
                <div className="for-mobile-flex">
                <div className="vip-ticket">
                    <div className={`regular-access ${ticketType === "Regular" ? "selected" : ""}`}
                     onClick={() => handleTicketTypeChange("Regular")}>
                        <p className="regular-text1">
                            Free
                        </p>
                        <p className="regular-text">REGULAR ACCESS</p>
                        <p className="regular-text">20/52</p>
                        
                    </div>
                    <div className= {`vip-access ${ticketType === "VIP" ? "selected" : ""}`}
                    onClick={() =>handleTicketTypeChange ("VIP")}>
                    <p className="regular-text1">
                            $50
                        </p>
                        <p className="regular-text">VIP ACCESS</p>
                        <p className="regular-text">20/52</p>
                    </div>
                    <div className=  {`vvip-access ${ticketType === "VVIP" ? "selected" : ""}`}
                    onClick={() =>handleTicketTypeChange ("VVIP")}>
                    <p className="regular-text1">
                            $150
                        </p>
                        <p className="regular-text">VVIP ACCESS</p>
                        <p className="regular-text">20/52</p>
               </div>

                </div>
              
                </div>
            
            </div>
            <div className="number-input">
<label className="type-text">Number of Tickets</label>
<div>
<select
        value={numbertickets}
        onChange={handleNumberChange}
        className="type-number"
      >

        {[1, 2, 3, 4, 5].map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
</div>
            </div>
            <div className="button-div">
            <button className="button-cancel">Cancel</button>
            <button onClick={() => { handleClick();  }} className="button-next">Next</button>
        </div>
        </div>
       
        </div>
        
       </div>

        
    )
}

export default User
/*<input type="text" placeholder="1" className="type-number" value={numbertickets} onChange={(e) => setNumbertickets(e.target.value)} />
linear grafient for fest

background: radial-gradient(
      103.64% 57.39% at 14.02% 32.06%,
      #24A0B533,
      transparent
    ),
    rgba(10, 12, 17, 0.1);

*/
