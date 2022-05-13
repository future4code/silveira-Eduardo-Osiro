import styled from "styled-components";

export const CommentContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 9px 10px;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;  
    flex: none;
    order: 0;
    flex-grow: 0;  
    margin: 10px;
`

export const VoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    border: 1px solid #E0E0E0;
    border-radius: 30px; 
    margin-top: 5px;
    height: 30px;
    padding-left:10px;
    padding-right: 10px;
    width: 60px;

    img {
        width:5vw;
        height:2.5vh;
    }
`