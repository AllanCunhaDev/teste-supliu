import { InputFindStyle } from "./inputStyle";

export const InputModal = (id, label, placeholder,type, name, ...register) => {
  return (
    <InputFindStyle>
      <label htmlFor={id}></label>
      <input type={type} id={id} placeholder={placeholder} name={name} {...register} />
    </InputFindStyle>
  );
};