import React from 'react'
import { PostContainer } from './styledCardPost'

function CardPost(props) {

    const handleUpVote = () => {
        if (props.userVote === 1) {
            props.handlePostVote(props.id)
        } else {
            props.handlePostVote(props.id, 1)
        }
    }

    const handleDownVote = () => {
        if (props.userVote === -1) {
            props.handlePostVote(props.id)
        } else {
            props.handlePostVote(props.id, -1)
        }
    }

    return (

        <PostContainer>

            <p> {props.title} </p>
            <p> {props.username} </p>
            <p>Título: {props.body}</p>
            <p>Quantidade de comentários: {props.comentCount}</p>
            <button onClick={props.onClick} > Detalhes </button>
            <div>
                <button onClick={handleUpVote}>pra cima</button>
                <p>{props.voteSum}</p>
                <button onClick={handleDownVote}>pra baixo</button>
            </div>
            <p>Votar: {props.userVote}</p>

        </PostContainer>
    )
}

export default CardPost