import styled from "styled-components";


const InputFindStyle = styled.fieldset`
width: 75%;
height: 100%;
display: flex;
align-items: center;
    & > input{
        width: 100%;
        height: 60%;
        padding: 0 20px;


        border-radius: 16px;
        border: 1px solid var(--color-pureBlack);
        
        &:focus {
        outline: none;
        box-shadow: 0px 0px 2px var(--color-buttons);
        }
    }
    

`
export { InputFindStyle };
