import React from 'react'
import { CommentContainer } from './styledCardComment'

function CardComment(props) {

    const handleUpVote = () => {
        if (props.userVote === 1 ) {
            props.handleCommentVote(props.id)
        } else {
            props.handleCommentVote(props.id, 1)
        }
    }

    const handleDownVote = () => {
        if (props.userVote === -1 ) {
            props.handleCommentVote(props.id)
        } else {
            props.handleCommentVote(props.id, -1)
        }
    }

    return (
        <div>
           <CommentContainer>
               <p>Usuário: {props.username}</p>
               <p>Comentário: {props.body}</p>

               <div>
                    <button onClick={handleUpVote}>Up Vote</button>
                    <p>{props.voteSum}</p>
                    <button onClick={handleDownVote}>Down Vote</button>
               </div>
           </CommentContainer>


        </div>
    )
}

export default CardComment