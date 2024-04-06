import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({auth}) => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(!auth.isAuthenticated()){
            navigate('/login')
        }
    })
    return(
        <div>
            <h1> Home </h1>
        </div>
    );
  };

  export default Home;