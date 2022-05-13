import styled from "styled-components";

export const PostContainer = styled.div`
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

export const ImgBaloon = styled.img`
    height: 4vh;
`

export const DetailRow = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const DetailButton = styled.div` 
    color: rgb(100,50,0);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 50px;
    width: 100px;
    height: 40px;
    left: 29px;
    top: 676px;
    border: 1px solid #FE7E02;
    border-radius: 27px;
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

    img {
        width:5vw;
        height:2.5vh;
    }
`