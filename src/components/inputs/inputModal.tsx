
export const InputModal = ({id, label, placeholder,type, name, ...register}:any) => {
  return (

      <>
      <input type={type} id={id} placeholder={placeholder} name={name} {...register} />
      </>
  
  );
};