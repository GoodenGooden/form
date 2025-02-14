import { createContext, useContext, useState } from "react";



const Alldata = createContext ();

function Context({children}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState ('');
    const [request, setRequest] = useState ('');
    const [numbertickets, setNumbertickets] = useState('');
    const [image, setImage] = useState("");
    const [ticketType, setTicketType] = useState("Regular");
    const [step, setStep] = useState(1);


    return (
        <Alldata.Provider value={{name, step, setStep, setName, email, setEmail,  request, setRequest, image, setImage, numbertickets,
        ticketType, setTicketType, setNumbertickets}}> 
       
       {children}
       </Alldata.Provider>
    )
}


export function Allstate () {
    return useContext(Alldata)
}

export default Context


"fix this code"