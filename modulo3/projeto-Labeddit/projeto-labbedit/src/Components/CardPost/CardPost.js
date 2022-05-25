import React from 'react'
import { PostContainer, VoteContainer, ImgBaloon, DetailRow } from './styledCardPost'

import upVoteIcon from '../../Assets/upVotePadraoCorreto.png'
import greenUpVoteIcon from '../../Assets/upVoteVerdeCorreto.png'

import downVoteIcon from '../../Assets/downVotePadraoCorreto.png'
import redDownVoteIcon from '../../Assets/downVoteVermelhoCorreto.png'

import commentBaloon from '../../Assets/commentBaloon.png'

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
            
            <div onClick={props.onClick}>
                <p> {props.username} </p>
                <p> {props.title} </p>
                <p> Título: {props.body}</p>
            </div>
            <DetailRow>
                <VoteContainer>
                    <img src={props.userVote === 1 ? greenUpVoteIcon : upVoteIcon} onClick={handleUpVote} alt='up vote' />

                    <p>{props.voteSum}</p>

                    <img src={props.userVote === -1 ? redDownVoteIcon : downVoteIcon} onClick={handleDownVote} alt='down vote' />
                </VoteContainer>
                <ImgBaloon src={commentBaloon} alt='balão comentário' />{props.commentCount}
            </DetailRow>
        </PostContainer>
    )
}

export default CardPost