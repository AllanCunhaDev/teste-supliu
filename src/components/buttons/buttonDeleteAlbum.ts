import styled from "styled-components";
import trash from "../../assets/trash-solid.svg";

const BtnDeleteAlbum = styled.button`

width: 10%;
height: 38.45px;

border-radius: 16px;

color: var(--color-pureWithe);
background-color: var(--color-buttons);

font-size: 12px;
    &:hover{
        background-color: var(--color-pureBlack);
    }

/* background-image: url(${trash});
background-repeat: no-repeat;
background-position: center;

background-color: transparent; */



`

export { BtnDeleteAlbum };
