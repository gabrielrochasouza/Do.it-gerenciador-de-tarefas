import {
  DashboardContainer,
  SearchContainer,
  Tasks,
  LogOutDiv,
  HelloUser,
  FilterTask,
} from "./style";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { FiEdit2, FiLogOut } from "react-icons/fi";
import { RiTodoFill } from "react-icons/ri";

import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState, useEffect } from "react";
import api from "../../Services";
import TaskContainer from "../../Components/TaskContainer";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

export default function Dashboard({ authenticated, setAuthenticated }) {
  const [tasks,setTasks] = useState([])
  const [isCompleted,setIsCompleted] = useState(false)

  const [completedTasks,setCompletedTasks] = useState([])
  const [incompletedTasks,setIncompletedTasks] = useState([])



  function getTasks(trueOrFalse) {
    const token = JSON.parse(localStorage.getItem("@do.it:token"));
    api
      .get("task", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: {
          completed: trueOrFalse,
        },
      })
      .then((res) => {
        const datas = res.data.data.map((task) => {
          const dataFormatada = new Date(task.createdAt).toLocaleDateString(
            "pt-BR",
            {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }
          );
          delete task.createdAt;
          return { ...task, createdAt: dataFormatada };
        });
       trueOrFalse ? setCompletedTasks(datas) : setIncompletedTasks(datas)
       setTasks(datas)
      })
      .catch((err) => console.log(err));
  }

  function completarTask(id){
    const token = JSON.parse(localStorage.getItem("@do.it:token"));
    api
      .put(
        `/task/${id}`,
        { completed: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const taskSelected = incompletedTasks.find(task=>task._id===id)
        setCompletedTasks([...completedTasks,taskSelected])
        taskSelected.completed=true
        getTasks(isCompleted)
        toast.success("Tarefa finalizada!!");
      })
      .catch((err) => console.log(err));
  }

  function excluirTask(id){
    const token = JSON.parse(localStorage.getItem("@do.it:token"));
    api.delete(`/task/${id}`,
      {
        headers:{
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setCompletedTasks(completedTasks.filter(task=>task._id!==id))
      //getTasks(true)
      setTasks(completedTasks.filter(task=>task._id!==id))
      toast.success("Tarefa excluída!!");
    }).catch((err) => console.log(err));
  }

  useEffect(() => {
    if (!authenticated) return <Redirect to="/login" />;
    if(completedTasks.length!==0 && incompletedTasks.length!==0){
      isCompleted ? setTasks(completedTasks) : setTasks(incompletedTasks)
    }else{
      getTasks(isCompleted)
    }
  }, [isCompleted]);

  const schema = yup.object().shape({
    description: yup.string().required("Escreva algo"),
  });

  const {register,handleSubmit,formState: { errors }} = useForm({resolver: yupResolver(schema)});

  const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",];
  const data = new Date();
  const day = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();
  const today = `${day} de ${meses[month]} de ${year}`;

  const createTask = (data) => {
    const token = JSON.parse(localStorage.getItem("@do.it:token"));
    api.post("/task", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setIsCompleted(false)
        getTasks(false);
        toast.success("Nova Tarefa Criada!");
      })
      .catch((err) => console.log(err));
  };

  if (!authenticated) return <Redirect to="/login" />


  return (
    <DashboardContainer>
      <HelloUser>
        Seja bem vindo {JSON.parse(localStorage.getItem("@NameUser"))}!!
      </HelloUser>
      <SearchContainer>
        <form onSubmit={handleSubmit(createTask)}>
          <Input
            label={today}
            register={register}
            name={"description"}
            placeholder="Criar nova tarefa"
            inputIcon={<FiEdit2 />}
            errors={errors.description?.message}
          />
          <Button type="submit" isBlack={true}>
            Adicionar
          </Button>
        </form>
      </SearchContainer>

      <FilterTask>
        <p onClick={()=>{
          setIsCompleted(false)
        }} className={!isCompleted ? "selected" : null}>Incompleto</p>
        <p onClick={()=>{
          setIsCompleted(true)
        }} className={isCompleted ? "selected": null}>Completo </p> 
      </FilterTask>

      <Tasks>
        {tasks.length===0 ? <RiTodoFill/> : tasks.map((task) =>(
          <TaskContainer
            key={task._id}
            id={task._id}
            today={task.createdAt}
            completedOrIncompleted={task.completed}
            completarTask={completarTask}
            excluirTask={excluirTask}
          >
            {task.description}
          </TaskContainer>
        ))} 
      </Tasks>
      <LogOutDiv
        onClick={() => {
          localStorage.clear();
          setAuthenticated(false);
          toast("Você saiu da sua conta.");
        }}
      >
        <FiLogOut />
      </LogOutDiv>
    </DashboardContainer>
  );
}
