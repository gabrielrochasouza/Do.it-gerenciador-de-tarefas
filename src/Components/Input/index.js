import { InputContainer } from "./style";



export default function Input({
  label,
  inputIcon,
  errors,
  register,
  name,
  ...rest
}) {
  return (
    <>
      <InputContainer errors={!!errors}>
        <label>
          {label} {!!errors && <span>*{errors}</span>}{" "}
        </label>
        <div>
          {inputIcon}
          {register ? (
            <input {...rest} {...register(`${name}`)}  />
          ) : (
            <input type={"password"} {...rest} />
          )}
        </div>
      </InputContainer>
    </>
  );
}
