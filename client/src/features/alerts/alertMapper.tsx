import { useNavigate } from "react-router-dom";
import Alert2 from "./components/Alert2";
import Alert1 from "./components/Alert1";

export const alertMapper=(page:number)=>{

    const navigate=useNavigate();

    const handleNextPage=()=>{
        if(page<2){
            navigate(`/user/alerts/${page+1}`);
        }   
        else{
            navigate("/user/results");
        }
    }

    if(page===1){
        return <Alert1 handleNextPage={handleNextPage}/>
    }
    if(page===2){
        return <Alert2 handleNextPage={handleNextPage}/>
    }
    
}  