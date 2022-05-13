import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardPost from '../../Components/CardPost/CardPost';
import Header from '../../Components/Header';
import { baseURL } from '../../Constants/urls';
import useForm from '../../Hooks/useForm';
import useProtectedPage from '../../Hooks/useProtectedPage'
import useRequestData from '../../Hooks/useRequestData';
import { goToPostPage } from '../../Routes/Coordinator';
import { createPost } from '../../Services/post';
import { FeedForm, FeedContainer } from './styledFeedPage'
import { Loader } from '../../Components/Loader/Loader';


function FeedPage() {
  useProtectedPage();

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  const posts = useRequestData([], `${baseURL}/posts`);

  const onClickCard = (id) => {
    goToPostPage(navigate, id)
  }

  const { form, onChange, cleanFields } = useForm({ body: "" });

  const handlePostVote = (postId, direction) => {
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
        .post(`${baseURL}/posts/${postId}/votes`, body, headers)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response)
        })
    } else if (direction === -1) {
      axios
        .put(`${baseURL}/posts/${postId}/votes`, body, headers)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response)
        })
    } else {
      axios
        .delete(`${baseURL}/posts/${postId}/votes`, headers)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }

  const postsCard = posts && posts.map((post) => {
    return (
      <CardPost
        onClick={() => onClickCard(post.id)}
        key={post.id}
        username={post.username}
        id={post.id}
        body={post.body}
        title={post.title}
        commentCount={post.commentCount}
        userVote={post.userVote}
        voteSum={post.voteSum}
        handlePostVote={handlePostVote}
      />
    )
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, cleanFields)
  }

  return (
    <FeedContainer>
      <Header />
      <div>
        <FeedForm onSubmit={onSubmitForm}>
          <input
            placeholder="Título"
            name={"title"}
            value={form.title}
            onChange={onChange}
            required
          />

          <textarea
            name={"body"}
            onChange={onChange}
            placeholder="Escreva seu post aqui"
            value={form.body}
            required
          />

          <button>Postar!</button>
        </FeedForm>
      </div>
      <hr />
      {posts > 0 ?
        postsCard 
        :
        <Loader />
      }

    </FeedContainer>
  )
}

export default FeedPage