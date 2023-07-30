import styled, { keyframes } from "styled-components";


const DivContainerModal = styled.div`
width: 100%;
height: 100%;

background-color: rgba(0,0,0,0.2);
backdrop-filter: blur(1px);

position: fixed;
top:0;
left:0;
padding-bottom: 200px;


display: flex;
align-items: center;
justify-content: center;    

`;

const FormModalStyle = styled.form`
width: 50%;
height: 30%;
margin: 0 auto;
        &>.container_inputs_modalAdd{
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &> input{
                width: 25%;
                height: 38.45px;
                margin-top: 20px;
                padding:0 10px;
                

                border-radius: 16px;
                border: 1px solid var(--color-pureBlack);
                
                &:focus {
                outline: none;
                box-shadow: 0px 0px 2px var(--color-buttons);
              }
            }
            &>.container_btns_add{
            width: 100%;
            height: 50%;

            display: flex;
            gap: 30px;
            align-items: center;
            justify-content: center;

            }
        }
        &>.container_track_inputs{
          width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &> input{
              width: 25%;
                height: 38.45px;
                margin-top: 20px;
                padding:0 10px;
                

                border-radius: 16px;
                border: 1px solid var(--color-pureBlack);
                
                &:focus {
                outline: none;
                box-shadow: 0px 0px 2px var(--color-buttons);
              }
            }
            &> .container_btn_add_track{
            width: 100%;
            height: 50%;

            display: flex;
            gap: 30px;
            align-items: center;
            justify-content: center;

            }
        }

`
const test = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Frames = styled(FormModalStyle)`
animation: ${test} 750ms;
`
export { DivContainerModal, FormModalStyle, Frames };

