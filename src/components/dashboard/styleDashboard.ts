import styled from "styled-components";


const ContainerDashboard = styled.div`
position: fixed;
inset: 0;
overflow: hidden;
width: clamp(50px, 100%, 100%);
height: clamp(50px, 100%, 100%);

display: flex;
justify-content: center;


z-index: 999;



    &>.card_geral_dashboard{
    width: 50%;
    height: 85%;

    margin: 20px auto;
    
    background-color:  rgba(207, 207, 207, 0.811);

    & > header{
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    background-color: var(--color-pureWithe);
        
        & > .container_header{
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 20px;

            @media (max-width:768px) {
                display: flex;
                flex-direction: column;
                

            }
        }

        & >.container_header h2{
            font-size: 36px;
            color: var(--color-letters);
            @media (max-width:768px) {
             font-size: 24px;
                

            }
        }
    }

    & > .container_albuns{
        height: 81%;

        overflow: auto;
        &::-webkit-scrollbar {
            width: 10px;

        }

        padding: 20px;



        & > .container_find{
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 10%;

        
        }

        & > .album{
            margin-top: 20px;
        }

        & > .div_btn_add{
            display: flex;
            justify-content: flex-end;

            width: 100%;
            height: 8%;
        }

    }


}


`
export { ContainerDashboard };
