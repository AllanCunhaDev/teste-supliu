import styled from "styled-components";


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

animation: modal 1,0s;

@keyframes modal {
    from{
        transform: translate(100%);
    }
    to{
        transform: translate(0%);
    }
}

`
export { DivContainerModal };
