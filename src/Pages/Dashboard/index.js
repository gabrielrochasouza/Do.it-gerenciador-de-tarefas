import { DashboardContainer, SearchContainer, Tasks, LogOutDiv } from "./style";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { FiEdit2, FiLogOut } from "react-icons/fi";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState, useEffect } from "react";
import api from "../../Services";
import TaskContainer from "../../Components/TaskContainer";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

export default function Dashboard({ authenticated, setAuthenticated }) {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    if (!authenticated) {
        return <Redirect to="/login" />;
    }
    const token = JSON.parse(localStorage.getItem("@do.it:token"));
    api.get("task", { 
          headers:{ 
          'Authorization': `Bearer ${token}`,
          "Content-Type":'application/json'
        } 
    }).then((res) => setAllTasks(res.data.data) )
      .catch((err) => console.log(err));
  }, [allTasks]);

  const schema = yup.object().shape({
    description: yup.string().required("Escreva algo"),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const data = new Date();
  const day = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();
  const today = `${day} de ${meses[month]} de ${year}`;

  const createTask = (data) => {
      const token = JSON.parse( localStorage.getItem("@do.it:token") )
      api.post("task", data,{ 
        headers:{ 
        'Authorization': `Bearer ${token}`,
        "Content-Type":'application/json'
      } 
    }).then((res) => toast.success("Nova Tarefa Criada!") )
    .catch((err) => console.log(err));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <DashboardContainer>
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

      <Tasks>
          {allTasks.map((task,index)=>(<TaskContainer key={task._id} id={task._id} today={today}>{task.description}</TaskContainer>))}
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
