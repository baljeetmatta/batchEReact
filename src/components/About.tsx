import { useParams } from "react-router-dom";

const About=()=>{
    const data= useParams();
    return (
        
        <>{data.id}<div>About Page</div></>
    )
}
export default About;
