import Button from "../Button";
import { TaskContainerDiv } from "./style";
import { FiClipboard, FiCalendar } from "react-icons/fi";

export default function TaskContainer({
  children,
  today,
  id,
  allTasks,
  setAllTasks,
  getTasks,
  completarTask,
  completedOrIncompleted,
  ...rest
}) {
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
        onClick={() => {if(completedOrIncompleted===false) completarTask(id)}}
      >
        {completedOrIncompleted ? "Tarefa Concluída":"Concluir Tarefa"}
      </Button>
    </TaskContainerDiv>
  );
}
