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
import  {FeedForm} from './styledFeedPage'


function FeedPage() {
  useProtectedPage();

  const navigate = useNavigate();

  const posts = useRequestData([], `${baseURL}/posts`);

  const onClickCard = (id) => {
    goToPostPage(navigate, id)
  }

  const { form, onChange, cleanFields } = useForm({ title: "", body: "" });

  const handlePostVote = (postId, direction) => {
    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    const body = {
        direction: direction
    }
    if (direction === 1){
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
        title={posts.title}
        comentCount={post.commentCount}
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
    <div>
      <Header />
      <div>
        <h3>Feed</h3>
        <FeedForm onSubmit={onSubmitForm}>
          <input
            name={"title"}
            onChange={onChange}
            placeholder="título"
            value={form.title}
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
      {postsCard}
    </div>
  )
}

export default FeedPage