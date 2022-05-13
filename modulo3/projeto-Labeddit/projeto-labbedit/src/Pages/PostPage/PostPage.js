import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CardComment from '../../Components/CardComment/CardComment';
import CardPost from '../../Components/CardPost/CardPost';
import { baseURL } from '../../Constants/urls';
import useProtectedPage from '../../Hooks/useProtectedPage'
import useRequestData from '../../Hooks/useRequestData';
import useForm from '../../Hooks/useForm';
import { createComment } from '../../Services/post';
import Header from '../../Components/Header';
import { CommentForm, GoBackButton, BackButton } from './styledPostPage'
import { goToFeedPage } from '../../Routes/Coordinator'
import { Loader } from '../../Components/Loader/Loader';


function PostPage() {
  useProtectedPage();

  const navigate = useNavigate();

  const params = useParams();

  const posts = useRequestData([], `${baseURL}/posts`);

  const { form, onChange, cleanFields } = useForm({ body: '' });

  const handleCommentVote = (commentId, direction) => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      direction: direction
    }
    if (direction === 1) {
      axios
        .post(`${baseURL}/comments/${commentId}/votes`, body, headers)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response)
        })
    } else if (direction === -1) {
      axios
        .put(`${baseURL}/comments/${commentId}/votes`, body, headers)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response)
        })
    } else {
      axios
        .delete(`${baseURL}/comments/${commentId}/votes`, headers)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }

  const selectedPost = posts.map((post) => {
    if (post.id === params.id) {
      return (
        <CardPost
          key={post.id}
          username={post.username}
          id={post.id}
          body={post.body}
          title={posts.title}
          comentCount={post.commentCount}
          userVote={post.userVote}
          voteSum={post.voteSum}
          handleCommentVote={handleCommentVote}
        />
      )
    }
  })

  const postComments = useRequestData([], `${baseURL}/posts/${params.id}/comments`)

  const postDetails = postComments.map((comment) => {
    return (
      <CardComment key={comment.id}
        username={comment.username}
        body={comment.body}
      />
    )

  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    createComment(form, params.id, cleanFields)
  };

  return (
    <div>
      <Header />

      {posts.length > 0 ? selectedPost : <Loader />}
      <CommentForm onSubmit={onSubmitForm}>
        <textarea
          placeholder="Adicionar comentário"
          name={"body"}
          onChange={onChange}
          value={form.body}
          required
        />
        <button>Responder</button>
      </CommentForm>
      {postDetails ? selectedPost : <Loader />}
      <BackButton>
        <GoBackButton onClick={() => goToFeedPage(navigate)}> Voltar </GoBackButton>
      </BackButton>


    </div>
  )
}

export default PostPage