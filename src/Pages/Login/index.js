import Button from "../../Components/Button/index.js";
import Input from "../../Components/Input/index.js";
import {
  LoginScreen,
  SideFormContainer,
  SideIcon,
  LoginForm,
} from "./style.js";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { Link, Redirect, useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../Services/index.js";
import { toast } from "react-toastify";
import HomeBtn from "../../Components/HomeBtn/index.js";

export default function Login({ authenticated, setAuthenticated }) {

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("campo obrigatório").email("email inválido"),
    password: yup.string().required("campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if(authenticated){
    return <Redirect to={"/dashboard"} />
}

  const onLogin = (data) => {
    console.log(data);
    api
      .post("user/login", data)
      .then((res) => {
        toast.success("Login feito com sucesso!");
        setAuthenticated(true)
        localStorage.setItem("@do.it:token", JSON.stringify(res.data.token));
        localStorage.setItem("@NameUser",JSON.stringify(res.data.user.name) )
        if(authenticated){
            return <Redirect to={"/dashboard"} />
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email ou Senha incorretos!");
      });
  };




  return (
    <LoginScreen>
      <SideFormContainer>
        <LoginForm onSubmit={handleSubmit(onLogin)}>
          <h1>Login</h1>
          <Input
            label="Email"
            placeholder="Email*"
            inputIcon={<FiMail />}
            name={"email"}
            register={register}
            errors={errors.email?.message}
          />
          <Input
          type="password"
            label="Senha"
            placeholder="Senha"
            inputIcon={<FiLock />}
            name={"password"}
            register={register}
            errors={errors.password?.message}
          />
          <Button type="submit" isBlack={true}>
            Enviar
          </Button>
          <div>
            {" "}
            Não tem conta? <Link to={"/signin"}>Faça seu cadastro!</Link>{" "}
          </div>
        </LoginForm>
      </SideFormContainer>

      <SideIcon>
        <svg></svg>
      </SideIcon>
      <HomeBtn/>
    </LoginScreen>
  );
}
