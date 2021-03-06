import Button from "../../Components/Button/index.js";
import Input from "../../Components/Input/index.js";
import {
  SubmitScreen,
  SideFormContainer,
  SideIcon,
  LoginForm,
} from "./style.js";
import { FiMail } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../Services/index.js";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import HomeBtn from "../../Components/HomeBtn/index.js";
import { useEffect } from "react";

export default function Signin({ authenticated,setAuthenticated }) {

  useEffect(()=>{
    if (authenticated) {
      return <Redirect to={"/dashboard"} />;
    }
  },[authenticated])

  const schema = yup.object().shape({
    name: yup.string().required("campo obrigatório"),
    email: yup.string().required("campo obrigatório").email("email inválido"),
    password: yup.string().required("campo obrigatório").min(8,'minímo 8 caracteres'),
    confirm_password: yup
      .string()
      .required("campo obrigatório")
      .oneOf([yup.ref("password")], "senhas tem que ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, email, password }) => {
    const obj = { name, email, password };
    api
      .post("user/register", obj)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        localStorage.setItem("@do.it:token", JSON.stringify(token));
        localStorage.setItem("@NameUser",JSON.stringify(res.data.user.name) )
        setAuthenticated(true)
        toast.success("Cadastro realizado com sucesso!");
        
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro no Cadastro!");
      });
  };

  if (authenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <SubmitScreen>
      <SideIcon>
        <svg></svg>
      </SideIcon>

      <SideFormContainer>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastro</h1>
          <Input
            label="Name"
            placeholder="Nome*"
            inputIcon={<FiUser />}
            register={register}
            name={"name"}
            errors={errors.name?.message}
          />
          <Input
            label="Email"
            placeholder="Email*"
            inputIcon={<FiMail />}
            register={register}
            name={"email"}
            errors={errors.email?.message}
          />
          <Input
            label="Senha"
            placeholder="Senha*"
            isPassword
            inputIcon={<FiLock />}
            register={register}
            name={"password"}
            errors={errors.password?.message}
          />
          <Input
            label="Confirmar Senha"
            placeholder="Confirme sua Senha*"
            isPassword
            inputIcon={<FiLock />}
            register={register}
            name={"confirm_password"}
            errors={errors.confirm_password?.message}
          />
          <Button isBlack={true} type="submit">
            Enviar
          </Button>
          <div>
            Já Tem conta? <Link to={"/login"}>Faça seu Login!</Link>{" "}
          </div>
        </LoginForm>
      </SideFormContainer>
      <HomeBtn/>
    </SubmitScreen>
  );
}
