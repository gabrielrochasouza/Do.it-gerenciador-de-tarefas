import Button from "../Button";
import { TaskContainerDiv } from "./style";
import { FiClipboard, FiCalendar } from "react-icons/fi";
import api from "../../Services";
import { toast } from "react-toastify";

export default function TaskContainer({ children, today, id, ...rest }) {
  return (
    <TaskContainerDiv>
      <div>
        <div className="task">
          <div>
            <FiClipboard />
          </div>
          <div>{children}</div>
        </div>
        <div className="linha"></div>

        <div className="calendar">
          <FiCalendar />
          {today}
        </div>
      </div>
      <Button
        isBlack={true}
        {...rest}
        onClick={() => {
          const token = JSON.parse(localStorage.getItem("@do.it:token"));
          api
            .delete(`/task/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            })
            .then((res) => toast.success("Tarefa finalizada!!"))
            .catch((err) => console.log(err));
        }}
      >
        Concluir
      </Button>
      
    </TaskContainerDiv>
  );
}
