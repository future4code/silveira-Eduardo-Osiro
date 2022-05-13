import React from 'react'
import { CommentContainer, VoteContainer } from './styledCardComment'

import upVoteIcon from '../../Assets/upVotePadraoCorreto.png'
import greenUpVoteIcon from '../../Assets/upVoteVerdeCorreto.png'

import downVoteIcon from '../../Assets/downVotePadraoCorreto.png'
import redDownVoteIcon from '../../Assets/downVoteVermelhoCorreto.png'

function CardComment(props) {

    const handleUpVote = () => {
        if (props.userVote === 1) {
            props.handleCommentVote(props.id)
        } else {
            props.handleCommentVote(props.id, 1)
        }
    }

    const handleDownVote = () => {
        if (props.userVote === -1) {
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

                <VoteContainer>
                    <img src={props.userVote === 1 ? greenUpVoteIcon : upVoteIcon} onClick={handleUpVote} alt='up vote' />

                    <p>{props.voteSum}</p>

                    <img src={props.userVote === -1 ? redDownVoteIcon : downVoteIcon} onClick={handleDownVote} alt='down vote' />
                </VoteContainer>
            </CommentContainer>


        </div>
    )
}

export default CardComment