import Button from "../../Components/Button";
import { FirstPage } from "./style";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


export default function Home({ authenticated }) {
  const history = useHistory();

  if(authenticated){
      return <Redirect to="/dashboard" />
  }
  return (
    <FirstPage>
      <h1>
        do<span>.</span>it
      </h1>
      <h2>Organize-se de forma fácil e efetiva</h2>
      <div>
        <Button isBlack={true} onClick={() => history.push("/signin")}>
          Cadastre-se
        </Button>
        <Button isBlack={false} onClick={() => history.push("/login")}>
          Login
        </Button>
      </div>
      
    </FirstPage>
  );
}
