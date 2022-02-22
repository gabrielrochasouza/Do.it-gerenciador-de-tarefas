import {FiHome} from "react-icons/fi"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { HomeCircle } from "./style"

export default function HomeBtn(){
    const history = useHistory()
    return(
        <HomeCircle onClick={()=>history.push('/')} >
            <FiHome />
        </HomeCircle>

    )

}