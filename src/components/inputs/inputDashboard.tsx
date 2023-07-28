import { InputFindStyle } from "./inputStyle";

export const InputFind = ({id,onChange,value,type,placeholder}:any) => {
  return (
    <InputFindStyle>
      <label htmlFor="find"> </label>
      <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </InputFindStyle>
  );
};
