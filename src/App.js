import Routes from "./Routes";
import GlobalStyle from "./styles/GlobalStyle";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <ToastContainer/>
      <Routes />
    </div>
  );
}

export default App;
