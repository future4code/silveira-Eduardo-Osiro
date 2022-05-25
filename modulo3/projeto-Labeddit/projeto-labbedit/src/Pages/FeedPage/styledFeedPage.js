import styled from "styled-components";

export const FeedContainer = styled.div`
    hr {
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        width: 90vw;
        height: 0.1vh
    }
`

export const PostsMap = styled.div`
    border: 2px solid;
`

export const FeedForm = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;

    input {
        width: 80%;
        background: #FFFFFF;
        border: 1px solid #D5D8DE;
        border-radius: 7px;
        height: 50px;
    }

    textarea {
        width: 80%;
        background: #FFFFFF;
        border: 1px solid #D5D8DE;
        border-radius: 7px;
        height: 100px;
        resize: none;
    }

    button {
        border: none;
        font-weight: bold;
        color: whitesmoke;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 13px 133px;
        gap: 10px;
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 27px;
        width: 64%;
        padding: 13px 100px;
        height: 50px;
    }
`















