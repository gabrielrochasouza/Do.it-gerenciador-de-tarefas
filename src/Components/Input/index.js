import { useState } from "react";
import { InputContainer,IconBtn } from "./style";
import {MdVisibility} from "react-icons/md"
import {MdVisibilityOff} from "react-icons/md"


export default function Input({
  label,
  inputIcon,
  errors,
  register,
  name,
  isPassword,
  ...rest
}) {
  const [visible,setVisible] = useState(false)

  return (
    <>
      <InputContainer errors={!!errors}>
        <label>
          {label} {!!errors && <span>*{errors}</span>}{" "}
        </label>
        <div>
          {inputIcon}
          {register ? (
            isPassword ? (<input type={visible ? "text" : "password"}  {...rest} {...register(`${name}`)}  />) : 
            (<input {...rest} {...register(`${name}`)}  />)
            
          ) : (
            <input {...rest} />
          )}
          {isPassword && ( 
            <IconBtn onClick={()=>setVisible(!visible)}>
              {visible ? <MdVisibility/> : <MdVisibilityOff/>}
            </IconBtn>
           )  }
        </div>
      </InputContainer>
    </>
  );
}
