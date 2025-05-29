import { useNavigate } from "react-router-dom";
import MeetOthers from "./components/MeetOthers";
import WhatSherryWants from "./components/WhatSherryWants";

export const pageMapper=(page:number)=>{

    const navigate=useNavigate();

    const handleNextPage=()=>{
        if(page<2){
            navigate(`/user/onboarding/${page+1}`);
        }   
        else{
            navigate("/user/login");
        }
    }

    if(page===1){
        return <WhatSherryWants handleNextPage={handleNextPage}/>
    }
    if(page===2){
        return <MeetOthers handleNextPage={handleNextPage}/>
    }
}  