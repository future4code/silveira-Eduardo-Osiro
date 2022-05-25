import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #EDEDED;

    img{
        width: 28.02px;
        height: 28.64px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    button {
        border: none;
        font-weight: bold;
        color: whitesmoke;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 27px;
  
        padding: 13px 10px;
        height: 10px;
    }
`









