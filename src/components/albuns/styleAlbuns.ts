import styled from "styled-components";


const DivContainerListAlbunsStyle = styled.li`
width: 100%;
height: 100px;

overflow: auto;
    & > .container_name_album_trash{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &> span{
        font-size: 16px;
        font-weight: bold;
        }
    }

  
 
`
export { DivContainerListAlbunsStyle };
