import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
        const nav = useNavigate();
        useEffect(()=>{
            nav("/")
        })
 

    return ( 
        <div></div>
     );
}
 
export default Navigate;