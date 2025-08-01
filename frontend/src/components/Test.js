import { useState } from "react"
import axios from 'axios'
const Test = ()=>{
    
    const list =['Your Message','Your Name', 'Your Email'];
    const [idx,setidx]=useState(0);
    const [name,setname] = useState('');
    const [message,setmessage] = useState('');
    const [email,setemail] = useState('');
    const [raw,setraw] = useState('');
    const [result, setresult] = useState(false);
    const [timer,settimer]  = useState(false);

    const Check =()=>{
        const interval = setTimeout(()=>{
            settimer(false);
        },3000)
    }
    
    const movenext = ()=>{
        if(idx===0){
            setmessage(raw);
            console.log('message is : ',raw);
            setraw('')
        }
        else if(idx===1){
            setname(raw);
            console.log('name is : ',raw);
            setraw('')
        }
        else if(idx===2){
            setemail(raw);
            console.log('email is : ',raw);
            setraw('');
            SendMail();
        }
        setidx(prev=>(prev+1)%3);
    }

    const SendMail = async (e)=>{
        e?.preventDefault();
       try{

        const request = await axios.post("http://localhost:8000/contact", {
          email,
          name,
          message,
        });
          setresult(true);
          console.log('success');
       }catch(err){
        console.log('failure');
       }
    }

    return(
        <div className="w-[70%] mx-auto">
            <div className="flex flex-col justify-center items-center"> 
                <h1>{list[idx]}</h1>
                <input type="text" value={raw} onChange={(e)=>setraw(e.target.value)} className="border-2 border-black" />
                <button onClick={movenext} className="bg-red w-[10%]">Hit me</button>
                <p>{idx}/3</p>;
            </div>

            <div>
                {   result && timer ?  <div>Thanks for Submitting </div>  : <div></div>}
            </div>
        </div>
    )
}

export default Test