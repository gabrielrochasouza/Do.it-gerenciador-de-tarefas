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

import { useForm } from "react-hook-form";
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
        getTasks(isCompleted)
        toast.success("Tarefa finalizada!!");
      })
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    if (!authenticated) return <Redirect to="/login" />;
    getTasks(isCompleted);

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
        getTasks(isCompleted);
        toast.success("Nova Tarefa Criada!");
      })
      .catch((err) => console.log(err));
  };

  if (!authenticated) return <Redirect to="/login" />

  console.log("recriado")
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
          console.log(isCompleted)
        }} className={!isCompleted ? "selected" : null}>Incompleto</p>
        <p onClick={()=>{
          setIsCompleted(true)
          console.log(isCompleted)
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
