// // import { useNavigate } from "react-router-dom";
// import Alert2 from "./components/Alert2";
// import Alert1 from "./components/Alert1";
// import useNavigateWithSound from "../sound/hooks/useNavigateWithSound";

// export const alertMapper=(page:number)=>{

//     const navigateWithSound = useNavigateWithSound()

//     const handleNextPage=()=>{
//         if(page<2){
//             navigateWithSound(`/user/alerts/${page+1}`);
//         }   
//         else{
//             navigateWithSound("/user/results");
//         }
//     }

//     if(page===1){
//         return <Alert1 handleNextPage={handleNextPage}/>
//     }
//     if(page===2){
//         return <Alert2 handleNextPage={handleNextPage}/>
//     }
    
// }  